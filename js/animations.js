/* ============================================================
   animations.js — Vayuron Advanced Systems
   Phase 6 Visual Polish Module.

   Features:
     1.  Loading screen
     2.  Page-transition fade-in
     3.  Animated counter (count-up for stat numbers)
     4.  Parallax scrolling for hero background
     5.  Stagger-children IntersectionObserver
     6.  Magnetic button effect
     7.  Glitch text on hero headline
     8.  Scroll progress indicator
     9.  Reveal variants (left, right, scale) observer
     10. Pulse class on primary CTA
     11. Tilt cards (subtle 3D mouse tilt)
     12. Hero scanline interaction

   LOAD ORDER: after all other scripts.
   USAGE: include <script src="/js/animations.js"></script>
          on every page, after main.js.
   ============================================================ */

'use strict';

/* ── Guards ─────────────────────────────────────────── */
const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   1. LOADING SCREEN
   ============================================================ */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Minimum display time so it doesn't just flash
  const MIN_MS = 900;
  const start  = Date.now();

  function hide() {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_MS - elapsed);
    setTimeout(() => {
      screen.classList.add('hidden');
      // Remove from DOM after transition ends
      screen.addEventListener('transitionend', () => screen.remove(), { once: true });
    }, remaining);
  }

  if (document.readyState === 'complete') {
    hide();
  } else {
    window.addEventListener('load', hide, { once: true });
  }
}

/* ============================================================
   2. PAGE TRANSITION FADE-IN
   ============================================================ */
function initPageTransition() {
  if (prefersReducedMotion) return;

  // Add fade-in class to <body> on load
  document.body.classList.add('page-transition-in');

  // Intercept internal link clicks and fade out before navigation
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    // Skip: external, anchor-only, tel:, mailto:, js:
    if (!href ||
        href.startsWith('http') ||
        href.startsWith('//') ||
        href.startsWith('#') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:') ||
        link.hasAttribute('download') ||
        link.getAttribute('target') === '_blank') {
      return;
    }

    e.preventDefault();
    document.body.style.opacity    = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });

  // Restore opacity on back/forward navigation
  window.addEventListener('pageshow', () => {
    document.body.style.opacity    = '1';
    document.body.style.transition = 'opacity 0.3s ease';
  });
}

/* ============================================================
   3. ANIMATED COUNTER (count-up for stat numbers)
   ============================================================ */
function initCounters() {
  if (prefersReducedMotion) return;

  const elements = document.querySelectorAll('[data-target]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animateCounter(entry.target);
    });
  }, { threshold: 0.5 });

  elements.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const raw    = el.dataset.target; // e.g. "100", "4.5", "24/7", "₹50L Cr"
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';

  // If it contains non-numeric characters like "/" or letters, don't animate
  const numericValue = parseFloat(raw.replace(/[^0-9.]/g, ''));
  if (isNaN(numericValue)) return; // leave as-is for values like "24/7"

  const duration = 1800;
  const start    = performance.now();
  const isFloat  = raw.includes('.');
  const decimals = isFloat ? (raw.split('.')[1] || '').length : 0;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const value  = eased * numericValue;

    el.textContent = prefix + (isFloat
      ? value.toFixed(decimals)
      : Math.floor(value).toLocaleString('en-IN')) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = prefix + (isFloat
        ? numericValue.toFixed(decimals)
        : numericValue.toLocaleString('en-IN')) + suffix;
    }
  }

  requestAnimationFrame(tick);
}

/**
 * Prepares stat elements for counter animation.
 * Call this after the DOM is ready to set data-target
 * from the current text content of .stat-num and .sector-stat-num elements.
 */
function prepareCounters() {
  document.querySelectorAll('.stat-num, .sector-stat-num').forEach(el => {
    if (el.dataset.target) return; // already set
    const text = el.textContent.trim();

    // Extract numeric portion — e.g. "4+" → target "4", suffix "+"
    const match = text.match(/^([₹$]?)([0-9.]+)([KMBT+%LCr/7 ]*)$/i);
    if (match) {
      el.dataset.prefix = match[1] || '';
      el.dataset.target = match[2];
      el.dataset.suffix = match[3] || '';
    }
    // Non-matching (e.g. "24/7", "$50B") are left as static text
  });
}

/* ============================================================
   4. PARALLAX SCROLLING (hero background)
   ============================================================ */
function initParallax() {
  if (prefersReducedMotion) return;

  const heroGrid = document.querySelector('#hero .hero-grid');
  const heroBg   = document.querySelector('#hero .hero-bg');

  if (!heroGrid && !heroBg) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (heroGrid) heroGrid.style.transform = `translateY(${y * 0.25}px)`;
      if (heroBg)   heroBg.style.transform   = `translateY(${y * 0.15}px)`;
      ticking = false;
    });
  }, { passive: true });
}

/* ============================================================
   5. STAGGER-CHILDREN OBSERVER
   ============================================================ */
function initStaggerChildren() {
  const elements = document.querySelectorAll('.stagger-children');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   6. MAGNETIC BUTTON EFFECT
   ============================================================ */
function initMagneticButtons() {
  if (prefersReducedMotion) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.btn-primary, .btn-outline, .nav-cta').forEach(btn => {
    if (btn.dataset.magneticBound) return;
    btn.dataset.magneticBound = 'true';
    btn.classList.add('magnetic');

    btn.addEventListener('mousemove', e => {
      const rect   = btn.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) * 0.25;
      const dy     = (e.clientY - cy) * 0.25;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============================================================
   7. GLITCH TEXT (hero headline)
   ============================================================ */
function initGlitchText() {
  if (prefersReducedMotion) return;

  document.querySelectorAll('.hero-h1 .hl').forEach(el => {
    el.classList.add('glitch');
    el.dataset.text = el.textContent;
  });
}

/* ============================================================
   8. SCROLL PROGRESS INDICATOR
   ============================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width    = pct + '%';
  }, { passive: true });
}

/* ============================================================
   9. REVEAL VARIANTS OBSERVER
      Handles .reveal-left, .reveal-right, .reveal-scale
      in addition to the existing .reveal (in scroll-reveal.js)
   ============================================================ */
function initRevealVariants() {
  const variants = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale');
  if (!variants.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  variants.forEach(el => observer.observe(el));
}

/* ============================================================
   10. PULSE ON PRIMARY CTA
   ============================================================ */
function initCTAPulse() {
  if (prefersReducedMotion) return;

  // Only add pulse to the very first btn-primary on the page
  // (typically the hero CTA) — not every button
  const firstCTA = document.querySelector('.hero-actions .btn-primary');
  if (firstCTA) firstCTA.classList.add('pulse');
}

/* ============================================================
   11. TILT CARDS (subtle 3D mouse tilt on capability + product cards)
   ============================================================ */
function initTiltCards() {
  if (prefersReducedMotion) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.cap-card, .product-card').forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = 'true';
    card.classList.add('tilt-card');

    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const rotY  = ((e.clientX - cx) / (rect.width  / 2)) * 4;
      const rotX  = -((e.clientY - cy) / (rect.height / 2)) * 4;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ============================================================
   12. SCROLL PROGRESS BAR INJECTION
       Injects a 1px top progress bar if not already in HTML.
   ============================================================ */
function injectScrollProgressBar() {
  if (document.getElementById('scroll-progress')) return;

  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  bar.style.cssText = `
    position: fixed; top: 74px; left: 0; z-index: 999;
    height: 1px; width: 0%;
    background: var(--cyan);
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);
}

/* ============================================================
   INIT ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initPageTransition();
  injectScrollProgressBar();
  initScrollProgress();
  initGlitchText();
  initRevealVariants();
  initStaggerChildren();
  initCTAPulse();

  if (!prefersReducedMotion) {
    initParallax();
    initCounters();
    prepareCounters();
    // Delay interactive effects so they don't conflict with injection
    setTimeout(() => {
      initMagneticButtons();
      initTiltCards();
    }, 600);
  }
});

// Re-run magnetic + tilt bindings after navbar is injected
// (navbar.js calls rebindCursorTargets; we piggyback the same timing)
window.addEventListener('load', () => {
  if (!prefersReducedMotion) {
    initMagneticButtons();
    initTiltCards();
  }
});
