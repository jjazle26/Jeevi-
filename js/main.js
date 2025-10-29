// Basic interactivity: responsive nav toggle and contact form handling
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Contact form handling (client-side only)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const resetBtn = document.getElementById('resetBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic validation
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please fill in all fields.';
        status.style.color = 'crimson';
        return;
      }

      // This is a demo. Replace with your preferred form backend (Formspree, Netlify Forms, or your server).
      status.style.color = '';
      status.textContent = 'Thank you — your message has been received (demo).';
      form.reset();
    });

    resetBtn && resetBtn.addEventListener('click', () => {
      form.reset();
      status.textContent = '';
    });
  }

  // Optional: update mailto if user sets email in README or sends it to me later
  // document.getElementById('mailtoLink').href = 'mailto:your.email@example.com';
});
