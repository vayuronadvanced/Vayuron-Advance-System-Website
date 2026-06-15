/* ============================================================
   cursor.js — Vayuron Advanced Systems
   Custom cyan cursor dot that scales up on hover over
   interactive elements.

   rebindCursorTargets() is called again by navbar.js after the
   navbar is injected, so newly-added .nav-cta / .social-btn /
   nav links also get the hover effect.
   ============================================================ */

'use strict';

function initCursor() {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;

  // Hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
  });

  rebindCursorTargets();
}

/**
 * (Re)binds hover listeners to all current interactive elements.
 * Safe to call multiple times — uses a data attribute guard.
 */
function rebindCursorTargets() {
  const dot = document.getElementById('cursor-dot');
  if (!dot || window.matchMedia('(pointer: coarse)').matches) return;

  const hoverTargets = document.querySelectorAll(
    'button, a, .cap-card, .ind-card, .social-btn, .nav-cta, .product-card, .sector-card'
  );

  hoverTargets.forEach(el => {
    if (el.dataset.cursorBound === 'true') return;
    el.dataset.cursorBound = 'true';

    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(3)';
      dot.style.opacity   = '0.35';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.style.opacity   = '1';
    });
  });
}

window.rebindCursorTargets = rebindCursorTargets;
window.initCursor          = initCursor;

document.addEventListener('DOMContentLoaded', initCursor);
