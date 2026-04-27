// ─── Importaciones ────────────────────────────────────────────────────────────
// Estilos del contenedor y la grid de tarjetas
import './projects.css';
// Componente de tarjeta individual de proyecto
import ProjectCard from '../ProjectCard/ProjectCard';

/**
 * Array de datos de proyectos.
 * Cada objeto representa una tarjeta con imagen, título, descripción y link.
 * Para agregar un proyecto nuevo, simplemente añade un objeto aquí.
 */
const projects = [
  {
    img: '/todolist.png',
    title: 'To-do List',
    description: 'Es una aplicación web de tareas en React con Tailwind CSS y Lucide.',
    link: 'https://to-do-list-6cvuujznz-jeromill25-6313s-projects.vercel.app/',
  },
  {
    img: '/rick_morty.png',
    title: 'Rick and Morty',
    description: 'Explorador multidimensional de personajes basado en la Rick and Morty API, con una interfaz futurista de alta fidelidad y navegación antigravedad.',
    link: 'https://rick-morty-api-alpha.vercel.app/',
  },
  {
    img: '/buscar.png',
    title: 'Proyecto en desarrollo',
    description: 'Próximamente se añadirá una descripción detallada de este proyecto.',
    link: 'https://react.dev',
  },
  {
    img: '/buscar.png',
    title: 'Proyecto en desarrollo',
    description: 'Próximamente se añadirá una descripción detallada de este proyecto.',
    link: 'https://vitejs.dev',
  },
];

/**
 * Sección de Proyectos.
 *
 * Itera sobre el array `projects` y renderiza una <ProjectCard> por cada item.
 * La grid es responsiva: 1 columna en mobile → 2 en tablet → 3 en desktop.
 * El id="project" es usado por el NavBar para hacer scroll hacia aquí.
 */
const Projects = () => {
  return (
    // id="project" — no cambiar; el NavBar lo usa como ancla de navegación
    <div className="projects-container" id="project">

      {/* Título de sección con underline decorativo en CSS */}
      <h2 className="titulo">Proyectos</h2>

      {/* Grid de tarjetas — la cantidad de columnas la controla projects.css */}
      <div className="projects">
        {projects.map((project, index) => (
          // key compuesta para evitar colisiones si hay títulos repetidos
          <ProjectCard
            key={`${project.title}-${index}`}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
