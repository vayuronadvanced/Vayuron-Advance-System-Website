/* ============================================================
   home-content.js — Vayuron Advanced Systems
   Data + renderer for index.html's repeating homepage sections:
   Ticker, Capabilities grid, Sectors grid.

   Markup/classes generated here are IDENTICAL to what used to be
   hardcoded in index.html — same class names (cap-card, cap-icon,
   cap-name, cap-desc, cap-list / ind-card, ind-num, ind-icon,
   ind-name, ind-desc / t-item, t-sep) — so every existing CSS rule
   in capabilities.css, industries.css, and ticker.css continues
   to apply with zero changes there.

   Must load BEFORE js/scroll-reveal.js (see index.html script
   order) so .reveal elements exist in the DOM before the
   IntersectionObserver in scroll-reveal.js initializes.
   ============================================================ */

'use strict';

/* ---------- TICKER DATA ---------- */
const TICKER_ITEMS = [
  'Fixed Wing UAV', 'VTOL Systems', 'ISR Platforms', 'Tactical UAV Systems',
  'Computer Vision', 'Object Detection', 'FPV Mission Systems', 'Mission Planning',
  'Composite Manufacturing', 'Counter-Drone Solutions', 'Autonomous AI',
  'AI-Enabled Mission Systems', 'Cloud Infrastructure', 'Aerospace Structures',
  'Autonomous Navigation', 'Operational Dashboards', 'Payload Integration',
  'Industrial UAV Platforms', 'Data Analytics'
];

/* ---------- CAPABILITIES DATA ---------- */
const CAPABILITIES = [
  {
    href: '/products/uav-systems.html',
    icon: `<path d="M3 18 L16 7 L29 18"/><path d="M7 18 L7 27 L16 23 L25 27 L25 18"/><circle cx="16" cy="17" r="3"/><line x1="1" y1="20" x2="7" y2="18"/><line x1="31" y1="20" x2="25" y2="18"/>`,
    name: 'UAV Systems',
    desc: 'Tactical and long-endurance UAV platforms — from FPV strike systems to ISR aircraft — engineered for reconnaissance, surveillance, and payload delivery in contested environments.',
    list: ['FPV Strike Platforms', 'ISR &amp; Long-Endurance UAVs', 'VTOL &amp; Fixed-Wing Systems']
  },
  {
    href: '/products/artificial-intelligence.html',
    icon: `<rect x="6" y="6" width="20" height="20" rx="2"/><circle cx="16" cy="16" r="4"/><line x1="16" y1="6" x2="16" y2="12"/><line x1="16" y1="20" x2="16" y2="26"/><line x1="6" y1="16" x2="12" y2="16"/><line x1="20" y1="16" x2="26" y2="16"/><line x1="8.5" y1="8.5" x2="12.5" y2="12.5"/><line x1="19.5" y1="19.5" x2="23.5" y2="23.5"/><line x1="23.5" y1="8.5" x2="19.5" y2="12.5"/><line x1="8.5" y1="23.5" x2="12.5" y2="19.5"/>`,
    name: 'Artificial Intelligence',
    desc: 'AI-enabled mission systems combining computer vision, target recognition, and autonomous navigation for real-time decision support in the field.',
    list: ['Computer Vision &amp; Target Recognition', 'Autonomous Navigation', 'AI-Assisted Mission Planning']
  },
  {
    href: '/products/software-systems.html',
    icon: `<rect x="2" y="6" width="28" height="20" rx="2"/><polyline points="9,13 6,16 9,19"/><polyline points="23,13 26,16 23,19"/><line x1="14" y1="21" x2="18" y2="11"/>`,
    name: 'Software Systems',
    desc: 'Mission software and ground control systems — including real-time multi-user video intelligence distribution — built for secure command and operational management.',
    list: ['Ground Control &amp; Mission Planning', 'Real-Time Video Intelligence (MVTX)', 'Secure Data &amp; Communication Links']
  },
  {
    href: '/products/advanced-engineering.html',
    icon: `<polygon points="16,3 29,10 29,22 16,29 3,22 3,10"/><line x1="16" y1="3" x2="16" y2="29"/><line x1="3" y1="10" x2="29" y2="10"/><line x1="3" y1="22" x2="29" y2="22"/><line x1="3" y1="10" x2="16" y2="16"/><line x1="29" y1="10" x2="16" y2="16"/><line x1="3" y1="22" x2="16" y2="16"/><line x1="29" y1="22" x2="16" y2="16"/>`,
    name: 'Advanced Engineering',
    desc: 'Airframe design, composite structures, and embedded electronics engineered under a design-build-test approach — from concept through flight testing and deployment.',
    list: ['Airframe &amp; Composite Engineering', 'Embedded Electronics', 'Flight Testing &amp; Validation']
  }
];

/* ---------- SECTORS DATA ---------- */
const SECTORS = [
  {
    href: '/sectors/defence-security.html',
    icon: `<polygon points="12,2 22,7 22,17 12,22 2,17 2,7"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/>`,
    name: 'Defence &amp; Security',
    desc: 'Surveillance, border protection, and national security operations'
  },
  {
    href: '/sectors/smart-cities.html',
    icon: `<rect x="2" y="12" width="4" height="10"/><rect x="7" y="8" width="4" height="14"/><rect x="13" y="5" width="4" height="17"/><rect x="19" y="2" width="3" height="20"/>`,
    name: 'Smart Cities',
    desc: 'Urban aerial intelligence and infrastructure optimization'
  },
  {
    href: '/sectors/municipal-operations.html',
    icon: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M4.9 6 Q12 10 19.1 6"/><path d="M4.9 18 Q12 14 19.1 18"/>`,
    name: 'Municipal Operations',
    desc: 'Local government asset monitoring and public services delivery'
  },
  {
    href: '/sectors/infrastructure-monitoring.html',
    icon: `<line x1="3" y1="21" x2="21" y2="21"/><path d="M5 21 L5 11 L12 4 L19 11 L19 21"/><rect x="10" y="16" width="4" height="5"/>`,
    name: 'Infrastructure Monitoring',
    desc: 'Critical asset inspection and structural health assessment'
  },
  {
    href: '/sectors/agriculture.html',
    icon: `<path d="M12 2 C7 2 3 6.5 3 11 C3 17 12 22 12 22 C12 22 21 17 21 11 C21 6.5 17 2 12 2Z"/><circle cx="12" cy="11" r="3"/>`,
    name: 'Agriculture',
    desc: 'Precision crop monitoring, spraying, and field analytics'
  },
  {
    href: '/sectors/disaster-management.html',
    icon: `<path d="M12 2 L2 20 L22 20 Z"/><line x1="12" y1="10" x2="12" y2="15"/><circle cx="12" cy="17" r="1"/>`,
    name: 'Disaster Management',
    desc: 'Rapid response, search &amp; rescue, and damage assessment'
  },
  {
    href: '/sectors/environmental-monitoring.html',
    icon: `<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="7.1" y2="7.1"/><line x1="16.9" y1="16.9" x2="19.1" y2="19.1"/><line x1="19.1" y1="4.9" x2="16.9" y2="7.1"/><line x1="7.1" y1="16.9" x2="4.9" y2="19.1"/>`,
    name: 'Environmental Monitoring',
    desc: 'Ecological surveillance, pollution tracking, and resource mapping'
  },
  {
    href: '/sectors/industrial-inspection.html',
    icon: `<rect x="2" y="7" width="20" height="14" rx="1"/><path d="M8 7 L8 4 L16 4 L16 7"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>`,
    name: 'Industrial Inspection',
    desc: 'Plant, pipeline, and facility automated inspection systems'
  }
];

/* ---------- RENDERERS ---------- */

function renderTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;

  const itemHtml = TICKER_ITEMS
    .map(label => `<span class="t-item">${label}</span><div class="t-sep" aria-hidden="true"></div>`)
    .join('');

  // Duplicated once for the seamless infinite-loop animation
  track.innerHTML = itemHtml + itemHtml;
}

function renderCapabilities() {
  const grid = document.getElementById('capabilities-grid');
  if (!grid) return;

  grid.innerHTML = CAPABILITIES.map(cap => `
    <a class="cap-card" href="${cap.href}">
      <div class="cap-icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">${cap.icon}</svg>
      </div>
      <h3 class="cap-name">${cap.name}</h3>
      <p class="cap-desc">${cap.desc}</p>
      <ul class="cap-list">
        ${cap.list.map(li => `<li>${li}</li>`).join('')}
      </ul>
    </a>
  `).join('');
}

function renderSectors() {
  const grid = document.getElementById('sectors-grid');
  if (!grid) return;

  const revealCycle = ['reveal', 'reveal d1', 'reveal d2', 'reveal d3'];

  grid.innerHTML = SECTORS.map((sector, i) => `
    <a class="ind-card ${revealCycle[i % 4]}" href="${sector.href}">
      <span class="ind-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div class="ind-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${sector.icon}</svg>
      </div>
      <h3 class="ind-name">${sector.name}</h3>
      <p class="ind-desc">${sector.desc}</p>
    </a>
  `).join('');
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderCapabilities();
  renderSectors();
});