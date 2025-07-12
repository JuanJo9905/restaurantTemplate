import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import { menuData } from '../../../data/menuData';
import './MenuPreview.css';

const MenuPreview = ({ navigate }) => {
  const featuredItems = [
    { ...menuData.carnes[0], category: "Carne Premium", icon: "🥩" },
    { ...menuData.parrilla_especial[0], category: "Especialidad", icon: "🔥" },
    { ...menuData.entrantes[0], category: "Entrada", icon: "🧀" }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Especialidades de la Parrilla</h2>
        <p className="menu-preview__subtitle">
          Descubre nuestros cortes más selectos y técnicas de asado tradicionales
        </p>

        <div className="grid grid-3">
          {featuredItems.map((item, index) => (
            <div key={index} className="card" style={{ padding: '30px', textAlign: 'center' }}>
              <div className="menu-preview__item-icon">
                <div className="menu-preview__item-emoji">{item.icon}</div>
                <Flame size={20} className="menu-preview__item-flame" />
              </div>
              <span className="menu-preview__item-category">{item.category}</span>
              <h3 className="menu-preview__item-name">{item.name}</h3>
              <p className="menu-preview__item-description">{item.description}</p>
              <span className="menu-preview__item-price">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="menu-preview__special-features">
          <div className="menu-preview__feature">
            <h4 className="menu-preview__feature-title">🔥 Parrilla de Carbón</h4>
            <p className="menu-preview__feature-description">
              Cocción tradicional con carbón vegetal seleccionado
            </p>
          </div>
          <div className="menu-preview__feature">
            <h4 className="menu-preview__feature-title">🥩 Carnes Premium</h4>
            <p className="menu-preview__feature-description">
              Cortes argentinos y españoles de máxima calidad
            </p>
          </div>
          <div className="menu-preview__feature">
            <h4 className="menu-preview__feature-title">👨‍🍳 Maestros Parrilleros</h4>
            <p className="menu-preview__feature-description">
              40 años de experiencia en técnicas de asado
            </p>
          </div>
        </div>

        <div className="menu-preview__view-more-button">
          <button onClick={() => navigate('menu')} className="btn">
            <ArrowRight size={20} />
            Ver Carta Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;