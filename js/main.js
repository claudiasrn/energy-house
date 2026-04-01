history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);

  // Mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links li a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) link.classList.add('active');
});

  // Nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 50);
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


// Number counter
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const text = target.innerText;
      const final = parseInt(text);
      const suffix = text.replace(/[0-9]/g, '');
      let count = 0;
      const duration = 2500;
      const increment = final / (duration / 30);

      const timer = setInterval(() => {
        count += increment;
        if (count >= final) {
          count = final;
          clearInterval(timer);
        }
        target.innerText = Math.floor(count) + suffix;
      }, 30);

      counterObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));
});