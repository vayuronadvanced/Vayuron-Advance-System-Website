/* ============================================================
   scroll-reveal.js — Vayuron Advanced Systems
   IntersectionObserver-based fade-in-on-scroll for any element
   with class="reveal" (optionally .d1-.d4 for stagger delay).

   Used across Home, About, More Info, Technology, Products,
   Sectors — every new page should add .reveal to its content
   blocks to get this effect for free.
   ============================================================ */

'use strict';

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold:  0.10,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach(el => observer.observe(el));
}

window.initScrollReveal = initScrollReveal;

document.addEventListener('DOMContentLoaded', initScrollReveal);
