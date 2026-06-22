/* ============================================================
   footer.js — Vayuron Advanced Systems
   Injects the shared footer (kept in sync with
   components/footer.html) into every page at <div id="footer-root">.

   USAGE in every page, near the end of <body>:
     <div id="footer-root"></div>
     <script src="/js/utils.js"></script>
     <script src="/js/footer.js"></script>

   ===========================================================
   PLACEHOLDERS — fill these in once you have the links:
     PASTE_FACEBOOK_LINK_HERE
     PASTE_LINKEDIN_LINK_HERE
     PASTE_PHONE_NUMBER_HERE
     PASTE_EMAIL_HERE
   ===========================================================
   ============================================================ */

'use strict';

const FOOTER_HTML = `
<footer id="footer" role="contentinfo">
  <div class="footer-main section-wrap">

    <div class="footer-brand">
      <a class="logo" href="/pages/more-info.html" aria-label="Vayuron Advanced Systems">
        <div class="logo-mark" aria-hidden="true"></div>
        <span class="logo-text">VAYU<em>RON</em></span>
      </a>
      <p class="footer-tagline">
        Engineering Intelligent Systems for Mission-Critical Operations.
        Indigenous. Intelligent. Mission-Ready.
      </p>

      <div class="footer-contact">
        <!-- Click-to-call: opens device dialer -->
        <a href="tel:07554582442" aria-label="Call Vayuron Advanced Systems">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>07554582442</span>
        </a>
        <!-- Click-to-email: opens default mail client -->
        <a href="mailto:info@vayuronadvancedsystems.com" aria-label="Email Vayuron Advanced Systems">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>info@vayuronadvancedsystems.com</span>
        </a>
      </div>

      <div class="social-row" aria-label="Social media links" style="margin-top:24px">
        <!-- Instagram — PASTE YOUR INSTAGRAM PROFILE URL BELOW -->
        <a class="social-btn" href="https://www.instagram.com/vayuron.advanced.systms?igsh=MWF4ZWRzdW53cWd0Nw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <!-- LinkedIn — PASTE YOUR LINKEDIN COMPANY PAGE URL BELOW -->
        <a class="social-btn" href="https://www.linkedin.com/company/vaayu-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <!-- X (Twitter) — PASTE YOUR X PROFILE URL BELOW -->
        <a class="social-btn" href="PASTE_X_LINK_HERE" target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
          </svg>
        </a>
        
        <!-- FUTURE SLOT: add more social icons here following the same .social-btn pattern -->
      </div>

      <div class="footer-newsletter">
        <span class="footer-newsletter-label">Subscribe for Updates</span>
        <form class="footer-newsletter-row" id="newsletter-form" onsubmit="return false;">
          <input type="email" placeholder="Your email address" required aria-label="Email for newsletter">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-title">Products</h4>
      <ul class="footer-links">
        <li><a href="/products/uav-systems.html">UAV Systems</a></li>
        <li><a href="/products/artificial-intelligence.html">Artificial Intelligence</a></li>
        <li><a href="/products/software-systems.html">Software Systems</a></li>
        <li><a href="/products/advanced-engineering.html">Advanced Engineering</a></li>
        <li><a href="/pages/products.html">All Products →</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-title">Sectors</h4>
      <ul class="footer-links">
        <li><a href="/sectors/defence-security.html">Defence &amp; Security</a></li>
        <li><a href="/sectors/smart-cities.html">Smart Cities</a></li>
        <li><a href="/sectors/agriculture.html">Agriculture</a></li>
        <li><a href="/sectors/disaster-management.html">Disaster Management</a></li>
        <li><a href="/sectors/industrial-inspection.html">Industrial Inspection</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4 class="footer-col-title">Company</h4>
      <ul class="footer-links">
        <li><a href="/pages/about.html">About Vayuron Advanced Systems</a></li>
        <li><a href="/pages/more-info.html">More Information</a></li>
        <li><a href="/pages/technology.html">Technology</a></li>
        <li><a href="/pages/careers.html">Careers</a></li>
        <li><a href="/pages/downloads.html">Downloads</a></li>
        <li><a href="/pages/gallery.html">Gallery</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom section-wrap">
    <p class="footer-copy">© 2025 Vayuron Advanced Systems· All Rights Reserved · Made in India 🇮🇳</p>
    <nav class="footer-legal" aria-label="Legal links">
      <a href="/legal/privacy-policy.html">Privacy Policy</a>
      <a href="/legal/terms.html">Terms</a>
      <a href="/legal/security.html">Security</a>
    </nav>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('footer-root');
  if (!root) return;

  root.innerHTML = FOOTER_HTML;

  if (typeof fixRelativePaths === 'function') {
    fixRelativePaths(root);
  }

  // Newsletter Subscription Handler

const form = root.querySelector('#newsletter-form');

if (form) {

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');

    const email = emailInput.value.trim();

    if (!email) return;

    btn.disabled = true;
    btn.textContent = 'Submitting...';

    /*
      GOOGLE FORM SUBMISSION

      Replace:
      GOOGLE_FORM_ACTION_URL

      Replace:
      entry.123456789

      with your actual Google Form Entry ID
    */

    fetch('GOOGLE_FORM_ACTION_URL', {

      method: 'POST',
      mode: 'no-cors',

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      body: new URLSearchParams({
        'entry.123456789': email
      })

    })

    .then(() => {

      btn.textContent = 'Subscribed ✓';
      btn.classList.add('newsletter-success');

      emailInput.value = '';

      setTimeout(() => {

        btn.textContent = 'Subscribe';
        btn.classList.remove('newsletter-success');
        btn.disabled = false;

      }, 3500);

    })

    .catch(() => {

      btn.textContent = 'Try Again';

      setTimeout(() => {

        btn.textContent = 'Subscribe';
        btn.disabled = false;

      }, 3000);

    });

  });

}
});
