// Minimal, dependency-free interactions: mobile nav toggle + auto year.
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    navToggle.setAttribute('aria-expanded', String(!isHidden));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}