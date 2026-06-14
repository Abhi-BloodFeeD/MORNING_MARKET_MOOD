/** @type {import('tailwindcss').Config} */
import { plugin } from 'tailwindcss/plugin';

export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        // Neutrals from DESIGN.md
        canvas: '#ffffff',
        'canvas-soft': '#fafafa',
        'canvas-soft-2': '#f5f5f5',
        hairline: '#ebebeb',
        'hairline-strong': '#a1a1a1',
        ink: '#171717',
        body: '#4d4d4d',
        mute: '#888888',
        // Financial Accents
        bullish: '#10b981',
        bearish: '#ef4444',
        neutral: '#f59e0b',
        info: '#3b82f6',
        warning: '#f97316',
        // Semantic (aliases)
        success: '#10b981',
        error: '#ef4444',
      },
      // Typography
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monospace'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '48px', letterSpacing: '-2.4px' }],
        'display-lg': ['32px', { lineHeight: '40px', letterSpacing: '-1.28px' }],
        'display-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.96px' }],
        'display-sm': ['20px', { lineHeight: '28px', letterSpacing: '-0.6px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'caption': ['12px', { lineHeight: '16px' }],
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        tightest: '-2.4px',
        tighter: '-1.28px',
        tight: '-0.96px',
        normal: '0px',
        wide: '0.28px',
        wider: '0.56px',
        widest: '1.12px',
      },
      // Spacing (4px base)
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '96px',
        '6xl': '128px',
        section: '192px',
      },
      // Border Radius
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        'pill-sm': '64px',
        pill: '100px',
        full: '9999px',
      },
      // Box Shadow (Stacked shadows from DESIGN.md)
      boxShadow: {
        // Level 0: None (handled by default 'none')
        // Level 1: Inset hairline
        'inset-hairline': 'inset 0 0 0 1px rgba(0,0,0,0.08)',
        // Level 2: Subtle Drop
        'level-2': '0px 1px 1px rgba(0,0,0,0.02), 0px 2px 2px rgba(0,0,0,0.03)',
        // Level 3: Soft Stack
        'level-3': '0px 2px 2px rgba(0,0,0,0.02), 0px 8px 8px -8px rgba(0,0,0,0.02)',
        // Level 4: Float Stack
        'level-4': '0px 2px 2px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02)',
        // Level 5: Modal
        'level-5': '0px 1px 1px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02), 0px 24px 32px -8px rgba(0,0,0,0.06)',
        // Utility classes for combining with inset hairline
        'inset-level-2': ['0px 1px 1px rgba(0,0,0,0.02), 0px 2px 2px rgba(0,0,0,0.03)', 'inset 0 0 0 1px rgba(0,0,0,0.08)'],
        'inset-level-3': ['0px 2px 2px rgba(0,0,0,0.02), 0px 8px 8px -8px rgba(0,0,0,0.02)', 'inset 0 0 0 1px rgba(0,0,0,0.08)'],
        'inset-level-4': ['0px 2px 2px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02)', 'inset 0 0 0 1px rgba(0,0,0,0.08)'],
        'inset-level-5': ['0px 1px 1px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02), 0px 24px 32px -8px rgba(0,0,0,0.06)', 'inset 0 0 0 1px rgba(0,0,0,0.08)'],
      },
      // Optional: Drop shadow filter for SVG elements
      dropShadow: {
        none: '0 0 #000',
        sm: '0 1px 1px rgba(0,0,0,0.1)',
        md: '0 2px 2px rgba(0,0,0,0.1)',
        lg: '0 4px 4px rgba(0,0,0,0.1)',
        xl: '0 8px 8px rgba(0,0,0,0.1)',
        '2xl': '0 12px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    // Add any custom plugins here
    plugin(function({ addBase, addUtilities }) {
      // Base styles
      addBase({
        html: { fontSize: '16px' },
        body: {
          '@apply bg-canvas-soft text-ink antialiased': {},
        },
      });

      // Utilities for quick access
      addUtilities({
        '.text-bullish': { color: '#10b981' },
        '.text-bearish': { color: '#ef4444' },
        '.text-neutral': { color: '#f59e0b' },
        '.bg-bullish': { backgroundColor: '#10b981' },
        '.bg-bearish': { backgroundColor: '#ef4444' },
        '.bg-neutral': { backgroundColor: '#f59e0b' },
      });
    }),
  ],
  // Important: Use the 'class' strategy for better compatibility
  prefix: '',
  important: false,
  separator: ':',
};