/* =========================================================
   Portafolio Diana Vargas — script.js
   Menú móvil · reveal al hacer scroll · nav activa ·
   formulario de contacto (demo, sin backend) · toast
   ========================================================= */

/* ---------- Menú móvil ---------- */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  const abierto = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(abierto));
  navToggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar el menú al elegir una sección (navegación con anclas)
navMenu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

/* ---------- Animaciones reveal (IntersectionObserver) ---------- */
const elementosReveal = document.querySelectorAll('.reveal');

const observadorReveal = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observadorReveal.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

elementosReveal.forEach((el) => observadorReveal.observe(el));

/* ---------- Resaltar la sección activa en el menú ---------- */
const secciones = document.querySelectorAll('main section[id]');
const enlacesNav = document.querySelectorAll('.nav-link[href^="#"]');

const observadorSecciones = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        enlacesNav.forEach((enlace) => {
          enlace.classList.toggle(
            'active',
            enlace.getAttribute('href') === '#' + entrada.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

secciones.forEach((seccion) => observadorSecciones.observe(seccion));

/* ---------- Toast ---------- */
const toast = document.getElementById('toast');
let toastTimer = null;

function mostrarToast(mensaje) {
  toast.textContent = mensaje;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ---------- Formulario de contacto (demo sin backend) ---------- */
const formulario = document.getElementById('contact-form');

if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    // ⚠️ Demo: no hay backend. Aquí iría el fetch a un servicio
    // de formularios (Formspree, EmailJS, backend propio…).
    mostrarToast('¡Gracias por tu mensaje! Te responderé pronto.');
    formulario.reset();
  });
}

/* ---------- Año actual en el footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Gatito del inicio: camina y se sienta junto al nombre ---------- */
const gatito = document.querySelector('.cat');

if (gatito) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Sin animación: el gato aparece ya sentado
    gatito.classList.add('seated');
  } else {
    // Cuando termina la caminata, se sienta junto al nombre
    gatito.addEventListener('animationend', () => {
      gatito.classList.add('seated');
    }, { once: true });
  }
}
