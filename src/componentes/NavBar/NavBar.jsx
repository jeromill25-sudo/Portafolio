import { useEffect, useState } from 'react';
import './nav-bar.css';
import Contact from '../Contact/Contact';

const SECTIONS = ['about', 'project', 'skills'];

const NavBar = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers = [];

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

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => observers.forEach((el) => observer.unobserve(el));
  }, []);

  const navLinks = [
    { id: 'about',   label: 'Sobre mí' },
    { id: 'project', label: 'Proyectos' },
    { id: 'skills',  label: 'Skills' },
  ];

  return (
    <aside className="sidebar-aside" aria-label="Navegación lateral">
      <div className="sidebar-brand">
        <span className="sidebar-brand__dot" aria-hidden="true" />
        <span className="sidebar-brand__name">JR</span>
      </div>

      <nav className="nav-container" aria-label="Navegación principal">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${active === id ? 'nav-link--active' : ''}`}
          >
            <span className="nav-link__indicator" aria-hidden="true" />
            <button type="button">{label}</button>
          </a>
        ))}
      </nav>

      <Contact />
    </aside>
  );
};

export default NavBar;