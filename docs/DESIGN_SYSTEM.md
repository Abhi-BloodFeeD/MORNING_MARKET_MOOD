# Design System

## Overview
The Market Bias Predict design system adapts the Vercel-inspired design tokens (from DESIGN.md) to create a premium financial intelligence platform. It maintains the core principles of minimalism, premium feel, and data-focus while incorporating financial domain-specific colors and components.

## Foundation
Our design system builds upon the following layers:
1. **Design Tokens** (colors, typography, spacing, shadows, radii)
2. **Base Styles** (global resets, defaults)
3. **Components** (reusable UI elements)
4. **Patterns** (common layouts and flows)
5. **Templates** (page layouts)

## Design Tokens

### Color Palette
We retain the Vercel-inspired grayscale system but introduce financial domain-specific accent colors.

#### Neutrals (from DESIGN.md)
- Canvas: `#ffffff` (pure white)
- Canvas Soft: `#fafafa` (98% white) - page background
- Canvas Soft 2: `#f5f5f5` (95% white) - inset surfaces
- Hairline: `#ebebeb` (1px divider)
- Hairline Strong: `#a1a1a1` (500-level gray)
- Ink: `#171717` (primary text, near-black)
- Body: `#4d4d4d` (secondary text)
- Mute: `#888888` (tertiary text)
- On Primary: `#ffffff` (text on dark surfaces)

#### Financial Accents
- **Bullish (Positive)**: `#10b981` (emerald-500) - for bullish indicators, positive changes
- **Bearish (Negative)**: `#ef4444` (red-500) - for bearish indicators, negative changes
- **Neutral**: `#f59e0b` (amber-500) - for neutral/unchanged
- **Info**: `#3b82f6` (blue-500) - for informational elements
- **Warning**: `#f97316` (orange-500) - for warnings/caution

#### Semantic Colors (for feedback)
- Success: `#10b981` (same as bullish)
- Error: `#ef4444` (same as bearish)
- Warning: `#f97316`
- Info: `#3b82f6`

#### Interactive States
- Hover overlays: 5% opacity of accent color
- Active/Pressed: 10% opacity of accent color
- Disabled: 40% opacity of Body color

### Typography
We use the Geist font system (from DESIGN.md) with the following hierarchy:

#### Display Text (for headlines, metrics)
- Display XL: 48px, weight 600, letter-spacing -2.4px
- Display LG: 32px, weight 600, letter-spacing -1.28px
- Display MD: 24px, weight 600, letter-spacing -0.96px
- Display SM: 20px, weight 600, letter-spacing -0.6px

#### Body Text
- Body LG: 18px, weight 400
- Body MD: 16px, weight 400 (default)
- Body MD Strong: 16px, weight 500
- Body SM: 14px, weight 400
- Body SM Strong: 14px, weight 500

#### Caption & Code
- Caption: 12px, weight 400
- Caption Mono: 12px, weight 400 (Geist Mono)
- Code: 13px, weight 400 (Geist Mono)
- Code Mono: same as Code

#### Button Text
- Button MD: 14px, weight 500
- Button LG: 16px, weight 500

### Spacing (4px base unit)
- xxs: 4px
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 40px
- 3xl: 48px
- 4xl: 64px
- 5xl: 96px
- 6xl: 128px
- section: 192px

### Border Radius
- none: 0px
- xs: 4px
- sm: 6px (form inputs, nav buttons)
- md: 8px (cards, feature items)
- lg: 12px (pricing cards, larger features)
- xl: 16px (cards with image caps)
- pill-sm: 64px (tab pills)
- pill: 100px (marketing CTAs)
- full: 9999px (circular avatars, icon buttons)

### Shadows (Stacked, from DESIGN.md)
- Level 0: None (flat)
- Level 1: `inset 0 0 0 1px rgba(0,0,0,0.08)` (hairline border)
- Level 2: `0px 1px 1px rgba(0,0,0,0.02), 0px 2px 2px rgba(0,0,0,0.03) + Level 1`
- Level 3: `0px 2px 2px rgba(0,0,0,0.02), 0px 8px 8px -8px rgba(0,0,0,0.02) + Level 1`
- Level 4: `0px 2px 2px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02) + Level 1`
- Level 5: `0px 1px 1px rgba(0,0,0,0.02), 0px 8px 16px -4px rgba(0,0,0,0.02), 0px 24px 32px -8px rgba(0,0,0,0.06) + Level 1`

### Elevation Usage
- Level 0: Hero bands, full-bleed sections
- Level 1: Default card chrome
- Level 2: Slightly elevated cards (template grids)
- Level 3: Medium elevation (feature grids)
- Level 4: Large elevation (pricing cards, callout panels)
- Level 5: Modal/dialog surfaces, dropdowns

## Brand-Specific Applications

### Market Bias Indicators
- Bullish: Background `#10b981` with 10% opacity, Text `#10b981`, or inverse (white on `#10b981`) for strong signals
- Bearish: Background `#ef4444` with 10% opacity, Text `#ef4444`, or inverse
- Neutral: Background `#f59e0b` with 10% opacity, Text `#f59e0b`, or inverse

### Interactive Elements
- Primary Buttons: Background `#171717` (Ink), Text `#ffffff`
- Secondary Buttons: Background `#ffffff`, Text `#171717`
- Hover States: Primary buttons get 5% opacity white overlay; Secondary get 5% opacity black overlay
- Focus Ring: 2px solid `#3b82f6` (blue-500) with 2px offset

### Data Visualization
- Charts: Use Bullish/Bearish/Neutral colors for positive/negative/neutral values
- Gridlines: Hairline color (`#ebebeb`)
- Axes: Body color (`#4d4d4d`) for lines, Caption for text
- Tooltips: Canvas background with Level 4 shadow, Ink text, Hairline border

## Implementation with Tailwind CSS v4

### Configuration
We will extend Tailwind's default theme with our design tokens.

#### Colors
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        canvas: '#ffffff',
        'canvas-soft': '#fafafa',
        'canvas-soft-2': '#f5f5f5',
        hairline: '#ebebeb',
        'hairline-strong': '#a1a1a1',
        ink: '#171717',
        body: '#4d4d4d',
        mute: '#888888',
        // Financial accents
        bullish: '#10b981',
        bearish: '#ef4444',
        neutral: '#f59e0b',
        info: '#3b82f6',
        warning: '#f97316',
        // Semantic
        success: '#10b981',
        error: '#ef4444',
      }
    }
  }
}
```

#### Typography
```js
// tailwind.config.js (continued)
export default {
  theme: {
    extend: {
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
      }
    }
  }
}
```

#### Spacing, Radius, etc.
Similar extensions for spacing, borderRadius, boxShadow.

### Usage in Components
- Utilize `@apply` directives in component styles or use `class` attribute directly
- Example: `<button class="bg-ink text-white font-medium px-4 py-2 rounded-pill">Primary</button>`
- For dark mode: since we are dark mode first, we may not need light variant, but we can prepare
- Use CSS custom properties for tokens that need to be accessed in JS (e.g., for charts)

## Accessibility
- Color contrast: Ensure all text meets WCAG AA (minimum 4.5:1) for body text, AAA for large text
- Focus visible: Ensure interactive elements have clear focus indicators
- Motion safety: Respect `prefers-reduced-motion` media query
- Text scaling: Support user-initiated text size increases (use relative units where appropriate)
- Screen reader: Use semantic HTML and ARIA labels where needed

## Motion & Animation
- Entrance: Fade up or slide up for elements entering viewport
- Hover: Scale 1.02-1.05, color shift 5-10%
- Press: Scale 0.95-0.98
- Data transitions: Smooth duration 300-500ms with ease-out
- Loading: Skeleton placeholders or spinners
- All animations respect `prefers-reduced-motion` (use `@media (prefers-reduced-motion: reduce)` to disable or simplify)

## Documentation & Maintenance
- This document should be updated as the design system evolves
- Component libraries should reference token names, not hardcoded values
- Implement a token viewer page for reference
- Regular audits for consistency and accessibility

## Files
- `tailwind.config.js` - Tailwind configuration with our design tokens
- `src/styles/global.css` - Global styles and base layers
- `src/components/` - Component implementations
- `docs/DESIGN_SYSTEM.md` - This document