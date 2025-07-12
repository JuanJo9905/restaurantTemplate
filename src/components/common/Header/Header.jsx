import React, { useState, useEffect } from 'react';
import { Flame, Menu as MenuIcon, X } from 'lucide-react';
import { restaurantData } from '../../../data/restaurantInfo';
import './Header.css';

const Header = ({ isMenuOpen, toggleMenu, navigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div 
            onClick={() => navigate('home')}
            className="header__logo"
          >
            <Flame size={36} className="header__logo-icon" />
            {restaurantData.name}
          </div>
          
          <nav className="header__navigation">
            <button
              onClick={() => navigate('home')}
              className={`header__nav-button ${currentPage === 'home' ? 'header__nav-button--active' : ''}`}
            >
              Inicio
            </button>
            <button
              onClick={() => navigate('menu')}
              className={`header__nav-button ${currentPage === 'menu' ? 'header__nav-button--active' : ''}`}
            >
              Parrilla
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="header__mobile-menu-button"
          >
            {isMenuOpen ? 
              <X size={28} className="header__mobile-menu-icon" /> : 
              <MenuIcon size={28} className="header__mobile-menu-icon" />
            }
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;