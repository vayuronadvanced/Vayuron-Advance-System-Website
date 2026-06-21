/* ============================================================
   cursor.js — Vayuron Advanced Systems
   Custom cyan cursor dot that scales up on hover over
   interactive elements.

   rebindCursorTargets() is called again by navbar.js after the
   navbar is injected, so newly-added .nav-cta / .social-btn /
   nav links also get the hover effect.

   Position is driven via transform: translate3d(), batched on
   requestAnimationFrame, so the dot tracks the real cursor with
   zero layout-thrash lag instead of using left/top.
   ============================================================ */

'use strict';

let cursorX = -100;
let cursorY = -100;
let cursorScale = 1;
let cursorRafScheduled = false;

function renderCursorDot() {
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;
  dot.style.transform =
    `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${cursorScale})`;
  cursorRafScheduled = false;
}

function scheduleCursorRender() {
  if (cursorRafScheduled) return;
  cursorRafScheduled = true;
  requestAnimationFrame(renderCursorDot);
}

function initCursor() {
  // Custom cursor dot disabled — remove this early return to re-enable.
  return;

  const dot = document.getElementById('cursor-dot');
  if (!dot) return;

  // Hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) {
    dot.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    scheduleCursorRender();
  });

  // Mouse-wheel scrolling doesn't fire mousemove (the pointer hasn't
  // physically moved), but WheelEvent still reports clientX/clientY —
  // use it to keep the dot attached to the cursor during scroll.
  document.addEventListener('wheel', e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    scheduleCursorRender();
  }, { passive: true });

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
      cursorScale = 3;
      dot.style.opacity = '0.35';
      scheduleCursorRender();
    });
    el.addEventListener('mouseleave', () => {
      cursorScale = 1;
      dot.style.opacity = '1';
      scheduleCursorRender();
    });
  });
}

window.rebindCursorTargets = rebindCursorTargets;
window.initCursor          = initCursor;

document.addEventListener('DOMContentLoaded', initCursor);