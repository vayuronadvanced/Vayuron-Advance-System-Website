/* ============================================================
   utils.js — Vayuron Advanced Systems
   Shared helper functions used by navbar.js, footer.js,
   nav-active.js, and other modules.
   ============================================================ */

'use strict';

/**
 * Returns the relative path prefix needed to reach the site root
 * from the current page's location.
 *
 * Examples:
 *   /index.html                       -> ""
 *   /pages/about.html                 -> "../"
 *   /sectors/defence-security.html    -> "../"
 *   /products/uav-systems.html        -> "../"
 *
 * All component templates (navbar/footer) use ROOT-RELATIVE
 * paths starting with "/" (e.g. "/pages/about.html"). Most
 * static file servers and GitHub Pages project sites need
 * relative paths instead, so this helper rewrites "/" -> prefix
 * when the site is NOT served from domain root.
 *
 * If your site IS served from domain root (e.g. a custom domain
 * pointed at this folder, or Netlify/Vercel root deploy), root-
 * relative "/" paths work natively and this rewrite is skipped.
 */
function getRootPrefix() {
  // Detect depth from URL path (number of folders below root)
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);

  // Remove the filename itself (last segment, e.g. "about.html")
  const depth = Math.max(segments.length - 1, 0);

  return depth === 0 ? '' : '../'.repeat(depth);
}

/**
 * Rewrites all root-relative "/" hrefs/src inside a container
 * to be relative to the current page's depth, IF the page is
 * not being served from the domain root.
 *
 * Call this AFTER injecting navbar/footer HTML.
 */
function fixRelativePaths(container) {
  const prefix = getRootPrefix();
  if (!prefix) return; // already at root, "/" paths work as-is via root-relative resolution

  container.querySelectorAll('[href^="/"]').forEach(el => {
    const href = el.getAttribute('href');
    if (href.startsWith('//')) return; // protocol-relative URL, skip
    el.setAttribute('href', prefix + href.slice(1));
  });

  container.querySelectorAll('[src^="/"]').forEach(el => {
    const src = el.getAttribute('src');
    if (src.startsWith('//')) return;
    el.setAttribute('src', prefix + src.slice(1));
  });
}

/**
 * Returns a short identifier for the current page, used as a
 * fallback page key. nav-active.js uses its own resolveActiveKey()
 * for precise path+hash matching; this is kept for other consumers.
 *
 * Examples:
 *   /index.html or /                -> "home"
 *   /sectors/defence-security.html -> "sectors"
 *   /products/uav-systems.html     -> "products"
 *   /pages/about.html              -> "about"
 *   /pages/more-info.html          -> "about"
 *   /careers/jobs.html             -> "careers"
 */
function getCurrentPageKey() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  if (path === '/' || path.endsWith('/index.html')) {
    return hash === '#sectors' ? 'sectors' : 'home';
  }
  if (path.includes('/sectors/'))  return 'sectors';
  if (path.includes('/products/')) return 'products';
  if (path.includes('/careers/'))  return 'careers';

  const filename = path.split('/').pop().replace('.html', '');
  if (filename === 'more-info') return 'about';
  return filename || 'home';
}
