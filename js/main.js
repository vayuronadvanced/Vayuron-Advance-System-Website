/* ============================================================
   main.js — Vayuron Advanced Systems
   Slim orchestrator. Load this LAST, after:
     utils.js, navbar.js, footer.js, nav-active.js,
     mobile-menu.js, cursor.js, scroll-reveal.js,
     smooth-scroll.js, (contact-form.js on contact page)

   Responsibilities kept here (don't depend on injection):
     - Navbar scroll state (#navbar.scrolled)

   Everything else lives in its own module file and
   self-initializes on DOMContentLoaded.
   ============================================================ */

'use strict';

function initNavbarScroll() {
  const THRESHOLD = 48;

  function update() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  }

  window.addEventListener('scroll', update, { passive: true });

  // Run once immediately and again after navbar.js injects #navbar
  update();
  window.addEventListener('load', update);
  setTimeout(update, 0);
}

document.addEventListener('DOMContentLoaded', initNavbarScroll);
