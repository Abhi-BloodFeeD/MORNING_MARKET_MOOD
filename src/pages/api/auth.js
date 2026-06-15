// Auth API endpoints
// Handles user authentication (login, logout, register, session)
// In a real implementation, this would connect to a database and use proper security

import { cookies } from 'astro:cookies';

// Mock user database (in real app, this would be a real database)
const mockUsers = [
  {
    id: '1',
    email: 'user@example.com',
    password: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', // password: secret
    name: 'John Doe',
    role: 'user'
  }
];

// Helper function to verify password (in real app, use bcrypt)
// This is a simplified version for demo - real implementation should use proper password hashing
function verifyPassword(plainText, hashed) {
  // In reality, you'd use bcrypt.compare()
  // For demo, we'll just check if it matches our mock
  return plainText === 'secret' && hashed === '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW';
}

// Helper function to generate JWT-like token (simplified)
function generateToken(user) {
  // In reality, use jsonwebtoken library with proper secret
  return btoa(JSON.stringify({
    id: user.id,
    email: user.email,
    role: user.role,
    exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hour expiration
  }));
}

// Helper function to verify token
function verifyToken(token) {
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.exp > Date.now() ? decoded : null;
  } catch (err) {
    return null;
  }
}

export async function POST({ request }) {
  try {
    const { action } = await request.json();

    switch (action) {
      case 'login': {
        const { email, password } = await request.json();

        // Find user
        const user = mockUsers.find(u => u.email === email);

        if (!user || !verifyPassword(password, user.password)) {
          return new Response(
            JSON.stringify({ error: 'Invalid credentials' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }

        // Generate token
        const token = generateToken(user);

        // Set cookie
        cookies.set('auth-token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 // 24 hours
        });

        return new Response(
          JSON.stringify({
            user: { id: user.id, email: user.email, name: user.name, role: user.role }
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      case 'logout': {
        cookies.delete('auth-token');
        return new Response(
          JSON.stringify({ message: 'Logged out successfully' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      case 'register': {
        const { email, password, name } = await request.json();

        // Check if user already exists
        if (mockUsers.some(u => u.email === email)) {
          return new Response(
            JSON.stringify({ error: 'User already exists' }),
            { status: 409, headers: { 'Content-Type': 'application/json' } }
          );
        }

        // In real app, hash the password properly
        const newUser = {
          id: (mockUsers.length + 1).toString(),
          email,
          password: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', // Mock hash
          name,
          role: 'user'
        };

        mockUsers.push(newUser);
        const token = generateToken(newUser);

        cookies.set('auth-token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24
        });

        return new Response(
          JSON.stringify({
            user: { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role }
          }),
          { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
      }

      case 'me': {
        const token = cookies.get('auth-token')?.value;
        if (!token) {
          return new Response(
            JSON.stringify({ error: 'Not authenticated' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }

        const userData = verifyToken(token);
        if (!userData) {
          cookies.delete('auth-token');
          return new Response(
            JSON.stringify({ error: 'Invalid or expired token' }),
            { status: 401, headers: { 'Content-Type': 'application/json' } }
          );
        }

        const user = mockUsers.find(u => u.id === userData.id);
        if (!user) {
          return new Response(
            JSON.stringify({ error: 'User not found' }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({
            user: { id: user.id, email: user.email, name: user.name, role: user.role }
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Authentication error', message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// GET handler for checking auth status
export async function GET({ request }) {
  const token = cookies.get('auth-token')?.value;
  if (!token) {
    return new Response(
      JSON.stringify({ authenticated: false }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const userData = verifyToken(token);
  const authenticated = !!userData;

  return new Response(
    JSON.stringify({ authenticated, user: userData || null }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}