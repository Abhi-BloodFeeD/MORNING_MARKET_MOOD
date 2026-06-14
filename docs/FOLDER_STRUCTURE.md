# Folder Structure

## Overview
This document outlines the recommended file and directory organization for the Market Bias Predict Astro project. The structure follows Astro conventions while grouping related files for scalability and maintainability.

## Root Directory
```
/
├── public/                 # Static assets (favicon, images, robots.txt)
├── src/                    # Source code
│   ├── assets/             # Local images, icons, SVGs (processed by Vite)
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Layout components (wrapper shells)
│   ├── pages/              # Page components (route-based)
│   ├── content/            # Markdown or MDX content (if using content collections)
│   ├── data/               # Static JSON data, constants, mock data
│   ├── styles/             # Global CSS, CSS variables, Tailwind base
│   ├── utils/              # Utility functions, helpers, formatters
│   ├── lib/                # External library wrappers, API clients
│   ├── hooks/              # Custom React-like hooks (if using frameworks)
│   ├── tests/              # Unit and integration tests
│   └── config/             # Configuration files (site config, feature flags)
├── docs/                   # Documentation (this folder)
├── .astro/                 # Astro internal cache (ignore in git)
├── .vscode/                # VS Code settings
├── .gitignore              # Git ignore file
├── astro.config.mjs        # Astro configuration
├── package.json            # NPM dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project overview
```

## Detailed Breakdown

### public/
Static assets served at root URL.
- `favicon.ico`, `favicon.svg` - Favicon
- `robots.txt` - Search engine crawler instructions
- `sitemap.xml` - Generated but can be seeded
- `og/` - Open Graph images (optional)
- `images/` - General static images (logos, illustrations)
- `icons/` - Icon sets (if not using font icons)

### src/assets/
Assets imported and processed by Vite (will be hashed and optimized).
- `images/` - Content-specific images (photos, illustrations)
- `illustrations/` - Custom vector illustrations (SVG)
- `charts/` - Static chart images (if any)
- `lottie/` - Lottie JSON animations
- `logos/` - Company/logos for news/events
- `flags/` - Country flags for global map

### src/components/
Reusable UI components organized by category (as per COMPONENT_ARCHITECTURE.md).
```
components/
├── layout/                 # Wrapper components
│   ├── Layout.astro
│   ├── Header.astro
│   ├── Footer.astro
├── ui/                     # Atomic UI elements
│   ├── button/
│   ├── badge/
│   ├── card/
│   ├── form/
│   ├── typography/
│   ├── avatar/
│   ├── loader/
│   ├── tooltip/
│   └── toggle/
├── data-visualization/     # Chart and graph components
│   ├── BiasMeter.astro
│   ├── EventTimeline.astro
│   ├── CorrelationGraph.astro
│   ├── SectorPerformance.astro
│   ├── GlobalMap.astro
│   ├── ConfidenceMeter.astro
│   └── MarketNarrative.astro
├── pages/                  # Page-specific components
│   ├── dashboard/
│   ├── events/
│   ├── sectors/
│   ├── global-map/
│   └── history/
├── navigation/
│   ├── NavLink.astro
│   ├── NavCTA.astro
│   ├── MobileMenu.astro
│   ├── Breadcrumb.astro
│   └── Pagination.astro
└── overlays/
    ├── Modal.astro
    ├── Toast.astro
    ├── Dropdown.astro
    └── Drawer.astro
```

### src/layouts/
Layout components that wrap pages (less specific than components/layout).
- `Layout.astro` - Main layout with slots for header/footer
- `BlankLayout.astro` - For landing/pages without header/footer
- `DocsLayout.astro` - For documentation pages
- `AuthLayout.astro` - If authentication is added later

### src/pages/
Route-based components. Each file corresponds to a URL route.
```
pages/
├── index.astro             # Landing page (/) 
├── dashboard.astro         # /dashboard
├── economic-events.astro   # /economic-events
├── corporate-news.astro    # /corporate-news
├── sectors.astro           # /sectors
├── global-map.astro        # /global-map
├── history.astro           # /history
├── about.astro             # /about
├── contact.astro           # /contact
├── privatenotice.astro     # /privacy (or privacy-policy)
├── terms.astro             # /terms
├── ...                     # Dynamic routes (if any)
└── ...                     # API endpoints (if using Astro endpoints)
```
Dynamic routes example:
- `pages/event/[id].astro` - Individual economic event
- `pages/news/[id].astro` - Individual corporate news
- `pages/sectors/[slug].astro` - Individual sector detail
- `pages/history/[date].astro` - Specific historical day

### src/content/
If using Astro Content Collections (for markdown blog-like content).
- `events/` - Economic events.md files
- `news/` - Corporate news.md files
- `history/` - Historical bias.md files
- `blog/` - Blog posts.md files
- `authors/` - Author data.json files

### src/data/
Static data that doesn't change at build time (or changes infrequently).
- `constants.ts` - Application constants (timeouts, API endpoints)
- `sectorData.json` - Sector definitions, mappings
- `regionData.json` - Country/region mappings for global map
- `eventTypes.json` - Classification of event types
- `mock/` - Mock data for development

### src/styles/
Global styles and CSS foundation.
- `globals.css` - Tailwind base, components, utilities (or CSS reset)
- `variables.css` - CSS custom properties for design tokens
- `animations.css` - Keyframes and animation utilities
- `resp.css` - Responsive utility overrides
- `dark.css` - Dark mode specific overrides (if needed)
- `print.css` - Print stylesheet

### src/utils/
Pure utility functions (framework-agnostic).
- `formatters.ts` - Number, date, currency formatting
- `calculators.ts` - Math helpers (percentages, changes)
- `validators.ts` - Form validation functions
- `helpers.ts` - Miscellaneous helpers (debounce, throttle)
- `types.ts` - Shared TypeScript interfaces and types
- `constants.ts` - If not in src/data/

### src/lib/
Wrappers for external services and API clients.
- `api/` - HTTP clients for internal/external APIs
  - `client.ts` - Base API client with interceptors
  - `endpoints.ts` - API endpoint definitions
- `charts/` - Wrapper for charting libraries (if using Recharts, D3, etc.)
- `maps/` - Wrapper for mapping libraries (Leaflet, Mapbox)
- `notifications/` - Toast/system notification wrapper
- `storage/` - LocalStorage/sessionStorage helpers

### src/hooks/
Custom reactive hooks (if using Preact/Solid/reactive utilities with Astro).
- `useDataFetching.ts` - SWR-like data fetching
- `useForm.ts` - Form state management
- `useViewport.ts` - Responsive breakpoint hooks
- `useTheme.ts` - Dark mode toggle (if implemented)
- `useEventListener.ts` - Event listener cleanup

### src/tests/
Testing files.
- `unit/` - Unit tests for utils, hooks, components
- `integration/` - Integration tests for page flows
- `e2e/` - End-to-end tests (if using Playwright)
- `mocks/` - Test mocks and fixtures
- `setup/` - Test configuration (vitest, etc.)

### src/config/
Runtime configuration.
- `site.ts` - Site metadata (title, description, URL)
- `features.ts` - Feature flags (enable/disable sections)
- `environment.ts` - Environment-specific variables
- `menu.ts` - Navigation structure definition

## Naming Conventions
- **Files**: kebab-case (e.g., `event-card.astro`)
- **Components**: PascalCase for component names (e.g., `EventCard.astro`)
- **Utilities**: camelCase for functions and variables (e.g., `formatCurrency`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types**: PascalCase for TypeScript interfaces and types (e.g., `EventData`)
- **CSS classes**: kebab-case (Tailwind utilities)

## Import Guidelines
- Use `@/` alias for `src/` (configured in tsconfig.json)
- Relative imports for same-directory files
- Absolute imports for cross-directory clarity
- Avoid deep relative paths (e.g., `../../../utils/helpers`)

## Example: Adding a New Page
1. Create `src/pages/new-page.astro`
2. Add component to `src/components/pages/new-page/` if needed
3. Update navigation in `src/components/layout/Header.astro` (if main nav)
4. Add content strategy documentation
5. Implement SEO meta tags
6. Add tests in `src/tests/`

## Migration Notes
If restructuring an existing project:
1. Start with pages and components
2. Move styles to src/styles/
3. Extract utilities to src/utils/
4. Add data layer for static data
5. Implement content collections for markdown content
6. Update imports and fix paths
7. Run tests to ensure nothing broken

## Tools & Conventions
- **Linting**: ESLint with Astro plugin
- **Formatting**: Prettier with Astro support
- **Type Checking**: TypeScript (strict mode)
- **Testing**: Vitest + Testing Library
- **Build**: Astro build (SSR or SSG)
- **Deployment**: Adapter-specific output

## Scalability Considerations
- Code splitting: Astro automatic via dynamic imports
- Lazy loading: Use `loading="lazy"` on images, dynamic import() for components below fold
- Asset optimization: Use `<Image />` component from Astro or `picture` element
- Caching: Set appropriate Cache-Control headers via middleware
- Internationalization: Structure to support i18n routing (e.g., `/en/dashboard`)

## Files to Ignore in Git
- `node_modules/`
- `.astro/`
- `dist/`
- `.env` and `.env.*` (use .env.example)
- `coverage/`
- `*.log`

This structure provides a clean separation of concerns, making it easy to locate files and scale the project as features are added.