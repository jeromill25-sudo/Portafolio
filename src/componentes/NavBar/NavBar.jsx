import './nav-bar.css';
import Contact from '../Contact/Contact';

const NavBar = () => {
  return (
    <aside className="sidebar-aside">
      <nav className="nav-container" aria-label="Navegación principal">
        <a href="#about">
          <button type="button">Sobre mi</button>
        </a>
        <a href="#project">
          <button type="button">Proyectos</button>
        </a>
        <a href="#skills">
          <button type="button">Skills</button>
        </a>
      </nav>
      <Contact />
    </aside>
  );
};

export default NavBar;