import './home.css';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
const professions = ["Web Developer", "Problem Solver", "Creator"];
import Skills from '../Skills/Skills';
import Pet from '../Pet/Pet';


const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                {/* Lado izquierdo */}
                <div className="home-rigth">
                    <div className='home-2container'>
                        <h1>Jeromill Romero.</h1>

                        <div className="professions">
                        <div className="professions-track">
                        {[...professions, ...professions].map((pro, index) => (
                            <span key={index}>{pro}</span>
                        ))}
                    </div>
                            
                        </div>
                        <p>Transformo ideas en experiencias web.</p>
                    </div>
                    

                    <div className='photo'>
                        <img src={'public/profile.jpeg'} alt="Profile" />
                    </div>
                </div>
            </div>
            <div className="cv-download">
            <a className="cv-link" href="/CV_Milly_Romero.pdf" download>
                    <button className="cv-button">Descargar CV</button>
            </a>
            </div>
            <div className='about'id='about'>
                <h2>Sobre mi</h2>
                <p>
                    Soy Jeromill Romero, un programador Junior e Ingeniero de Sistemas, me gusta trabajar en equipo, crear paginas web modernas, ayudar a resolver problemas y estudiar programacion. 
                </p>
            </div>
            <NavBar/>
            <Projects/>
            <Skills/>
            <Pet/>
            <footer className="home-footer">
                <p className="home-footer-text">
                    © 2026 Jeromill Romero
                    <span className="home-footer-sep" aria-hidden="true">
                        ||
                    </span>
                    Creado con React 🚀
                </p>
            </footer>
        </div>
        
    );
};

export default Home;