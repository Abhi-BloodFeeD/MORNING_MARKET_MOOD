# Component Architecture

## Overview
This document outlines the reusable UI components for the Market Bias Predict platform. Components are organized by category and purpose, following Atomic Design principles where applicable.

## Core Layout Components
These components define the overall page structure.

### Layout.astro
- Main layout wrapper that includes `<Header />` and `<Footer />`
- Provides `<slot />` for page content
- Handles page transitions and global styles

### Header.astro
- Contains logo, navigation links, and auth/CTA buttons
- Responsive: collapses to hamburger menu on mobile
- Sticky positioning
- Dark mode background with ink-colored text

### Footer.astro
- Multi-column layout: Product, Company, Legal, Social Links
- Dark background with body-colored text
- Responsive: stacks columns on mobile

## UI Elements (Atoms & Molecules)
Reusable, context-independent components.

### Button
- Variants: primary (black pill), secondary (white pill), ghost (text-only)
- Sizes: lg (marketing), md (nav/form), sm (compact)
- States: default, hover, focus, disabled, loading
- Based on Tailwind v4 and design tokens from DESIGN.md

### Badge
- Variants: secondary (soft background), status (bullish/bearish/neutral)
- Shapes: pill, rounded, circular
- Uses for confidence scores, event tags, sector labels

### Card
- Variants: default (canvas background), soft (canvas-soft), featured (primary background)
- Sizes: md, lg, xl
- Includes optional header, body, footer sections
- Elevation: Level 2-4 stacked shadows (from DESIGN.md)

### Form Elements
- Input: text, email, number, textarea
- Select: dropdown with search capability
- Checkbox, Radio, Toggle
- Label, HelperText, ErrorMessage
- All use hairline borders and rounded sm

### Typography
- Headings: Display XL through Display SM (from DESIGN.md)
- Body: Body LG through Body SM (from DESIGN.md)
- Caption: Caption and Caption Mono (from DESIGN.md)
- Code: Code and Code Mono (from DESIGN.md)
- Utility classes for text color, weight, alignment

### Avatar
- Circular image with fallback to initials
- Sizes: xs, sm, md, lg
- Used for team pages, comment sections (if applicable)

### Loader
- Spinner and skeleton variants
- Used for loading states

### Tooltip
- On hover/focus tooltip with arrow
- Dark background, small text

### Toggle Switch
- For dark/light mode toggle (if implemented)
- Or for boolean settings

## Data Visualization Components
Specialized components for displaying financial data.

### BiasMeter
- Circular or horizontal meter showing bullish/bearish/neutral balance
- Color-coded: green (bullish), red (bearish), yellow (neutral)
- Shows confidence score in center

### EventTimeline
- Horizontal or vertical timeline showing events throughout the day
- Each event dot with hover tooltip showing summary
- Click to expand details

### CorrelationGraph
- Animated flow diagram showing event relationships (e.g., Inflation ↓ → Rate Cut ↑)
- Nodes and links with physics-based animation
- Color-coded by event type

### SectorPerformance
- Horizontal bar chart showing sector gains/losses
- Color-coded: green for positive, red for negative
- Shows top 6 sectors

### GlobalMap
- Interactive world map using SVG or library (like D3 or Mapbox GL)
- Color-coded regions: green (positive), red (negative), yellow (neutral)
- Tooltip on hover showing country/region details
- Click to drill down

### ConfidenceMeter
- Radial progress bar showing confidence percentage
- Label: "Confidence: 85%"
- Subtext explaining factors

### MarketNarrative
- Card containing a paragraph explaining today's market story
- Typographic emphasis on key terms
- Optional icon illustration

## Page-Specific Components
Components used primarily on specific pages but potentially reusable.

### EventCard
- Used on Economic Events and Corporate News pages
- Shows: logo (for corporate), timestamp, summary, impact score, sentiment
- Clickable to expand to full detail

### SectorCard
- Used on Sector Impact page
- Shows: sector name, bias (bull/bear/neutral), top drivers, affected companies
- Clickable for sector detail

### HistoricalBiasItem
- Used in Historical Bias Archive
- Shows: date, bias indicator, confidence, top event, outcome (actual market move)
- Clickable to view full day detail

### KnowledgeGraphNode
- Part of Interactive Knowledge Graph (if implemented)
- Draggable node representing an event, sector, or company
- Links show correlation strength

## Navigation Components
- NavLink: individual link in header nav
- NavCTA: primary/secondary buttons in header (Sign Up, Log In, Ask AI)
- MobileMenu: hamburger menu and mobile drawer
- Breadcrumb: for deep navigation (e.g., Sector > Technology > Company)
- Pagination: for lists of events, news, historical dates

## Overlays & Feedback
- Modal: for detailed views, forms, etc.
- Toast: transient feedback messages
- Dropdown: for user menu, language selector, etc.
- Drawer: for filters, sidebar on mobile

## Implementation Guidelines
1. All components should accept `class:` spread for extending Tailwind classes
2. Use TypeScript interfaces for component props
3. Follow accessibility standards (WCAG AA)
4. Use lazy loading for images and heavy components
5. Implement motion-safe animations (respects `prefers-reduced-motion`)
6. Theme-aware: use CSS variables for colors that adapt to dark/light (though dark mode first)
7. Export components from `src/components/` barrel if needed

## Component Organization (Proposed)
```
src/
  components/
    layout/
      Layout.astro
      Header.astro
      Footer.astro
    ui/
      button/
        Button.astro
        ButtonGroup.astro
      badge/
        Badge.astro
      card/
        Card.astro
      form/
        Input.astro
        Select.astro
        textarea/
          Textarea.astro
      typography/
        Heading.astro
        BodyText.astro
        Caption.astro
      avatar/
        Avatar.astro
      loader/
        Loader.astro
      tooltip/
        Tooltip.astro
      toggle/
        Toggle.astro
    data-visualization/
      BiasMeter.astro
      EventTimeline.astro
      CorrelationGraph.astro
      SectorPerformance.astro
      GlobalMap.astro
      ConfidenceMeter.astro
      MarketNarrative.astro
    pages/
      # Page-specific components go here, e.g.:
      dashboard/
        DashboardGrid.astro
        TopEvents.astro
        MarketDrivers.astro
      events/
        EventCard.astro
        EventDetail.astro
      sectors/
        SectorCard.astro
        SectorDetail.astro
      history/
        HistoricalBiasItem.astro
    navigation/
      NavLink.astro
      NavCTA.astro
      MobileMenu.astro
      Breadcrumb.astro
      Pagination.astro
    overlays/
      Modal.astro
      Toast.astro
      Dropdown.astro
      Drawer.astro
```

## Integration with Design System
- All components should utilize design tokens from DESIGN.md (colors, typography, spacing, rounded, shadows)
- Tailwind v4 configuration will extend these tokens
- Components should be framework-agnostic where possible (though built for Astro)