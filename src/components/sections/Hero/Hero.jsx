import React from 'react';
import { Flame, Phone } from 'lucide-react';
import { restaurantData } from '../../../data/restaurantInfo';
import './Hero.css';

const Hero = ({ navigate }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{restaurantData.name}</h1>
          <p className="hero__tagline">{restaurantData.tagline}</p>
          <p className="hero__description">{restaurantData.description}</p>
          <div className="hero__actions">
            <button onClick={() => navigate('menu')} className="btn">
              <Flame size={20} />
              Ver Nuestra Parrilla
            </button>
            <a href="#contacto" className="btn btn-outline">
              <Phone size={20} />
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;