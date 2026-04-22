// ─── Importaciones ────────────────────────────────────────────────────────────
import { useEffect, useState } from 'react';
// Estilos de la barra lateral y la bottom nav en mobile
import './nav-bar.css';
// Componente de correo electrónico tipo pill dentro del sidebar
import Contact from '../Contact/Contact';

// IDs de las secciones que el IntersectionObserver va a vigilar
const SECTIONS = ['about', 'project', 'skills'];

/**
 * Barra lateral de navegación fija.
 *
 * Funcionalidad:
 * - Desktop: sidebar vertical fija a la izquierda con glassmorphism.
 * - Mobile:  barra de navegación horizontal fija en la parte inferior.
 * - Usa IntersectionObserver para detectar qué sección está en pantalla
 *   y resalta el enlace correspondiente con la clase `nav-link--active`.
 */
const NavBar = () => {
  // Estado que guarda el ID de la sección actualmente visible en el viewport
  const [active, setActive] = useState('');

  useEffect(() => {
    // Lista de elementos observados (para poder desobservarlos al desmontar)
    const observers = [];

    /**
     * IntersectionObserver — detecta cuando una sección entra en la zona
     * media del viewport (30% desde arriba, 60% desde abajo).
     * Al detectarla, actualiza el estado `active` con su ID.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    // Observa cada sección si existe en el DOM
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    // Limpieza: dejar de observar cuando el componente se desmonte
    return () => observers.forEach((el) => observer.unobserve(el));
  }, []);

  // Definición de los links del nav con su id de sección y etiqueta visible
  const navLinks = [
    { id: 'about',   label: 'Sobre mí' },
    { id: 'project', label: 'Proyectos' },
    { id: 'skills',  label: 'Skills' },
  ];

  return (
    <aside className="sidebar-aside" aria-label="Navegación lateral">

      {/* ── Monograma / marca personal en la parte superior del sidebar ── */}
      <div className="sidebar-brand">
        <span className="sidebar-brand__dot" aria-hidden="true" />
        <span className="sidebar-brand__name">JR</span>
      </div>

      {/* ── Links de navegación — aplica clase activa según sección visible ── */}
      <nav className="nav-container" aria-label="Navegación principal">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${active === id ? 'nav-link--active' : ''}`}
          >
            {/* Barra indicadora de color que aparece cuando el link está activo */}
            <span className="nav-link__indicator" aria-hidden="true" />
            <button type="button">{label}</button>
          </a>
        ))}
      </nav>

      {/* ── Correo de contacto al pie del sidebar ── */}
      <Contact />
    </aside>
  );
};

export default NavBar;