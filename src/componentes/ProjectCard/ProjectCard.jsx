// Estilos de la tarjeta (hover, imagen, tipografía)
import './project-card.css';

/**
 * Tarjeta individual de proyecto.
 *
 * Si se pasa `link`, toda la tarjeta se convierte en un enlace clickeable
 * que abre la URL en una nueva pestaña de forma segura (noopener noreferrer).
 * Si no se pasa `link`, la tarjeta se renderiza sin enlace.
 *
 * @param {string} img         - Ruta de la imagen del proyecto
 * @param {string} title       - Título del proyecto
 * @param {string} description - Descripción breve
 * @param {string} [link]      - URL del proyecto (demo, repositorio, etc.)
 */
const ProjectCard = ({ img, title, description, link }) => {

  /**
   * Contenido visual interno de la tarjeta.
   * Se extrae en variable para reutilizarlo dentro y fuera del <a>,
   * evitando duplicar JSX en los dos casos (con link / sin link).
   */
  const inner = (
    <div className="projects">
      {/* Imagen de portada del proyecto */}
      <img src={img} alt={`Captura del proyecto ${title}`} />
      {/* Título */}
      <h2>{title}</h2>
      {/* Descripción breve */}
      <p>{description}</p>
    </div>
  );

  // ── Con enlace: envuelve `inner` en un <a> accesible ──
  if (link) {
    return (
      <div className="project-card-container">
        <a
          className="project-card-link"
          href={link}
          target="_blank"                  // Abre en nueva pestaña
          rel="noopener noreferrer"        // Seguridad: evita acceso al window.opener
          title={`Abrir proyecto: ${title}`}
        >
          {inner}
        </a>
      </div>
    );
  }

  // ── Sin enlace: renderiza solo la tarjeta visual ──
  return <div className="project-card-container">{inner}</div>;
};

export default ProjectCard;
