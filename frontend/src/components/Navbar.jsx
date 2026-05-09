import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo-ozon2.jpeg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo ajusté pour toucher le haut et le bas via CSS */}
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logoImg} alt="Ozonewell Logo" className="logo-img" />
          </Link>
        </div>

        {/* Icone Menu Mobile */}
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        {/* Overlay pour fermer le menu en cliquant à côté */}
        {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}

      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li><Link to="/" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
        <li><Link to="/solutions" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
        <li><Link to="/produits" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Produits</Link></li>
        <li><Link to="/documentation" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Documentation</Link></li>
        <li><Link to="/certificats" className="nav-link-item" onClick={() => setIsMenuOpen(false)}>Certificats</Link></li>
        <li>
          {/* Texte changé de "Contactez-nous" à "Contact" */}
          <Link to="/contact" className="nav-btn-contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;