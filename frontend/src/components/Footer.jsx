import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logoozon.jpeg'; 

export default function Footer() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-container">
        
        {/* Section 1: Coordonnées */}
        <div className="footer-col footer-contact">
          <h4 className="footer-h4">OZONEWELL</h4>
          <div className="footer-info-text">
            <p>80, rue Allal Ben Ahmed Amkik, Belvédère</p>
            <p>20300 Casablanca - Maroc</p>
            <div className="contact-details">
              <p><strong>Tél:</strong> +212 (5) 22 24 99 32</p>
              <p><strong>Fax:</strong> +212 (5) 22 24 70 95</p>
              <p><strong>Email:</strong> contact@ozonewell.com</p>
            </div>
          </div>
        </div>

        {/* Section 2: Menu */}
        <div className="footer-col footer-nav">
          <h4 className="footer-h4">Menu</h4>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/produits">Produits</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/certificats">Certificats</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3: Logo + LinkedIn */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="OZONEWELL" className="footer-logo" />
          <div className="footer-socials">
            <a href="https://linkedin.com/company/ozonewell" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom avec lien admin invisible */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            © {anneeActuelle} OZONEWELL. Tous droits réservés
            <Link to="/login" className="admin-trigger">.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}