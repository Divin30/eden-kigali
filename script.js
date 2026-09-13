document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const header = document.querySelector('.site-header');

  const updateHeaderState = () => {
    const scrolled = window.scrollY > 80;
    document.body.classList.toggle('scrolled', scrolled);
    if (header) {
      header.classList.toggle('scrolled', scrolled);
    }
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  console.log(`EDEN Kigali ready — ${year}`);
});
