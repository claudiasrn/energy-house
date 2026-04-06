// Prevent browser from restoring scroll position on back-navigation
history.scrollRestoration = 'manual';

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollPaddingTop = '120px';


    // ── Mobile navigation ────────────────────────────────────────────────────

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks  = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close the mobile menu when any link inside it is clicked
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });


    // ── Active nav link ───────────────────────────────────────────────────────
    // Compare the filename in the URL to each link's href and mark it active

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) link.classList.add('active');
    });


    // ── Nav scroll shadow ─────────────────────────────────────────────────────
    // Adds the .scrolled class once the user scrolls past 50px; the CSS handles
    // the box-shadow so this stays a single classList.toggle call.

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
    });


    // ── Fade-in on scroll ─────────────────────────────────────────────────────
    // Watches every .fade-in element; adds .visible when it enters the viewport
    // and removes it when it leaves (re-hide on scroll up is intentional).

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


    // ── Smooth scroll (data-target links) ────────────────────────────────────
    // Uses data-target="sectionId" instead of href="#..." to avoid updating
    // the URL bar.

    document.querySelectorAll('a[data-target]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.getElementById(link.dataset.target);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });


    // ── Animated number counter ───────────────────────────────────────────────
    // Counts up each .stat-num from 0 to its final value when it enters the
    // viewport. Preserves any non-numeric suffix (e.g. "+", "%").

    const counters = document.querySelectorAll('.stat-num');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el     = entry.target;
            const text   = el.innerText;
            const final  = parseInt(text);
            const suffix = text.replace(/[0-9]/g, '');
            let count    = 0;

            const duration  = 2500;
            const increment = final / (duration / 30);

            const timer = setInterval(() => {
                count += increment;
                if (count >= final) {
                    count = final;
                    clearInterval(timer);
                }
                el.innerText = Math.floor(count) + suffix;
            }, 30);

            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
});