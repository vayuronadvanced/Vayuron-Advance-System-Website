# Vayuron Advanced Systems — Pre-Launch QA Checklist

Run through every item below before going live.
Tick each item as it is verified.

---

## 1. Content & Placeholder Replacement

Before launch, search the codebase for these strings and replace with real values:

| Search For | Replace With | File(s) |
|---|---|---|
| `PASTE_INSTAGRAM_LINK_HERE` | Real Instagram URL | `js/footer.js`, `js/seo.js`, `config/site-config.js` |
| `PASTE_LINKEDIN_LINK_HERE` | Real LinkedIn URL | `js/footer.js`, `js/seo.js`, `config/site-config.js` |
| `PASTE_GOOGLE_FORM_EMBED_URL_HERE` | Google Form iframe src URL | `pages/contact.html`, `config/site-config.js` |
| `PASTE_GOOGLE_MAPS_EMBED_URL_HERE` | Google Maps iframe src URL | `pages/contact.html`, `config/site-config.js` |
| `PASTE_GA4_MEASUREMENT_ID_HERE` | GA4 ID (e.g. G-XXXXXXX) | `config/site-config.js` |
| `CEO` / `CTO` in leadership | Real names | `pages/about.html`, `team/organisation.html` |
| Placeholder bios and quotes | Real leadership content | `pages/about.html` |
| `2018` founding year | Real year if different | `pages/about.html`, `pages/more-info.html` |
| Case study placeholder text | Real project details | `sectors/case-studies/*.html` |
| Spec values marked `(placeholder)` | Real specifications | `products/*.html` |

---

## 2. Assets to Upload

Upload these files to the correct directories:

```
assets/logos/
  favicon.ico          (replace minimal placeholder — 32x32 recommended)
  favicon-16.png
  favicon-32.png
  apple-touch-icon.png (180x180)
  android-chrome-512.png
  logo.svg
  logo-white.svg

assets/images/company/
  og-cover.jpg         (1200x630px — used for social media sharing)

assets/images/team/
  ceo.jpg              (88x88px minimum, will be shown circular)
  cto.jpg

assets/images/products/
  uav-hero.jpg         (16:9 aspect ratio, hero image)
  ai-hero.jpg
  software-hero.jpg
  engineering-hero.jpg

assets/documents/
  brochure.pdf
  company-profile.pdf
  capability-statement.pdf
  product-catalog.pdf
  uav-systems-brochure.pdf
  ai-solutions-brochure.pdf
  software-systems-brochure.pdf
  advanced-engineering-brochure.pdf
```

---

## 3. Page-by-Page Checks

### Homepage (index.html)
- [ ] Hero heading renders correctly at all breakpoints
- [ ] Ticker strip scrolls smoothly
- [ ] All 4 capability cards link to correct product pages
- [ ] All 8 sector cards link to correct sector pages
- [ ] CTA buttons scroll to correct sections

### Navigation
- [ ] Logo → `/pages/more-info.html`
- [ ] Products → `/pages/products.html` (with dropdown)
- [ ] Sectors → `/index.html#sectors` (with dropdown to each sector page)
- [ ] Technology → `/pages/technology.html`
- [ ] About → `/pages/about.html`
- [ ] Careers → `/pages/careers.html`
- [ ] Contact → `/pages/contact.html`
- [ ] Request Demo → `/pages/contact.html`
- [ ] Mobile hamburger opens/closes correctly
- [ ] Active state highlights the correct button on every page

### Contact Page
- [ ] Phone number opens device dialer on mobile
- [ ] Email opens mail client
- [ ] Google Form loads (after real URL is pasted)
- [ ] Inquiry form validates Name and Email before submitting
- [ ] Map embed shows correct location (after URL pasted)
- [ ] Certification logo slots ready for images

### Footer (all pages)
- [ ] Instagram icon links to real page
- [ ] LinkedIn icon links to real page
- [ ] Newsletter form shows confirmation on submit
- [ ] Privacy Policy / Terms / Security links work
- [ ] Phone and email in footer are clickable

### Products
- [ ] All 4 product pages load with correct specs
- [ ] Hero image placeholder visible (or real image if uploaded)
- [ ] Video gallery placeholders visible
- [ ] Download chips show correct PDF names
- [ ] Related chips link to correct sector and technology pages
- [ ] "Next: →" CTAs chain correctly: UAV → AI → Software → Engineering → UAV

### Sectors
- [ ] All 8 sector pages load correctly
- [ ] All case study cards show real titles and descriptions
- [ ] "Read Full Case Study →" links work for all 16 case study pages
- [ ] 4 technology cards link to correct product pages
- [ ] "Contact Us" CTA works

### About Page
- [ ] CEO and CTO cards show correctly (2 cards, not 3)
- [ ] CEO and CTO quote blockquotes display correctly
- [ ] "More Information" CTA links to `/pages/more-info.html`
- [ ] "View Full Organisation →" links to `/team/organisation.html`

### Legal Pages
- [ ] Privacy Policy loads and renders correctly
- [ ] Terms of Use loads correctly
- [ ] Cookie Policy loads with table
- [ ] Security page loads with responsible disclosure contact
- [ ] Cross-navigation links between legal pages work

---

## 4. Cross-Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest — macOS + iOS)
- [ ] Edge (latest)
- [ ] Chrome on Android

---

## 5. Responsive Testing

Test at these breakpoints:
- [ ] 375px — iPhone SE
- [ ] 390px — iPhone 14
- [ ] 768px — iPad portrait
- [ ] 1024px — iPad landscape / small laptop
- [ ] 1280px — standard laptop
- [ ] 1440px — large desktop
- [ ] 1920px — full HD

---

## 6. Accessibility Checks

- [ ] Tab through every page — all interactive elements reachable
- [ ] Skip-to-content link appears on first Tab press
- [ ] Focus ring (cyan outline) visible on all focused elements
- [ ] Screen reader test on homepage (VoiceOver / NVDA)
- [ ] All images have `alt` attributes
- [ ] Colour contrast meets WCAG AA (cyan on black = 5.3:1 ✅)
- [ ] `lang="en"` on every `<html>` tag
- [ ] ARIA labels on all icon-only buttons (social icons, hamburger)

---

## 7. Performance Checks

- [ ] Run Lighthouse audit — target: Performance 85+, Accessibility 95+, SEO 95+
- [ ] All images under 200kb (compress before uploading)
- [ ] PDFs linked correctly and open in browser/new tab
- [ ] No console errors on any page
- [ ] Loading screen appears and fades on all pages
- [ ] Scroll progress bar works on long pages

---

## 8. SEO Checks

- [ ] Each page has a unique `<title>` (max 60 chars)
- [ ] Each page has a unique `<meta name="description">` (max 155 chars)
- [ ] `og:image` points to a real 1200×630 image
- [ ] `sitemap.xml` is accessible at `/sitemap.xml`
- [ ] `robots.txt` is accessible at `/robots.txt`
- [ ] JSON-LD structured data validates at: https://validator.schema.org/
- [ ] Submit sitemap to Google Search Console after launch

---

## 9. Hosting Setup

When hosting (Netlify, Vercel, GitHub Pages, or custom server):

- [ ] Site served from domain root (for root-relative `/` paths to work)
- [ ] HTTPS enabled
- [ ] Custom domain configured: `www.vayuron.in`
- [ ] 404.html configured as error page
- [ ] robots.txt `Sitemap:` URL updated to real domain
- [ ] sitemap.xml URLs updated to real domain

---

*Last updated: Phase 7 — QA & Launch Preparation*
*Vayuron Advanced Systems Website v2*
