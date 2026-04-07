import './projects.css';
import ToDoList from '../../assets/todolist.png';
import Profile from '../../assets/profile.jpeg';
import Hero from '../../assets/hero.png';
import Vite from '../../assets/vite.png';

const projects = [
  {
    img: ToDoList,
    tittle: 'To-do List',
    description: 'Es una aplicación web de tareas en React con Tailwind CSS y Lucide. ',
    link: 'https://to-do-list-6cvuujznz-jeromill25-6313s-projects.vercel.app/',
  },
  {
    img: Profile,
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://github.com',
  },
  {
    img: Hero,
    tittle: 'To-do List',
    description: 'es la vregaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    link: 'https://react.dev',
  },
  {
    img: Vite,
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
