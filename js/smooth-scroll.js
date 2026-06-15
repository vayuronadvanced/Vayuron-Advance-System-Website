/* ============================================================
   smooth-scroll.js — Vayuron Advanced Systems
   Smooth-scrolls for in-page anchor links (href="#section").

   Cross-page links (e.g. "/pages/about.html") are NOT affected —
   the browser navigates normally. Only same-page "#id" anchors
   are intercepted.
   ============================================================ */

'use strict';

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.dataset.smoothBound === 'true') return;
    anchor.dataset.smoothBound = 'true';

    anchor.addEventListener('click', e => {
      const id     = anchor.getAttribute('href');
      if (id === '#' || id.length < 2) return; // ignore bare "#" links

      const target = document.querySelector(id);
      if (!target) return; // not on this page — let it no-op

      e.preventDefault();
      if (typeof closeMobile === 'function') closeMobile();

      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

window.initSmoothAnchors = initSmoothAnchors;

document.addEventListener('DOMContentLoaded', initSmoothAnchors);
