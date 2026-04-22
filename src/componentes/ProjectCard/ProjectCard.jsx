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
 * @param {string} tittle      - Título del proyecto (nota: prop heredada con typo)
 * @param {string} description - Descripción breve
 * @param {string} [link]      - URL del proyecto (demo, repositorio, etc.)
 */
const ProjectCard = ({ img, tittle, description, link }) => {

  /**
   * Contenido visual interno de la tarjeta.
   * Se extrae en variable para reutilizarlo dentro y fuera del <a>,
   * evitando duplicar JSX en los dos casos (con link / sin link).
   */
  const inner = (
    <div className="proyects">
      {/* Imagen de portada del proyecto */}
      <img src={img} alt={`Captura del proyecto ${tittle}`} />
      {/* Título */}
      <h2>{tittle}</h2>
      {/* Descripción breve */}
      <p>{description}</p>
    </div>
  );

  // ── Con enlace: envuelve `inner` en un <a> accesible ──
  if (link) {
    return (
      <div className="proyect-card-container">
        <a
          className="proyect-card-link"
          href={link}
          target="_blank"                  // Abre en nueva pestaña
          rel="noopener noreferrer"        // Seguridad: evita acceso al window.opener
          title={`Abrir proyecto: ${tittle}`}
        >
          {inner}
        </a>
      </div>
    );
  }

  // ── Sin enlace: renderiza solo la tarjeta visual ──
  return <div className="proyect-card-container">{inner}</div>;
};

export default ProjectCard;
