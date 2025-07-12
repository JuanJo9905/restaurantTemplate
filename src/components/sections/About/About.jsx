import React from 'react';
import { Users, Heart, Flame } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section" style={{ background: '#faf7f2' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="about__title">Nuestra Tradición</h2>
            <p className="about__description">
              Desde 1999, Asados Schrute ha sido el hogar de los amantes de la carne en Colombia. 
              Nuestro maestro parrillero, Rainn P. Wilson, aprendió las técnicas tradicionales 
              argentinas durante 15 años en Buenos Aires antes de traer su pasión a Colombia.
            </p>
            <p className="about__description">
              Cada corte es seleccionado personalmente y cocinado en nuestra parrilla de carbón vegetal, 
              manteniendo las tradiciones que hacen de cada comida una experiencia única e inolvidable.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-icon">
                  <Users size={24} />
                </div>
                <p className="about__stat-number">8000+</p>
                <p className="about__stat-label">Comensales Satisfechos</p>
              </div>
              <div className="about__stat">
                <div className="about__stat-icon">
                  <Heart size={24} />
                </div>
                <p className="about__stat-number">33</p>
                <p className="about__stat-label">Años de Tradición</p>
              </div>
            </div>
          </div>
          <div className="about__master-card">
            <Flame size={80} style={{ marginBottom: '20px' }} />
            <h3 className="about__master-name">Rainn P. Wilson</h3>
            <p className="about__master-title">Maestro Parrillero</p>
            <p className="about__master-quote">
              "El secreto está en el fuego, la paciencia y el amor por lo que haces. 
              Cada corte tiene su tiempo perfecto, y mi trabajo es encontrarlo."
            </p>
            <div className="about__master-badges">
              <span className="about__master-badge">🇦🇷 Tradición Argentina</span>
              <span className="about__master-badge">🔥 40 años experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;