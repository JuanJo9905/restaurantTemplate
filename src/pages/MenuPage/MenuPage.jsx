import React, { useState } from 'react';
import { Flame, Heart, Users } from 'lucide-react';
import { menuData } from '../../data/menuData';
import './MenuPage.css';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('carnes');

  const categories = {
    entrantes: 'Entradas',
    carnes: 'Carnes Premium',
    acompañamientos: 'Acompañamientos',
    parrilla_especial: 'Especialidades de la Casa',
    postres: 'Postres'
  };

  const categoryEmojis = {
    entrantes: '🥩',
    carnes: '🔥',
    acompañamientos: '🥗',
    parrilla_especial: '👨‍🍳',
    postres: '🍮'
  };

  return (
    <div className="menu-page">
      <section className="section">
        <div className="container">
          <div className="menu-page__header">
            <h1 className="menu-page__title">Nuestra Parrilla</h1>
            <p className="menu-page__description">
              Descubre nuestras especialidades en carnes asadas, preparadas con técnicas tradicionales 
              argentinas y los mejores cortes seleccionados especialmente para ti.
            </p>
          </div>

          <div className="menu-page__category-nav">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`menu-page__category-button ${
                  activeCategory === key ? 'menu-page__category-button--active' : ''
                }`}
              >
                <span className="menu-page__category-emoji">{categoryEmojis[key]}</span>
                {label}
              </button>
            ))}
          </div>

          <div className="menu-page__content">
            <h2 className="menu-page__category-title">
              <span className="menu-page__category-icon">{categoryEmojis[activeCategory]}</span>
              {categories[activeCategory]}
            </h2>

            <div className="menu-page__items">
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="card" style={{ padding: '25px' }}>
                  <div className="menu-page__item">
                    <div className="menu-page__item-info">
                      <h3 className="menu-page__item-name">{item.name}</h3>
                      <p className="menu-page__item-description">{item.description}</p>
                      {activeCategory === 'carnes' && (
                        <div className="menu-page__item-badges">
                          <span className="menu-page__item-badge">🔥 A la parrilla</span>
                          <span className="menu-page__item-badge">🥩 Corte premium</span>
                        </div>
                      )}
                    </div>
                    <div className="menu-page__item-price">
                      <span className="menu-page__item-price-value">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-page__grill-info">
            <h3 className="menu-page__grill-title">🔥 Nuestra Parrilla Tradicional</h3>
            <div className="menu-page__info-grid">
              <div className="menu-page__info-item">
                <Flame size={40} />
                <h4 className="menu-page__info-item-title">Carbón Vegetal Premium</h4>
                <p className="menu-page__info-item-description">
                  Utilizamos carbón de encina seleccionado que aporta el sabor auténtico a nuestras carnes
                </p>
              </div>
              <div className="menu-page__info-item">
                <Heart size={40} />
                <h4 className="menu-page__info-item-title">Técnicas Tradicionales</h4>
                <p className="menu-page__info-item-description">
                  Métodos de cocción argentinos transmitidos por generaciones de maestros parrilleros
                </p>
              </div>
              <div className="menu-page__info-item">
                <Users size={40} />
                <h4 className="menu-page__info-item-title">Cortes Selectos</h4>
                <p className="menu-page__info-item-description">
                  Carnes maduradas y seleccionadas de las mejores ganaderías de España y Argentina
                </p>
              </div>
            </div>
          </div>

          <div className="menu-page__cooking-levels">
            <h3 className="menu-page__cooking-title">🥩 Puntos de Cocción</h3>
            <div className="menu-page__cooking-grid">
              <div className="menu-page__cooking-item">
                <div 
                  className="menu-page__cooking-color" 
                  style={{background: '#8B0000'}}
                ></div>
                <h4 className="menu-page__cooking-item-title">Muy Poco Hecho</h4>
                <p className="menu-page__cooking-item-description">Centro rojo y frío</p>
              </div>
              <div className="menu-page__cooking-item">
                <div 
                  className="menu-page__cooking-color" 
                  style={{background: '#DC143C'}}
                ></div>
                <h4 className="menu-page__cooking-item-title">Poco Hecho</h4>
                <p className="menu-page__cooking-item-description">Centro rojo y tibio</p>
              </div>
              <div className="menu-page__cooking-item">
                <div 
                  className="menu-page__cooking-color" 
                  style={{background: '#FF69B4'}}
                ></div>
                <h4 className="menu-page__cooking-item-title">Al Punto</h4>
                <p className="menu-page__cooking-item-description">Centro rosado y caliente</p>
              </div>
              <div className="menu-page__cooking-item">
                <div 
                  className="menu-page__cooking-color" 
                  style={{background: '#D2691E'}}
                ></div>
                <h4 className="menu-page__cooking-item-title">Bien Hecho</h4>
                <p className="menu-page__cooking-item-description">Completamente cocido</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;