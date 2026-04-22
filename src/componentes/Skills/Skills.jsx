// ─── Importaciones ────────────────────────────────────────────────────────────
// Estilos de la sección de habilidades
import './skills.css';
// Iconos de tecnologías desde react-icons (FontAwesome y Simple Icons)
import { 
  FaHtml5,    // HTML5
  FaCss3Alt,  // CSS3
  FaJs,       // JavaScript
  FaReact,    // React
  FaGitAlt    // Git
} from "react-icons/fa";
import { SiFigma, SiMysql, SiSupabase } from "react-icons/si";

/**
 * Sección de Habilidades Técnicas.
 *
 * Muestra las tecnologías que maneja el desarrollador en un layout de pirámide
 * invertida usando CSS Grid (3 en la primera fila, 2 en la segunda, 1 en la tercera).
 * Cada skill tiene un ícono, un label y un efecto hover con glow púrpura.
 * El id="skills" es usado por el NavBar para el scroll de navegación.
 */
const Skills = () => {
    return (
        // id="skills" — no cambiar; el NavBar lo usa como ancla de navegación
        <div className='skills-container' id='skills'>
            
            {/* Título de sección con underline decorativo */}
            <h2 className="titulo">Habilidades</h2>

            {/* Grid de skills en pirámide — la posición de cada card la define skills.css */}
            <div className='skills-triangle'>

                {/* Fila 1 — JavaScript */}
                <div className='skill'>
                    <FaJs className="skills-icon" />
                    <p>JavaScript</p>
                </div>

                {/* Fila 1 — CSS3 */}
                <div className='skill'>
                    <FaCss3Alt className="skills-icon" />
                    <p>CSS</p>
                </div>

                {/* Fila 1 — HTML5 */}
                <div className='skill'>
                    <FaHtml5 className="skills-icon" />
                    <p>HTML</p>
                </div>

                {/* Fila 2 — React (desplazado a la izquierda por CSS) */}
                <div className='skill'>
                    <FaReact className="skills-icon" />
                    <p>React</p>
                </div>

                {/* Fila 2 — MySQL (desplazado a la derecha por CSS) */}
                <div className='skill'>
                    <SiMysql className="skills-icon" />
                    <p>MySQL</p>
                </div>

                {/* Fila 3 — Git (centrado en la base de la pirámide) */}
                <div className='skill'>
                    <FaGitAlt className="skills-icon" />
                    <p>Git</p>
                </div>

            </div>

        </div>
    );
};

export default Skills;