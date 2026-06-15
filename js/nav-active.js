/* ============================================================
   nav-active.js — Vayuron Advanced Systems
   Adds .active class (and aria-current="page") to the nav link
   matching the current page, in both the desktop nav and the
   mobile menu.

   Depends on: utils.js (getCurrentPageKey), navbar.js (calls
   highlightActiveNav after injecting the navbar markup).
   ============================================================ */

'use strict';

/**
 * Highlights the nav link(s) matching the current page.
 * @param {HTMLElement} root - the container the navbar was injected into
 */
function highlightActiveNav(root) {
  const pageKey = getCurrentPageKey(); // e.g. "about", "products", "sectors", "home"

  root.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === pageKey) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Special case: homepage has no data-nav link (logo points to more-info)
  // so nothing is highlighted on "/" — this is intentional.
}
