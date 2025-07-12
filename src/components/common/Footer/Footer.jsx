import React from 'react';
import { Flame } from 'lucide-react';
import { restaurantData } from '../../../data/restaurantInfo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo-section">
          <Flame size={32} className="footer__logo-icon" />
          <h3 className="footer__logo-text">{restaurantData.name}</h3>
        </div>
        
        <div className="footer__info-grid">
          <div className="footer__info-column">
            <h4 className="footer__info-title">Contacto</h4>
            <p className="footer__info-text">{restaurantData.phone}</p>
            <p className="footer__info-text">{restaurantData.email}</p>
          </div>
          <div className="footer__info-column">
            <h4 className="footer__info-title">Ubicación</h4>
            <p className="footer__info-text">{restaurantData.address}</p>
          </div>
          <div className="footer__info-column">
            <h4 className="footer__info-title">Horarios</h4>
            <p className="footer__info-text">{restaurantData.hours}</p>
          </div>
        </div>
        
        <div className="footer__copyright">
          <p>&copy; 2025 {restaurantData.name}. Todos los derechos reservados.</p>
          <p className="footer__copyright-tech">Desarrollado con React + Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;