history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 2px 30px rgba(44, 26, 14, 0.1)';
      nav.style.background = 'rgba(245, 240, 232, 1)';
    } else {
      nav.style.boxShadow = 'none';
      nav.style.background = 'rgba(245, 240, 232, 0.95)';
    }
  });

  // Fade in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Smooth scroll without changing URL
  document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});