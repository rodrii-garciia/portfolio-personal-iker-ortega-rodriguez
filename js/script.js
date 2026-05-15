/* =============================================
   PORTFOLIO — script.js
   Vanilla JS: navbar, scroll, menú, formulario, animaciones
   ============================================= */

(function () {
  'use strict';

  /* ---- NAVBAR: scroll ---- */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* ---- NAVBAR: link activo según sección ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', highlightActiveLink, { passive: true });

  /* ---- MENÚ MÓVIL ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('open');
    navbar.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Cerrar menú al hacer click en enlace
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      navbar.classList.remove('menu-open');
      navToggle.setAttribute('aria-label', 'Abrir menú');
      document.body.style.overflow = '';
    });
  });

  /* ---- SCROLL SUAVE (href="#id") ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // altura navbar
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- REVEAL ON SCROLL ---- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Escalonado por índice del elemento entre sus hermanos
          const delay = Array.from(entry.target.parentElement.children)
            .filter(el => el.classList.contains('reveal'))
            .indexOf(entry.target) * 100;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---- BARRAS DE IDIOMAS (animación) ---- */
  const idiomaFills = document.querySelectorAll('.idioma-fill');

  const idiomaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          idiomaObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  idiomaFills.forEach(fill => idiomaObserver.observe(fill));

  /* ---- FORMULARIO DE CONTACTO ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const nombre  = document.getElementById('nombre');
      const email   = document.getElementById('email');
      const mensaje = document.getElementById('mensaje');

      // Limpiar errores previos
      clearError(nombre, 'error-nombre');
      clearError(email, 'error-email');
      clearError(mensaje, 'error-mensaje');

      // Validar nombre
      if (!nombre.value.trim() || nombre.value.trim().length < 2) {
        showError(nombre, 'error-nombre', 'Introduce tu nombre (mínimo 2 caracteres).');
        valid = false;
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        showError(email, 'error-email', 'Introduce un email válido.');
        valid = false;
      }

      // Validar mensaje
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        showError(mensaje, 'error-mensaje', 'El mensaje debe tener al menos 10 caracteres.');
        valid = false;
      }

      if (valid) {
        const btn = form.querySelector('.btn-submit');
        const btnText = btn.querySelector('.btn-text');
        const btnSuccess = btn.querySelector('.btn-success');
        btn.classList.add('sent');
        btn.disabled = true;
        btnText.style.display = 'none';
        btnSuccess.style.display = 'inline';

        // Simular envío y restaurar después de 3s
        setTimeout(() => {
          form.reset();
          btn.classList.remove('sent');
          btn.disabled = false;
          btnText.style.display = 'inline';
          btnSuccess.style.display = 'none';
        }, 3000);
      }
    });
  }

  function showError(input, errorId, message) {
    input.classList.add('error');
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(input, errorId) {
    input.classList.remove('error');
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.textContent = '';
  }

  // Limpiar error al escribir
  ['nombre', 'email', 'mensaje'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(el, 'error-' + id));
  });

})();
