/* ============================================================
   contact-form.js — Vayuron Advanced Systems
   Contact / inquiry form validation + submission handling.
   Used on pages/contact.html (and any page with #submit-btn).

   Replace the simulated setTimeout with a real fetch() call to
   api/contact.php (or api/server.js) when the backend is ready —
   see the FUTURE INTEGRATION comment inside handleSubmit().
   ============================================================ */

'use strict';

function initContactForm() {
  const btn = document.getElementById('submit-btn');
  if (!btn) return;
  if (btn.dataset.bound === 'true') return;
  btn.dataset.bound = 'true';

  btn.addEventListener('click', handleSubmit);
}

function handleSubmit() {
  const btn   = document.getElementById('submit-btn');
  const name  = document.getElementById('f-name')?.value.trim()  ?? '';
  const email = document.getElementById('f-email')?.value.trim() ?? '';

  if (!name || !email) {
    setButtonState(btn, 'error', 'Fill in Name & Email');
    setTimeout(() => setButtonState(btn, 'default', 'Send Inquiry →'), 2800);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setButtonState(btn, 'error', 'Invalid email address');
    setTimeout(() => setButtonState(btn, 'default', 'Send Inquiry →'), 2800);
    return;
  }

  setButtonState(btn, 'loading', 'Transmitting…');

  /* ─────────────────────────────────────────────────────────
     FUTURE INTEGRATION: replace setTimeout with:

     fetch('/api/contact.php', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name, email, ... })
     })
     .then(r => r.json())
     .then(data => { ... })
     .catch(err => { ... });
     ───────────────────────────────────────────────────────── */

  setTimeout(() => {
    setButtonState(btn, 'success', '✓  Inquiry Dispatched');
    clearForm();

    setTimeout(() => {
      setButtonState(btn, 'default', 'Send Inquiry →');
    }, 4500);
  }, 1600);
}

function setButtonState(btn, state, label) {
  btn.textContent = label;
  btn.disabled    = state === 'loading';

  btn.style.background = '';
  btn.style.color      = '';
  btn.classList.remove('sent');

  switch (state) {
    case 'success':
      btn.classList.add('sent');
      btn.style.background = 'var(--cyan3)';
      btn.style.color      = 'var(--cyan)';
      break;
    case 'error':
      btn.style.background = '#441100';
      btn.style.color      = '#ff6644';
      break;
    case 'loading':
      btn.style.background = 'var(--cyan2)';
      btn.style.color      = 'var(--black)';
      break;
  }
}

function clearForm() {
  ['f-name', 'f-email', 'f-org', 'f-type', 'f-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

window.initContactForm = initContactForm;

document.addEventListener('DOMContentLoaded', initContactForm);
