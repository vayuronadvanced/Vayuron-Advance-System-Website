# Vayuron Advanced Systems — Website (v2 Multi-Page Architecture)

> Defence-tech / aerospace company website. Dark theme, aerospace cyan accent.
> Migrated from single-page scrolling site → modular multi-page corporate platform.

---

## 🚧 Upgrade Progress

This is being built in phases per the upgrade roadmap. Current status:

### ✅ Phase 1 — Foundation (DONE)
- [x] New folder structure (pages/, sectors/, products/, components/, etc.)
- [x] Shared navbar (`js/navbar.js`) — injected via `<div id="navbar-root">`
  - "Solutions" → **"Products"** (renamed)
  - "Technology" → links to `/pages/technology.html` (own page)
  - "About" → links to `/pages/about.html` (own page, decoupled from Technology)
  - Logo → links to `/pages/more-info.html`
  - Active-page highlighting via `js/nav-active.js`
  - Products & Sectors mega-menu dropdowns
- [x] Shared footer (`js/footer.js`) — injected via `<div id="footer-root">`
  - Clickable phone (`tel:`) and email (`mailto:`) — **placeholders, see below**
  - Facebook icon (replaces Twitter) — **placeholder link**
  - LinkedIn icon (replaces YouTube) — **placeholder link**
  - Newsletter signup form
  - Privacy / Terms / Security / Sitemap links
- [x] JS modularized: `utils.js`, `navbar.js`, `footer.js`, `nav-active.js`,
      `mobile-menu.js`, `cursor.js`, `scroll-reveal.js`, `smooth-scroll.js`,
      `contact-form.js`, `main.js` (slim orchestrator)
- [x] New homepage (`index.html`) — slimmed to Hero, Mission, Capability
      preview, Sector preview, CTA. Tagline updated to **"Engineering
      Indigenous Innovation"**. Full content moved to dedicated pages.
- [x] `css/page-header.css` — shared styles for breadcrumbs, page banners,
      back-links, CTA sections (used by all new sub-pages)
- [x] `404.html`, `robots.txt`, `sitemap.xml`, `manifest.json`, `.gitignore`

### ✅ Phase 2 — Core Pages (DONE)
- [x] `pages/contact.html` — extracted from old homepage contact section,
      now includes phone (`tel:`), email (`mailto:`), map embed placeholder,
      and partnership-inquiry note
- [x] `pages/about.html` — company-only info: story, vision/mission/values,
      journey timeline, leadership grid, "More Information" CTA button
      (req. 7). No technology content (req. 5).
- [x] `pages/more-info.html` — company profile table, certifications,
      infrastructure, partners, future roadmap. Linked from About's
      "More Information" button AND the logo (req. 7).
- [x] `pages/technology.html` — all 4 capability domains (UAV, AI, Software,
      Advanced Engineering) with **one-line description for every bullet
      point** (req. 9), plus cross-links to related sectors/products.

### ✅ Phase 3 — Products (DONE)
- [x] `css/products.css` — new stylesheet for product cards, specs tables,
      feature grids, video galleries, download chips, related-tech chips
- [x] `pages/products.html` — overview gallery with 4 product cards
      (image/video placeholders, tags, descriptions) + Sectors quick-grid
      (anchor target for navbar "Sectors" mega-menu, req. 8 prep)
- [x] `products/uav-systems.html` — hero, specs table, 6 features,
      video gallery, related tech/sector chips, brochure downloads
- [x] `products/artificial-intelligence.html` — same structure, AI-specific content
- [x] `products/software-systems.html` — same structure, software-specific content
- [x] `products/advanced-engineering.html` — same structure, engineering-specific content
- Each product page has breadcrumbs, a "← All Products" back-link, and
  a "Next: [Product] →" CTA chaining to the next product page

### ⏳ Phase 4 — Sectors (NEXT)
- [ ] 8 pages under `sectors/` — each with overview, challenges, solution,
      related technologies (4 per sector), related products, case studies, CTA
- [ ] `css/sectors.css` — shared layout for sector pages
- [ ] Reusable sector-page template (per upgrade doc: "should reuse the same template")

### Phase 4 — Sectors
- [ ] 8 pages under `sectors/` — each with overview, challenges, solution,
      related technologies (4 per sector), related products, CTA

### Phase 5 — Corporate Expansion
- [ ] Careers, Downloads, Gallery, Research, News, Team, Legal pages

### Phase 6 — Visual Polish (motion, video, animations)
### Phase 7 — SEO / Accessibility / Performance / Final QA

---

## ⚠️ PLACEHOLDERS TO FILL IN

Search the codebase for these markers and replace with real values:

| Marker | Location | Replace with |
|---|---|---|
| `PASTE_FACEBOOK_LINK_HERE` | `js/footer.js`, `components/footer.html` | Your Facebook page URL |
| `PASTE_LINKEDIN_LINK_HERE` | `js/footer.js`, `components/footer.html` | Your LinkedIn company page URL |
| `PASTE_PHONE_NUMBER_HERE` | `js/footer.js`, `components/footer.html` | Phone number (digits only for `tel:`, e.g. `+911234567890`) |
| `PASTE_EMAIL_HERE` | `js/footer.js`, `components/footer.html` | Company email address |

**Note**: `js/footer.js` is the file actually used (injected at runtime).
`components/footer.html` is a reference copy for documentation — update both
to keep them in sync.

---

## Project Structure

```
vayuron-v2/
├── index.html              ← Home / Landing page
├── 404.html                 ← Custom error page
├── robots.txt / sitemap.xml / manifest.json
│
├── pages/                    ← Core site pages (about, contact, technology, etc.)
├── sectors/                  ← 8 sector-specific pages
├── products/                 ← 4 individual product pages
├── careers/ projects/ research/ news/ team/ gallery/ downloads/ legal/
│
├── components/               ← Reference copies of navbar/footer markup
├── css/                       ← All stylesheets (theme preserved from v1)
├── js/                        ← Modular JS (see below)
├── assets/                    ← images/ videos/ icons/ logos/ documents/
├── fonts/                     ← (optional local font hosting)
├── config/                    ← site-config.js, constants.js, routes.js
├── api/                       ← backend stubs (contact.php, server.js, etc.)
└── seo/                       ← humans.txt, security.txt
```

---

## JS Module Reference

| File | Responsibility |
|---|---|
| `utils.js` | Path resolution helpers, current-page detection |
| `navbar.js` | Injects shared navbar into `#navbar-root` |
| `footer.js` | Injects shared footer into `#footer-root` |
| `nav-active.js` | Highlights the current page's nav link |
| `mobile-menu.js` | Hamburger menu open/close |
| `cursor.js` | Custom cyan cursor dot + hover scaling |
| `scroll-reveal.js` | Fade-in-on-scroll for `.reveal` elements |
| `smooth-scroll.js` | Smooth scroll for same-page `#anchor` links |
| `contact-form.js` | Contact form validation + submission (contact page only) |
| `main.js` | Slim orchestrator — navbar scroll state, loads last |

**Every page must include**, in this order, before `</body>`:
```html
<div id="navbar-root"></div>
... page content ...
<div id="footer-root"></div>

<script src="/js/utils.js"></script>
<script src="/js/navbar.js"></script>
<script src="/js/footer.js"></script>
<script src="/js/nav-active.js"></script>
<script src="/js/mobile-menu.js"></script>
<script src="/js/cursor.js"></script>
<script src="/js/scroll-reveal.js"></script>
<script src="/js/smooth-scroll.js"></script>
<!-- contact-form.js only on pages/contact.html -->
<script src="/js/main.js"></script>
```

---

## Design Tokens (css/variables.css)

| Token | Value | Usage |
|---|---|---|
| `--black` | `#050607` | Page background |
| `--surface` | `#0a0c0f` | Section backgrounds |
| `--cyan` | `#00d4ff` | Primary accent |
| `--text` | `#d8dce4` | Body copy |
| `--muted` | `#68788a` | Secondary text |
| `--dim` | `#35455a` | Decorative / inactive text |

Theme is **unchanged from v1** — only the architecture changed.

---

## Quick Start

Open `index.html` directly in Chrome, or serve locally:

```bash
python -m http.server 3000
# or
npx serve .
```

**Important**: This site uses root-relative paths (`/css/...`, `/js/...`,
`/pages/...`). If opened via `file://` directly, some browsers block these.
Use a local server (above) for full functionality, especially for testing
navbar/footer injection across `/pages/`, `/sectors/`, `/products/`.

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.
Requires: CSS Custom Properties, IntersectionObserver, CSS Grid, Fetch-free
DOM injection (vanilla JS template strings).
