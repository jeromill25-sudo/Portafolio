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
    tittle: 'To-do List',
    description: 'Es una aplicación web de tareas en React con Tailwind CSS y Lucide. ',
    link: 'https://to-do-list-6cvuujznz-jeromill25-6313s-projects.vercel.app/',
  },
  {
    img: '/profile.jpeg',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://github.com',
  },
  {
    img: '/hero.png',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://react.dev',
  },
  {
    img: '/vite.svg',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
    <div className="proyects-container" id="project">

      {/* Título de sección con underline decorativo en CSS */}
      <h2 className="titulo">Proyectos</h2>

      {/* Grid de tarjetas — la cantidad de columnas la controla projects.css */}
      <div className="proyects">
        {projects.map((project, index) => (
          // key compuesta para evitar colisiones si hay títulos repetidos
          <ProjectCard
            key={`${project.tittle}-${index}`}
            img={project.img}
            tittle={project.tittle}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
