# Specification

## Summary
**Goal:** Build UNAI — a luxury minimal corporate multi-page website with 8 client-side routed pages, a premium design system, global UI features, and a Motoko backend for contact form storage.

**Planned changes:**

### Design System & Global Theme
- Primary background `#BDD8E9`, accent palette with 6 navy/blue CSS variables
- Google Fonts: Playfair Display (headings, large letter-spacing) + Inter (body)
- 8pt grid spacing, 16–28px corner radii, 120px+ section padding, 1200px max-width container

### Global UI Features
- Custom soft-circle cursor that scales on hover over interactive elements
- Page load animation: full-screen fade/slide reveal with UNAI logotype
- Smooth fade/slide route transitions (300ms ease-in-out)
- Dark/light theme toggle (dark = `#001D39` bg, persists to localStorage)
- Scroll-reveal fade-up animations via IntersectionObserver
- Reusable GlassCard component: `backdrop-filter blur(12px)`, translucent bg, soft shadow, 20px radius

### Navbar & Footer
- Sticky Navbar: UNAI serif logotype, nav links (8 pages), dark/light toggle, "Talk to Us" CTA; glass morphism background activates after 50px scroll
- Footer: dark navy bg, UNAI logo, nav links, tagline "Technology with Purpose", social icon placeholders
- Unique SVG/geometric section dividers (no plain `<hr>`)

### Pages (React Router, client-side)
- **Home (`/`):** Full-screen parallax hero (split layout, serif headline, two CTAs, animated SVG/geometric right panel, floating glass micro-stat cards, particle layer); About Preview (Z-pattern, glass metrics card); Services (4 glass cards with hover elevation + border animation); Products Highlight (horizontal scroll parallax strip); Events & Innovation (dark navy section, event preview cards); CTA Footer section
- **About (`/about`):** Typographic hero "Technology with Purpose"; asymmetric Vision & Mission; Leadership Philosophy ("Innovation with Integrity") + 3 pillars; Why UNAI 3-column icon grid; horizontal scrolling company timeline; team culture grid with zoom + overlay hover reveal
- **Services (`/services`):** 5 alternating split-screen service sections (AI Development, Enterprise Software, Cloud & Infrastructure, Data & Analytics, Consulting); large faded vertical background text per section; animated vertical process timeline at bottom
- **Products (`/products`):** 3 premium product showcase blocks (mockup image, serif name, specs, feature bullets, "Request Demo" CTA); minimal comparison grid table below
- **Events (`/events`):** Parallax banner "Where Innovation Meets Industry"; category filter row (All / Conferences / Product Launches / Tech Summits / Webinars) with fade transition; masonry card grid with 6+ sample event cards (category tag, date, title, description, glass style)
- **Careers (`/careers`):** Typographic culture statement with slow animated gradient background; 3–4 benefit cards with hover lift; accordion open positions (4+ roles, "Apply Now" link); "Shape the Future with Us" CTA section
- **Gallery (`/gallery`):** CSS masonry grid, 12 items across 4 categories; hover: zoom + dark overlay + title; category filter (All / Events / Products / Office / Webinar), client-side
- **Contact (`/contact`):** Large serif headline "Start the Conversation."; split layout — left: glass-style form (Full Name, Company, Email, Phone, Message, Submit); right: styled placeholder map (no external API) + company contact details; form submits to Motoko backend, inline success confirmation

### Backend (Motoko)
- Single actor with `ContactMessage` record (id, name, company, email, phone, message, timestamp)
- `submitContact()` → stores message, returns generated ID
- `getContacts()` → returns all stored messages
- Stable storage for persistence across upgrades

### Routing
- React Router for all 8 routes: `/`, `/about`, `/services`, `/products`, `/events`, `/careers`, `/gallery`, `/contact`
- Unknown routes redirect to Home

**User-visible outcome:** Visitors can browse a fully themed, animated 8-page corporate website for UNAI, explore services, products, events, careers, and gallery content, toggle dark/light mode, and submit a contact form that is stored on-chain.
