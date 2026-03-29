import './project-card.css';

/**
 * Tarjeta de proyecto. Si pasas `link`, toda la tarjeta abre esa URL (nueva pestaña).
 * @param {string} img - Ruta de la imagen
 * @param {string} tittle - Título del proyecto
 * @param {string} description - Descripción
 * @param {string} [link] - URL del proyecto (demo, repo, etc.)
 */
const ProjectCard = ({ img, tittle, description, link }) => {
  const inner = (
    <div className="proyects">
      <img src={img} alt="" />
      <h2>{tittle}</h2>
      <p>{description}</p>
    </div>
  );

  if (link) {
    return (
      <div className="proyect-card-container">
        <a
          className="proyect-card-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title={`Abrir proyecto: ${tittle}`}
        >
          {inner}
        </a>
      </div>
    );
  }

  return <div className="proyect-card-container">{inner}</div>;
};

export default ProjectCard;
