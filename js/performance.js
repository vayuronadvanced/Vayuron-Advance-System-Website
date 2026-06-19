/* ============================================================
   performance.js — Vayuron Advanced Systems
   Phase 7 — Performance optimisations.

   Features:
     1. Native lazy-load enforcement (adds loading="lazy" to
        all images and iframes not already marked)
     2. IntersectionObserver-based video autoplay — only plays
        when in viewport, pauses when out
     3. Link prefetch on hover — prefetches pages 100ms after
        the user hovers a nav or card link
     4. Font display optimisation warning (dev-only)
     5. Resource hints injection (preconnect for key domains)
   ============================================================ */

'use strict';

/* ── 1. Lazy loading enforcement ────────────────────── */
function initLazyLoading() {
  // All <img> without loading attribute → loading="lazy"
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // All <iframe> without loading attribute → loading="lazy"
  document.querySelectorAll('iframe:not([loading])').forEach(iframe => {
    // Skip Google Form iframes that need eager loading for UX
    const src = iframe.getAttribute('src') || '';
    if (!src.includes('docs.google.com/forms')) {
      iframe.setAttribute('loading', 'lazy');
    }
  });
}

/* ── 2. Video autoplay on visible, pause on hidden ─── */
function initVideoObserver() {
  const videos = document.querySelectorAll('video[autoplay]');
  if (!videos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {}); // Ignore autoplay policy errors
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.25 }
  );

  videos.forEach(video => observer.observe(video));
}

/* ── 3. Link prefetch on hover ──────────────────────── */
function initPrefetchOnHover() {
  // Only prefetch on fast connections
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn && (conn.saveData || conn.effectiveType === '2g')) return;

  const prefetched = new Set();

  function prefetch(url) {
    if (!url || prefetched.has(url)) return;
    if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#')) return;
    if (url.startsWith('http') && !url.includes(window.location.hostname)) return;

    prefetched.add(url);
    const link = document.createElement('link');
    link.rel  = 'prefetch';
    link.href = url;
    link.as   = 'document';
    document.head.appendChild(link);
  }

  let prefetchTimer;

  document.addEventListener('mouseover', e => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    prefetchTimer = setTimeout(() => prefetch(href), 100);
  });

  document.addEventListener('mouseout', () => {
    clearTimeout(prefetchTimer);
  });
}

/* ── 4. Resource hints injection ────────────────────── */
function injectResourceHints() {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'dns-prefetch', href: 'https://docs.google.com' },
  ];

  hints.forEach(({ rel, href, crossorigin }) => {
    // Skip if already exists
    if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel  = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/* ── 5. Image decode on load ────────────────────────── */
function initImageDecode() {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => {
      if (img.decode) img.decode().catch(() => {});
    });
  });
}

/* ── Init ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectResourceHints();
  initLazyLoading();
  initImageDecode();
  initVideoObserver();

  // Prefetch only on desktop (not touch/coarse pointer)
  if (!window.matchMedia('(pointer: coarse)').matches) {
    initPrefetchOnHover();
  }
});
