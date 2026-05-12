// ─── Importaciones ────────────────────────────────────────────────────────────
// Estilos del pill de correo
import './contact.css';
// Ícono de sobre/email de la librería react-icons (Material Design)
import { MdEmail } from 'react-icons/md';

/**
 * Componente de contacto por email.
 *
 * Renderiza un enlace mailto estilizado como "pill" compacto
 * que se ubica al pie de la barra lateral (NavBar).
 * Al hacer hover muestra un glow púrpura sutil.
 */
const Contact = () => {
  return (
    // Contenedor del pill; el id="contact" permite un posible enlace directo
    <div className="contact-sidebar">
      <a
        className="contact-mail-link"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=jeromillr@gmail.com&su=Contacto%20desde%20Portafolio%20Web&body=Hola%2C%20Jeromill%20Romero.%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo%20para%20discutir%20una%20oportunidad%20de%20colaboraci%C3%B3n%20o%20proyecto.%20Quedo%20atento/a%20a%20tus%20comentarios."   // Abre el cliente de correo del usuario   
        title="Enviar correo a jeromillr@gmail.com"  // Tooltip de accesibilidad
      >
        {/* Ícono de sobre — aria-hidden porque el texto adyacente ya lo describe */}
        <MdEmail className="contact-mail-icon" aria-hidden />

        {/* Dirección de email visible; se trunca con ellipsis si no cabe */}
        <span className="contact-mail-text">jeromillr@gmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
