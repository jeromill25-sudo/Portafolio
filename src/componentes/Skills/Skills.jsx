import './skills.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt 
} from "react-icons/fa";
import { SiFigma, SiMysql, SiSupabase } from "react-icons/si";

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            
            <h2 className="titulo">Habilidades</h2>

            <div className='skills-triangle'>

                <div className='skill'>
                    <FaJs className="skills-icon" />
                    <p>JavaScript</p>
                </div>

                <div className='skill'>
                    <FaCss3Alt className="skills-icon" />
                    <p>CSS</p>
                </div>

                <div className='skill'>
                    <FaHtml5 className="skills-icon" />
                    <p>HTML</p>
                </div>

                <div className='skill'>
                    <FaReact className="skills-icon" />
                    <p>React</p>
                </div>

                <div className='skill'>
                    <SiMysql className="skills-icon" />
                    <p>MySQL</p>
                </div>

                <div className='skill'>
                    <FaGitAlt className="skills-icon" />
                    <p>Git</p>
                </div>

            </div>

        </div>
    );
};

export default Skills;