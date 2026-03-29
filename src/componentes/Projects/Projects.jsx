import './projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const projects = [
  {
    img: 'src/assets/image.png',
    tittle: 'To-do List',
    description: 'Es una aplicación web de tareas en React con Tailwind CSS y Lucide. ',
    link: 'https://github.com',
  },
  {
    img: 'src/assets/profile.jpeg',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://github.com',
  },
  {
    img: 'src/assets/hero.png',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://react.dev',
  },
  {
    img: 'src/assets/hero.png',
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://vitejs.dev',
  },
];

const Projects = () => {
  return (
    <div className="proyects-container" id="project">
      <h2 className="titulo">Proyectos</h2>
      <div className="proyects">
        {projects.map((project, index) => (
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
