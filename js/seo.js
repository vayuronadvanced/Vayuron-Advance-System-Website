/* ============================================================
   seo.js — Vayuron Advanced Systems
   Phase 7 — SEO structured data (JSON-LD).

   Auto-detects the current page type and injects the
   appropriate schema.org JSON-LD block into <head>.

   Schemas covered:
     - Organization (all pages — sitewide)
     - WebSite + SearchAction (homepage)
     - BreadcrumbList (any page with .breadcrumbs nav)
     - ContactPage (pages/contact.html)
     - Product-style TechArticle (products/*.html)
     - FAQPage placeholder (technology.html)
   ============================================================ */

'use strict';

const SITE = {
  name:       'Vayuron Advanced Systems',
  legalName:  'Vayuron Advanced Systems Pvt. Ltd.',
  url:        'https://www.vayuron.in',
  logo:       'https://www.vayuron.in/assets/logos/logo.svg',
  email:      'info@vayuronadvancedsystems.com',
  telephone:  '+910755458244',
  address: {
    country:  'IN',
    region:   'India',
  },
  sameAs: [
    'PASTE_LINKEDIN_LINK_HERE',
    'PASTE_INSTAGRAM_LINK_HERE',
  ],
  description: 'Indigenous UAV systems, artificial intelligence, software platforms, and advanced engineering for defence, government, and industrial applications.',
};

/* ── Helper: inject a JSON-LD block ─────────────────── */
function injectSchema(data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

/* ── 1. Organization schema (sitewide) ──────────────── */
function injectOrganization() {
  injectSchema({
    '@context': 'https://schema.org',
    '@type':    'Organization',
    '@id':      SITE.url + '/#organization',
    name:       SITE.name,
    legalName:  SITE.legalName,
    url:        SITE.url,
    logo: {
      '@type':  'ImageObject',
      url:      SITE.logo,
    },
    email:      SITE.email,
    telephone:  SITE.telephone,
    address: {
      '@type':          'PostalAddress',
      addressCountry:   SITE.address.country,
      addressRegion:    SITE.address.region,
    },
    sameAs:     SITE.sameAs,
    description: SITE.description,
    foundingDate: '2018',
    knowsAbout: [
      'UAV Systems', 'Unmanned Aerial Vehicles', 'Artificial Intelligence',
      'Computer Vision', 'Defence Technology', 'Aerospace Engineering',
      'Software Development', 'Composite Manufacturing',
    ],
  });
}

/* ── 2. WebSite schema (homepage only) ──────────────── */
function injectWebSite() {
  injectSchema({
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      SITE.url + '/#website',
    url:        SITE.url,
    name:       SITE.name,
    description: SITE.description,
    publisher: {
      '@id': SITE.url + '/#organization',
    },
  });
}

/* ── 3. BreadcrumbList (any page with .breadcrumbs) ─── */
function injectBreadcrumbs() {
  const nav = document.querySelector('.breadcrumbs');
  if (!nav) return;

  const links  = nav.querySelectorAll('a');
  const current = nav.querySelector('.current');
  if (!links.length && !current) return;

  const items = [];
  let position = 1;

  links.forEach(a => {
    items.push({
      '@type':    'ListItem',
      position:   position++,
      name:       a.textContent.trim(),
      item:       SITE.url + a.getAttribute('href'),
    });
  });

  if (current) {
    items.push({
      '@type':    'ListItem',
      position:   position,
      name:       current.textContent.trim(),
      item:       SITE.url + window.location.pathname,
    });
  }

  injectSchema({
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   items,
  });
}

/* ── 4. ContactPage schema ──────────────────────────── */
function injectContactPage() {
  injectSchema({
    '@context':   'https://schema.org',
    '@type':      'ContactPage',
    name:         'Contact Vayuron Advanced Systems',
    url:          SITE.url + '/pages/contact.html',
    description:  'Get in touch with Vayuron Advanced Systems for defence, government, and industrial technology inquiries.',
    publisher: {
      '@id': SITE.url + '/#organization',
    },
    contactOption: {
      '@type':        'ContactPoint',
      telephone:      SITE.telephone,
      email:          SITE.email,
      contactType:    'customer service',
      availableLanguage: ['English', 'Hindi'],
      areaServed:     'IN',
    },
  });
}

/* ── 5. Product/TechArticle schema (product pages) ─── */
function injectProductSchema() {
  const h1   = document.querySelector('h1.page-title');
  const desc = document.querySelector('.page-subtitle');
  if (!h1) return;

  injectSchema({
    '@context':   'https://schema.org',
    '@type':      'Product',
    name:         h1.textContent.replace('\n', ' ').trim(),
    description:  desc ? desc.textContent.trim() : '',
    url:          SITE.url + window.location.pathname,
    brand: {
      '@type': 'Brand',
      name:    SITE.name,
    },
    manufacturer: {
      '@id': SITE.url + '/#organization',
    },
    category: 'Defence Technology',
  });
}

/* ── 6. AboutPage schema (about.html) ───────────────── */
function injectAboutPage() {
  injectSchema({
    '@context':   'https://schema.org',
    '@type':      'AboutPage',
    name:         'About Vayuron Advanced Systems',
    url:          SITE.url + '/pages/about.html',
    description:  'Learn about Vayuron Advanced Systems — our story, mission, vision, leadership, and journey in indigenous defence technology.',
    publisher: {
      '@id': SITE.url + '/#organization',
    },
  });
}

/* ── Routing: detect page type and inject schemas ───── */
function initSEO() {
  const path = window.location.pathname;

  // Sitewide: Organization
  injectOrganization();

  // Sitewide: Breadcrumbs
  injectBreadcrumbs();

  // Page-specific
  if (path === '/' || path.endsWith('/index.html')) {
    injectWebSite();
  } else if (path.endsWith('/pages/contact.html')) {
    injectContactPage();
  } else if (path.endsWith('/pages/about.html')) {
    injectAboutPage();
  } else if (path.includes('/products/')) {
    injectProductSchema();
  }
}

document.addEventListener('DOMContentLoaded', initSEO);
