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

  const btn = document.getElementById('submit-btn');

  const name  = document.getElementById('f-name')?.value.trim()  ?? '';
  const email = document.getElementById('f-email')?.value.trim() ?? '';
  const phone = document.getElementById('f-phone')?.value.trim() ?? '';
  const org   = document.getElementById('f-org')?.value.trim()   ?? '';
  const type  = document.getElementById('f-type')?.value.trim()  ?? '';
  const msg   = document.getElementById('f-msg')?.value.trim()   ?? '';

  if (!name || !email || !phone || !type || !msg) {
    setButtonState(btn, 'error', 'Please Complete Form');
    setTimeout(() => setButtonState(btn, 'default', 'Send Inquiry →'), 2800);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setButtonState(btn, 'error', 'Invalid Email');
    setTimeout(() => setButtonState(btn, 'default', 'Send Inquiry →'), 2800);
    return;
  }

  setButtonState(btn, 'loading', 'Transmitting...');

  const formData = new FormData();

  formData.append('entry.1468460380', name);   // Full Name
  formData.append('entry.1768174125', email);  // Email
  formData.append('entry.564153782', phone);   // Phone
  formData.append('entry.2068719704', org);    // Organization
  formData.append('entry.1849896614', type);   // Nature of Inquiry
  formData.append('entry.851126040', msg);     // Message
  
  fetch(
    'https://docs.google.com/forms/d/e/1FAIpQLSewI60dNbbQqrlHw_Xh8Wa3b_desNWJkJuFoICh01gi6NFRnw/formResponse',
    {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }
  )
  .then(() => {

    setButtonState(btn, 'success', '✓ Inquiry Sent');

    clearForm();

    setTimeout(() => {
      setButtonState(btn, 'default', 'Send Inquiry →');
    }, 4000);

  })
  .catch(() => {

    setButtonState(btn, 'error', 'Submission Failed');

    setTimeout(() => {
      setButtonState(btn, 'default', 'Send Inquiry →');
    }, 4000);

  });
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
  ['f-name', 'f-email', 'f-phone', 'f-org', 'f-type', 'f-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

window.initContactForm = initContactForm;

document.addEventListener('DOMContentLoaded', initContactForm);
