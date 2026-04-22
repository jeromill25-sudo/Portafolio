// ─── Importaciones ────────────────────────────────────────────────────────────
// Estilos globales de la página principal
import './home.css';
// Barra lateral de navegación fija
import NavBar from '../NavBar/NavBar';
// Sección de proyectos con grid de tarjetas
import Projects from '../Projects/Projects';
// Lista de profesiones para el carrusel animado del hero
const professions = ["Web Developer", "Problem Solver", "Creator"];
// Sección de habilidades técnicas en layout pirámide
import Skills from '../Skills/Skills';
// Mascota interactiva que sigue el cursor del mouse
import Pet from '../Pet/Pet';
// Barra de progreso vertical que indica cuánto se ha scrolleado
import ScrollProgress from '../ScrollProgress/ScrollProgress';
// Ícono oficial de React para el footer
import { FaReact } from 'react-icons/fa';


/**
 * Componente principal de la página.
 * Orquesta todos los secciones del portafolio en orden:
 * Hero → About → Proyectos → Skills → Pet → Footer
 * El NavBar y ScrollProgress son elementos fijos (no fluyen con el documento).
 */
const Home = () => {
    return (
        <div className="home">

            {/* ── HERO: nombre, carrusel de profesiones y foto de perfil ── */}
            <div className="home-container">
                <div className="home-rigth">

                    {/* Bloque de texto: nombre + carrusel + descripción */}
                    <div className='home-2container'>
                        <h1>Jeromill Romero.</h1>

                        {/* Carrusel infinito de etiquetas de profesión */}
                        <div className="professions">
                            <div className="professions-track">
                                {/* Duplicamos el array para que la animación CSS loop sea seamless */}
                                {[...professions, ...professions].map((pro, index) => (
                                    <span key={index}>{pro}</span>
                                ))}
                            </div>
                        </div>

                        <p>Transformo ideas en experiencias web.</p>
                    </div>

                    {/* Foto de perfil circular con efecto hover */}
                    <div className='photo'>
                        <img src={'public/profile.jpeg'} alt="Foto de perfil de Jeromill Romero" />
                    </div>
                </div>
            </div>

            {/* ── BOTÓN DE DESCARGA DE CV ── */}
            <div className="cv-download">
                <a className="cv-link" href="/CV_Milly_Romero.pdf" download>
                    <button className="cv-button">Descargar CV</button>
                </a>
            </div>

            {/* ── SECCIÓN ABOUT — id requerido por el NavBar para el scroll ── */}
            <div className='about' id='about'>
                <h2>Sobre mi</h2>
                <p>
                    Soy Jeromill Romero, un programador Junior e Ingeniero de Sistemas, me gusta trabajar en equipo, crear paginas web modernas, ayudar a resolver problemas y estudiar programacion. 
                </p>
            </div>

            {/* ── BARRA LATERAL DE NAVEGACIÓN (fixed, no fluye con el scroll) ── */}
            <NavBar/>

            {/* ── SECCIÓN PROYECTOS — id requerido por el NavBar ── */}
            <Projects/>

            {/* ── SECCIÓN SKILLS — id requerido por el NavBar ── */}
            <Skills/>

            {/* ── MASCOTA INTERACTIVA (sigue el cursor, lógica preservada) ── */}
            <Pet/>

            {/* ── PIE DE PÁGINA — diseño mejorado con badge y tagline ── */}
            <footer className="home-footer">
                <div className="home-footer-inner">

                    {/* Nombre + año como pill */}
                    <div className="home-footer-brand">
                        <span className="home-footer-brand-name">Jeromill Romero</span>
                        <span className="home-footer-brand-year">© 2026</span>
                    </div>

                    {/* Frase descriptiva */}
                    <p className="home-footer-tagline">
                        Transformando ideas en experiencias web, un componente a la vez.
                    </p>

                    {/* Separador visual */}
                    <div className="home-footer-divider" aria-hidden="true" />

                    {/* Badge de tecnología: ícono oficial de React al mismo tamaño que el texto */}
                    <span className="home-footer-badge">
                        <span className="home-footer-badge-dot" aria-hidden="true" />
                        Creado con React
                        {/* FaReact: mismo tamaño que el font-size del badge (0.72rem ≈ 11.5px) */}
                        <FaReact className="home-footer-react-icon" aria-hidden="true" />
                    </span>

                </div>
            </footer>


            {/* ── BARRA DE PROGRESO DE SCROLL (fixed, solo visible en desktop) ── */}
            <ScrollProgress />
        </div>
    );
};

export default Home;