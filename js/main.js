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

// Dog filter
const filterBtns = document.querySelectorAll('.filter-btn');
const dogCards = document.querySelectorAll('.dog-card-full');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    dogCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        card.dataset.sex === filter
          ? card.classList.remove('hidden')
          : card.classList.add('hidden');
      }
    });
  });
});