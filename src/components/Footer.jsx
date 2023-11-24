import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-main flex items-center justify-around h-full lg:justify-center lg:gap-16">
        <div className="footer-socials-container flex flex-col justify-between lg:flex-row lg:items-center lg:gap-16 lg:h-full">
          <div className="logo-footer">
            <img src="/src/img/logo-footer.svg" alt="" />
          </div>
          <div className="socials-footer flex flex-col gap-4">
            <div className="socials-footer-item flex gap-2 items-center">
              <img src="/src/img/instagram-logo-footer.svg" alt="" />
              <span>origen.viajes</span>
            </div>
            <div className="socials-footer-item flex gap-2 items-center">
              <img src="/src/img/whatsapp-logo-footer.svg" alt="" />
              <span>11 2880 - 8745</span>
            </div>
            <div className="socials-footer-item flex gap-2 items-center">
              <img src="/src/img/gmail-logo-footer.svg" alt="" />
              <span>contacto@origentourandtravel.tur.ar</span>
            </div>
          </div>
        </div>
        <div className="footer-nav flex flex-col justify-end lg:justify-center lg:h-full lg:flex-row lg:gap-2 lg:text-center">
          <div className="footer-nav-item mt-2">
            <Link to="/">Inicio</Link>
          </div>
          <div className="footer-nav-item mt-2">
            <Link to="/destinos">Destinos</Link>
          </div>
          <div className="footer-nav-item mt-2">
            <Link to="/experiencias">Experiencias</Link>
          </div>
          <div className="footer-nav-item mt-2">
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="footer-nav-item mt-2">
            <Link to="/nosotros">Nosotros</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;