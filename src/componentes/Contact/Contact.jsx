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
    <div className="contact-sidebar" id="contact">
      <a
        className="contact-mail-link"
        href="mailto:mrds10@hotmail.com"       // Abre el cliente de correo del usuario
        title="Enviar correo a mrds10@hotmail.com"  // Tooltip de accesibilidad
      >
        {/* Ícono de sobre — aria-hidden porque el texto adyacente ya lo describe */}
        <MdEmail className="contact-mail-icon" aria-hidden />

        {/* Dirección de email visible; se trunca con ellipsis si no cabe */}
        <span className="contact-mail-text">mrds10@hotmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
