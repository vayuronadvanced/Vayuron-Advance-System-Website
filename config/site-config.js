/* ============================================================
   config/site-config.js — Vayuron Advanced Systems
   Central configuration file.

   Edit this file to update contact details, social links,
   and other site-wide values — changes apply everywhere.

   This file is loaded before all other scripts on every page.
   ============================================================ */

window.VAYURON_CONFIG = {

  /* ── Company details ──────────────────────────── */
  company: {
    name:       'Vayuron Advanced Systems',
    legalName:  'Vayuron Advanced Systems Pvt. Ltd.',
    tagline:    'Engineering Indigenous Innovation',
    founded:    '2018',
    country:    'India',
  },

  /* ── Contact ──────────────────────────────────── */
  contact: {
    email:      'info@vayuronadvancedsystems.com',
    phone:      '07554 582 442',
    phoneTel:   'tel:+910755458244',        // for href="tel:..."
    emailHref:  'mailto:info@vayuronadvancedsystems.com',
    address:    'Advanced Technology Centre, India',
    vendor:     'DRDO / MoD Registered Vendor',
  },

  /* ── Social media ─────────────────────────────── */
  social: {
    instagram:  'PASTE_INSTAGRAM_LINK_HERE',   // e.g. https://instagram.com/vayuron
    linkedin:   'PASTE_LINKEDIN_LINK_HERE',    // e.g. https://linkedin.com/company/vayuron
    // FUTURE SLOT: add more social links here
    // twitter:  '',
    // youtube:  '',
  },

  /* ── Site URLs ────────────────────────────────── */
  urls: {
    base:       'https://www.vayuron.in',
    ogImage:    'https://www.vayuron.in/assets/images/company/og-cover.jpg',
  },

  /* ── Google integrations ──────────────────────── */
  google: {
    formEmbedUrl:    'PASTE_GOOGLE_FORM_EMBED_URL_HERE',
    mapsEmbedUrl:    'PASTE_GOOGLE_MAPS_EMBED_URL_HERE',
    analyticsId:     'PASTE_GA4_MEASUREMENT_ID_HERE',   // e.g. G-XXXXXXXXXX
  },

};
