/* ============================================================
   nav-active.js — Vayuron Advanced Systems
   Adds .active class (and aria-current="page") to the nav link
   matching the current page, in both the desktop nav and the
   mobile menu.

   Active-state rules:
   ┌─────────────────────────────────┬──────────────────┐
   │ Current URL                     │ Active nav item  │
   ├─────────────────────────────────┼──────────────────┤
   │ /index.html or /                │ nothing          │
   │ /index.html#sectors             │ Sectors          │
   │ /sectors/*.html                 │ Sectors          │
   │ /pages/products.html            │ Products         │
   │ /products/*.html                │ Products         │
   │ /pages/technology.html          │ Technology       │
   │ /pages/about.html               │ About            │
   │ /pages/more-info.html           │ About            │
   │ /pages/careers.html             │ Careers          │
   │ /careers/*.html                 │ Careers          │
   │ /pages/contact.html             │ Contact          │
   └─────────────────────────────────┴──────────────────┘

   Depends on: utils.js (getCurrentPageKey is NOT used here —
   we do our own path + hash logic for precision).
   Called by: navbar.js after injecting the navbar markup.
   ============================================================ */

'use strict';

/**
 * Returns the data-nav key that should be active for the
 * current page, based on pathname AND hash.
 */
function resolveActiveKey() {
  const path = window.location.pathname;  // e.g. "/sectors/agriculture.html"
  const hash = window.location.hash;      // e.g. "#sectors" or ""

  // Homepage with #sectors hash → Sectors
  if ((path === '/' || path.endsWith('/index.html')) && hash === '#sectors') {
    return 'sectors';
  }

  // Homepage with no hash → nothing active
  if (path === '/' || path.endsWith('/index.html')) {
    return null;
  }

  // /sectors/* → Sectors
  if (path.includes('/sectors/')) return 'sectors';

  // /products/* → Products
  if (path.includes('/products/')) return 'products';

  // /pages/products.html → Products
  if (path.endsWith('/pages/products.html')) return 'products';

  // /careers/* → Careers
  if (path.includes('/careers/')) return 'careers';

  // /pages/more-info.html → About (it's an extension of About)
  if (path.endsWith('/pages/more-info.html')) return 'about';

  // /pages/<name>.html → match by filename
  const filename = path.split('/').pop().replace('.html', '');
  // Map filename → data-nav key
  const FILE_MAP = {
    'technology': 'technology',
    'about':      'about',
    'contact':    'contact',
    'careers':    'careers',
    'products':   'products',
    'gallery':    'about',     // gallery is under company umbrella
    'downloads':  'about',
  };

  return FILE_MAP[filename] || null;
}

/**
 * Highlights the nav link(s) matching the current page.
 * @param {HTMLElement} root - the container the navbar was injected into
 */
function highlightActiveNav(root) {
  const activeKey = resolveActiveKey();
  if (!activeKey) return; // nothing to highlight (e.g. homepage)

  root.querySelectorAll('[data-nav]').forEach(link => {
    // Clear any stale active states first (safe to call multiple times)
    link.classList.remove('active');
    link.removeAttribute('aria-current');

    if (link.dataset.nav === activeKey) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Also handle the edge case where the user lands on the homepage
// and then clicks a same-page #sectors anchor — update the active state
// without a full page reload
window.addEventListener('hashchange', () => {
  const navRoot = document.getElementById('navbar-root');
  if (navRoot) highlightActiveNav(navRoot);
});

window.highlightActiveNav = highlightActiveNav;
