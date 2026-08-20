/* main.js — Helen Haircut */
(function () {
  'use strict';

  // ---- Mobile navigation ----
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !mobileNav.hidden) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
        toggle.focus();
      }
    });
  }

  // ---- Scroll-aware header ----
  const header = document.querySelector('.site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---- Hero parallax ----
  const heroImg = document.querySelector('.hero-img');
  const prefersReducedParallax = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroImg && !prefersReducedParallax) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          heroImg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---- Scroll animations ----
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {

    const observe = (el) => observer.observe(el);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -16px 0px' });

    // Section titles — underline expands + fade up
    document.querySelectorAll('.section-title').forEach(el => {
      el.dataset.anim = 'up';
      observe(el);
    });

    // Section intros
    document.querySelectorAll('.section-intro').forEach(el => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', '120ms');
      observe(el);
    });

    // Service cards — staggered up
    document.querySelectorAll('.service-card').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 130}ms`);
      observe(el);
    });

    // Why cards — strong left/right slide
    document.querySelectorAll('.why-card').forEach((el, i) => {
      el.dataset.anim = i % 2 === 0 ? 'left' : 'right';
      el.style.setProperty('--delay', `${i * 150}ms`);
      observe(el);
    });

    // Gallery items — scale up, staggered
    document.querySelectorAll('.gallery-item').forEach((el, i) => {
      el.dataset.anim = 'scale';
      el.style.setProperty('--delay', `${i * 100}ms`);
      observe(el);
    });

    // Location columns
    document.querySelectorAll('.location-info').forEach(el => {
      el.dataset.anim = 'left';
      observe(el);
    });
    document.querySelectorAll('.location-map-preview').forEach(el => {
      el.dataset.anim = 'right';
      el.style.setProperty('--delay', '150ms');
      observe(el);
    });

    // Hours table
    document.querySelectorAll('.hours-table').forEach(el => {
      el.dataset.anim = 'up';
      observe(el);
    });
    document.querySelectorAll('.hours-note').forEach(el => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', '150ms');
      observe(el);
    });

    // FAQ items — staggered up, longer cascade
    document.querySelectorAll('.faq-item').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 110}ms`);
      observe(el);
    });

    // CTA section
    document.querySelectorAll('.cta-title, .cta-text, .btn-cta').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 120}ms`);
      observe(el);
    });

    // Footer columns
    document.querySelectorAll('.footer-brand, .footer-nav, .footer-social').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 100}ms`);
      observe(el);
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
})();
