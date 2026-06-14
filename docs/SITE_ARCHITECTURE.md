# Site Architecture

## Overview
The Market Bias Predict platform consists of 11 pages organized into two main categories: Public Pages and Product Pages.

## Public Pages
These are accessible to all visitors and serve marketing, informational, and legal purposes.

1. **Landing Page** (`/`) - The entry point that communicates the value proposition and encourages users to view today's bias.
2. **About** (`/about`) - Information about the company, mission, and team.
3. **Contact** (`/contact`) - Contact form and information for inquiries.
4. **Privacy Policy** (`/privacy`) - Legal document outlining data handling practices.
5. **Terms of Service** (`/terms`) - Legal terms governing use of the platform.

## Product Pages
These pages constitute the core financial intelligence platform and require the most interaction and data visualization.

1. **Daily Market Bias Dashboard** (`/dashboard`) - The central hub showing today's market bias, confidence score, top events, and key metrics.
2. **Economic Events Page** (`/economic-events`) - Detailed list and analysis of economic events from the last 24 hours.
3. **Corporate News Page** (`/corporate-news`) - Detailed list and analysis of corporate news from the last 24 hours.
4. **Sector Impact Page** (`/sectors`) - Analysis of how events impact different market sectors.
5. **Global Heatmap Page** (`/global-map`) - Interactive world map showing regional market sentiment.
6. **Historical Bias Archive** (`/history`) - Archive of past daily biases with filtering capabilities.

## Page Relationships & Navigation

### Primary Navigation
- Logo (top left) links to Landing Page
- Primary Nav Links (desktop): Dashboard, Economic Events, Corporate News, Sectors, Global Map, History
- Secondary Nav Links (desktop): About, Contact
- Tertiary Links (footer): Privacy, Terms

### Secondary Navigation (within product pages)
- Dashboard: Links to deep-dive pages for each section (e.g., "View All Economic Events")
- Economic Events/Corporate News: Links to individual event/news items
- Sectors: Links to individual sector detail pages
- Global Map: Clickable regions lead to regional analysis
- History: Filterable archive with links to specific dates

## URL Structure
All pages use clean, hierarchical URLs:
- `/` - Landing
- `/dashboard` - Daily Market Bias Dashboard
- `/economic-events` - Economic Events
- `/corporate-news` - Corporate News
- `/sectors` - Sector Impact
- `/global-map` - Global Heatmap
- `/history` - Historical Bias Archive
- `/about` - About
- `/contact` - Contact
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## User Flow
1. Visitor arrives at Landing Page
2. Calls-to-action guide them to the Dashboard (primary) or explore sections (secondary)
3. From Dashboard, users can drill down into specific areas of interest
4. Users can navigate between product pages via primary navigation
5. Legal and informational pages accessed via footer or secondary navigation

## Technical Considerations
- All product pages should be designed for data-density and scannability
- Public pages focus on clear messaging and conversion
- Consistent header/footer across all pages
- Mobile-first responsive design
- Dark mode as default with option to toggle (if desired, though spec says dark mode first)