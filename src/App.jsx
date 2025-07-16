import React, { useState, useEffect } from 'react';
import { useRouter } from './hooks/useRouter';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import MenuPage from './pages/MenuPage/MenuPage';
import './styles/globals.css';

const MobileMenu = ({ isOpen, toggleMenu, navigate }) => {
  if (!isOpen) return null;

  const handleNavigation = (page) => {
    navigate(page);
    toggleMenu();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(44, 24, 16, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px'
    }}>
      <button
        onClick={() => handleNavigation('home')}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-light)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
      >
        Inicio
      </button>
      <button
        onClick={() => handleNavigation('menu')}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-light)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'var(--transition)'
        }}
      >
        Carta
      </button>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentPage, navigate } = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (currentPage === 'home') {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (isMenuOpen) toggleMenu();
          }
        });
      });
    }
  }, [currentPage, isMenuOpen]);

  return (
    <div>
      <Header 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        navigate={navigate}
        currentPage={currentPage}
      />
      <MobileMenu 
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        navigate={navigate}
      />
      <main>
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'menu' && <MenuPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
