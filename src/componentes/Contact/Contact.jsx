import './contact.css';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact-sidebar" id="contact">
      <a
        className="contact-mail-link"
        href="mailto:mrds10@hotmail.com"
        title="Enviar correo a mrds10@hotmail.com"
      >
        <MdEmail className="contact-mail-icon" aria-hidden />
        <span className="contact-mail-text">mrds10@hotmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
