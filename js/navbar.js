/* ============================================================
   navbar.js — Vayuron Advanced Systems
   Injects the shared navbar (kept in sync with
   components/navbar.html) into every page at <div id="navbar-root">.

   USAGE in every page's <body>, right after <body>:
     <div id="navbar-root"></div>
     ... page content ...
     <script src="/js/utils.js"></script>
     <script src="/js/navbar.js"></script>

   To edit the navbar (links, logo, dropdowns):
     1. Edit NAVBAR_HTML below
     2. Mirror the same change in components/navbar.html for docs
   ============================================================ */

'use strict';

const NAVBAR_HTML = `
<nav id="navbar" role="banner">
  <a class="logo" href="/pages/more-info.html" aria-label="Vayuron Advanced Systems — More Information">
    <div class="logo-mark" aria-hidden="true"></div>
    <span class="logo-text">VAYU<em>RON</em></span>
  </a>

  <div class="nav-links" role="navigation" aria-label="Primary Navigation">

    <div class="nav-item-dropdown">
      <a href="/pages/products.html" data-nav="products">
        Products <span class="chev">▾</span>
      </a>
      <div class="nav-dropdown">
        <a href="/products/uav-systems.html">UAV Systems</a>
        <a href="/products/artificial-intelligence.html">Artificial Intelligence</a>
        <a href="/products/software-systems.html">Software Systems</a>
        <a href="/products/advanced-engineering.html">Advanced Engineering</a>
      </div>
    </div>

    <div class="nav-item-dropdown">
      <a href="/index.html#sectors" data-nav="sectors">
        Sectors <span class="chev">▾</span>
      </a>
      <div class="nav-dropdown">
        <a href="/sectors/defence-security.html">Defence &amp; Security</a>
        <a href="/sectors/smart-cities.html">Smart Cities</a>
        <a href="/sectors/municipal-operations.html">Municipal Operations</a>
        <a href="/sectors/infrastructure-monitoring.html">Infrastructure Monitoring</a>
        <a href="/sectors/agriculture.html">Agriculture</a>
        <a href="/sectors/disaster-management.html">Disaster Management</a>
        <a href="/sectors/environmental-monitoring.html">Environmental Monitoring</a>
        <a href="/sectors/industrial-inspection.html">Industrial Inspection</a>
      </div>
    </div>

    <a href="/pages/technology.html" data-nav="technology">Technology</a>
    <a href="/pages/about.html" data-nav="about">About</a>
    <a href="/pages/careers.html" data-nav="careers">Careers</a>
    <a href="/pages/contact.html" data-nav="contact">Contact</a>
  </div>

  <button class="nav-cta" onclick="window.location.href='/pages/contact.html'" aria-label="Request a Demo">
    Request Demo
  </button>

  <div class="nav-hamburger" id="ham" aria-label="Toggle mobile menu" role="button" tabindex="0">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

<div id="mobile-menu" role="navigation" aria-label="Mobile Navigation">
  <a href="/pages/products.html" data-nav="products">Products</a>
  <a href="/index.html#sectors" data-nav="sectors">Sectors</a>
  <a href="/pages/technology.html" data-nav="technology">Technology</a>
  <a href="/pages/about.html" data-nav="about">About</a>
  <a href="/pages/careers.html" data-nav="careers">Careers</a>
  <a href="/pages/contact.html" data-nav="contact">Contact</a>
  <button class="nav-cta" onclick="window.location.href='/pages/contact.html'">Request Demo</button>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('navbar-root');
  if (!root) return;

  root.innerHTML = NAVBAR_HTML;

  // Fix root-relative paths if the site isn't served from domain root
  if (typeof fixRelativePaths === 'function') {
    fixRelativePaths(root);
  }

  // Highlight the active nav link (depends on nav-active.js logic,
  // but runs here too in case nav-active.js loads later)
  if (typeof highlightActiveNav === 'function') {
    highlightActiveNav(root);
  }

  // Re-bind hamburger + cursor targets that depend on navbar markup
  if (typeof initMobileMenu === 'function') initMobileMenu();
  if (typeof rebindCursorTargets === 'function') rebindCursorTargets();
});
