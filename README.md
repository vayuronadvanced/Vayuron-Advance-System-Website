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

### ✅ Phase 4 — Sectors (DONE)
- [x] `css/sectors.css` — shared layout: overview, stats row, challenges grid,
      solution block, 4-technology cards, case studies, related chips
- [x] All 8 sector pages generated from one shared template:
      `sectors/defence-security.html`, `smart-cities.html`,
      `municipal-operations.html`, `infrastructure-monitoring.html`,
      `agriculture.html`, `disaster-management.html`,
      `environmental-monitoring.html`, `industrial-inspection.html`
- Each page includes: breadcrumbs + back-link, 3 key statistics,
  sector overview, 4 challenges, Vayuron's solution block,
  4 technology cards (each linking to the product page + technology page),
  2 case-study placeholders, related product chips, and a contact CTA

### ✅ Phase 5 — Corporate Expansion (DONE)
- [x] `legal/privacy-policy.html` — data collection, storage, rights, contact
- [x] `legal/terms.html` — IP, permitted use, defence/export compliance, governing law
- [x] `legal/cookies.html` — cookie table (essential + analytics), browser controls
- [x] `legal/security.html` — security measures, responsible disclosure process,
      out-of-scope items, note on defence systems
- [x] All 4 legal pages cross-linked via a legal navigation bar at the bottom of each
- [x] `careers/jobs.html` — 6 placeholder job listings with filter bar,
      department tags, location/experience meta, Apply Now buttons,
      and a speculative-application CTA
- [x] `news/index.html`, `news/latest.html`, `news/press-release.html` — stubs
- [x] `team/leadership.html`, `advisory-board.html`, `organisation.html` — stubs
- [x] `research/publications.html`, `patents.html`, `innovation.html` — stubs
- [x] `projects/defence.html`, `agriculture.html`, `smart-city.html`,
      `industrial.html`, `infrastructure.html` — stubs
- [x] `sitemap.xml` updated with all Phase 5 URLs
- Total new in Phase 5: 18 pages + updated sitemap

### ✅ Phase 6 — Visual Polish (DONE)
- [x] `css/animations.css` — massively extended with Phase 6 additions:
      loading screen keyframes, page-transition fade, animated grid overlay,
      glitch text effect, typed cursor blink, stagger-children utility,
      magnetic button base, tilt card base, noise overlay, reveal variants
      (reveal-left, reveal-right, reveal-scale), button pulse ring,
      section scanline, hero video CSS, prefers-reduced-motion safeguards
- [x] `js/animations.js` — new Phase 6 module (12 features):
      (1) Loading screen with minimum display time and fade-out
      (2) Page-transition fade (intercepts internal links, fades body)
      (3) Animated counter (count-up for all stat numbers)
      (4) Parallax scrolling for hero background and grid
      (5) Stagger-children IntersectionObserver
      (6) Magnetic button effect on CTAs and nav
      (7) Glitch text on hero headline
      (8) Scroll progress indicator bar (auto-injected)
      (9) Reveal variants observer (left/right/scale)
      (10) Pulse ring on primary hero CTA
      (11) Tilt cards on capability and product cards
      (12) prefers-reduced-motion respected throughout
- [x] `index.html` — loading screen injected, noise overlay added,
      data-target attributes on stat numbers, stagger-children on
      capability and industries grids, animations.js added to script order
- [x] All 41 sub-pages — loading screen + animations.js added via batch update
- [x] All 8 sector pages — data-target attributes on stat numbers for counters

### ✅ Sub-Phase 6.3 — HR Requirements (DONE)

#### 6.3A — Global Fixes
- [x] Hero badge box fully removed from `index.html` (Indigenous Technology tag gone)
- [x] Real email filled in everywhere: `info@vayuronadvancedsystems.com`
- [x] Real phone filled in everywhere: `07554 582 442` (`tel:+910755458244`)
- [x] Footer social icons: Instagram (placeholder link) + LinkedIn (placeholder link)
      Twitter/Facebook/YouTube all removed
- [x] Sitemap link removed from footer legal bar (not user-facing; kept as file for SEO crawlers)
- [x] `components/footer.html` reference copy updated to match

      STILL TO PASTE:
        PASTE_INSTAGRAM_LINK_HERE → your Instagram profile URL (in js/footer.js)
        PASTE_LINKEDIN_LINK_HERE  → your LinkedIn company page URL (in js/footer.js)

#### 6.3B — About Page
- [x] 3rd leadership card (Head of Engineering) removed
- [x] CEO and CTO cards kept — each now has a 2-line quote blockquote at the bottom
- [x] "View Full Organisation" now links to real `team/organisation.html` page
- [x] `team/organisation.html` built — full org chart with CEO/CTO at top,
      4 division heads, 4 division breakdowns, 3 support function cards,
      Advisory Board link, and "Join Us" CTA

#### 6.3C — Products Page
- [x] Spec table redesigned from document-style rows into a 3-column visual card grid
      Each card: cyan diamond label (small, mono) + bold white value text
      Hover: surface lightens + cyan gradient top-bar appears
      All 4 product pages updated with new spec data

#### 6.3D — Sector Pages — Case Studies
- [x] All 16 case study pages generated under `sectors/case-studies/`
      (2 per sector × 8 sectors)
      Each page: page banner with breadcrumbs, hero image placeholder,
      "What Was Deployed" detail grid, measurable outcomes stats,
      "Technologies Used" chips, contact CTA
- [x] All 8 sector pages updated — case cards now show real titles,
      summaries, and "Read Full Case Study →" links pointing to the
      individual case study pages

#### Contact Page (6.3A continued)
- [x] Google Form iframe embed slot added with full instructions in comments
- [x] Certification/accreditation image slots added (`#certification-logos`)
- [x] Real email and phone filled in contact details section
- [ ] Per-page <title> and <meta description> audit
- [ ] JSON-LD structured data on key pages
- [ ] ARIA labels audit across all pages
- [ ] lazy loading on all images and videos
- [ ] Link validation (all internal hrefs)
- [ ] responsive + cross-browser QA checklist

### ✅ Phase 7 — SEO / Accessibility / Performance / QA (DONE)
- [x] css/accessibility.css — skip-to-content, focus-visible, reduced-motion, high-contrast, print styles
- [x] js/performance.js — lazy loading, video observer, link prefetch, resource hints
- [x] js/seo.js — JSON-LD Organization, WebSite, BreadcrumbList, ContactPage, Product schemas
- [x] og:image, twitter:card, manifest link added to all 61 pages
- [x] Unique title and meta description updated on all 12 key pages
- [x] Full link validation — 105 links audited, all placeholders documented
- [x] config/site-config.js — central configuration for all URLs, contact, social links
- [x] QA-CHECKLIST.md — comprehensive pre-launch checklist

## ✅ ALL 7 PHASES COMPLETE
See QA-CHECKLIST.md for the full pre-launch checklist.

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
