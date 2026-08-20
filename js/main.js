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

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !mobileNav.hidden) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
        toggle.focus();
      }
    });
  }

  // ---- Scroll-aware header shadow ----
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

  // ---- Scroll animations ----
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

    // Service cards — staggered up
    document.querySelectorAll('.service-card').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 80}ms`);
      observer.observe(el);
    });

    // Why cards — alternate left/right
    document.querySelectorAll('.why-card').forEach((el, i) => {
      el.dataset.anim = i % 2 === 0 ? 'left' : 'right';
      el.style.setProperty('--delay', `${i * 100}ms`);
      observer.observe(el);
    });

    // Gallery items — scale up
    document.querySelectorAll('.gallery-item').forEach((el, i) => {
      el.dataset.anim = 'scale';
      el.style.setProperty('--delay', `${i * 70}ms`);
      observer.observe(el);
    });

    // FAQ items — staggered up
    document.querySelectorAll('.faq-item').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 60}ms`);
      observer.observe(el);
    });

    // Section titles — expand the underline
    document.querySelectorAll('.section-title').forEach(el => {
      observer.observe(el);
    });

    // Location and hours blocks — slide up
    document.querySelectorAll('.location-info, .location-map-preview, .hours-table').forEach((el, i) => {
      el.dataset.anim = 'up';
      el.style.setProperty('--delay', `${i * 100}ms`);
      observer.observe(el);
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Smooth scroll polyfill for anchor links (for browsers without CSS scroll-behavior) ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Move focus to the section for accessibility
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });
})();
