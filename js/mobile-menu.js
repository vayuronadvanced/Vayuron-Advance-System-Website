/* ============================================================
   mobile-menu.js — Vayuron Advanced Systems
   Mobile hamburger menu open/close logic.

   Exposes window.toggleMenu / window.closeMobile / window.openMobile
   for inline onclick handlers and for navbar.js / smooth-scroll.js.
 
   initMobileMenu() is called automatically on DOMContentLoaded,
   AND again by navbar.js after the navbar is injected (since the
   #ham / #mobile-menu elements don't exist until injection runs).
   ============================================================ */

'use strict';

console.log("MOBILE MENU LOADED");

let menuOpen = false;

function initMobileMenu() {
  const ham  = document.getElementById('ham');
  const menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;

  // Avoid double-binding if called twice (DOMContentLoaded + navbar.js)
  if (ham.dataset.bound === 'true') return;
  ham.dataset.bound = 'true';

  ham.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) closeMobile();
  });
}

function toggleMenu() {
  console.log("Hamburger Clicked");
  menuOpen ? closeMobile() : openMobile();
}

function openMobile() {
  menuOpen = true;
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  menuOpen = false;
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
}

window.closeMobile     = closeMobile;
window.openMobile      = openMobile;
window.toggleMenu      = toggleMenu;
window.initMobileMenu  = initMobileMenu;

document.addEventListener('DOMContentLoaded', initMobileMenu);
