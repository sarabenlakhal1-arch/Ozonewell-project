import React, { useEffect } from 'react';
import './Documentation.css';

// Importations des images (Chaque image est importée une seule fois)
import imgCommerce from '../assets/photozon/commerce.jpeg';
import imgCafe from '../assets/photozon/cafe.jpeg';
import imgSante from '../assets/photozon/sante.jpeg';
import imgHotel from '../assets/photozon/hotel.jpeg'; 
import imgCoiffure from '../assets/photozon/coiffeur.png';
import imgEcole from '../assets/photozon/school.jpeg';
import imgTravail from '../assets/photozon/travail.jpeg';
import imgCuisine from '../assets/photozon/cuisine.jpeg';
import imgEau from '../assets/photozon/eau.jpeg';
import imgAir from '../assets/photozon/air.jpeg';

// Tableau UNIQUE : Chaque id est unique (1 à 10) et chaque fichier est cité une seule fois
const brochures = [
  { id: 1, title: "Hôtellerie", file: "HOTELLERIE.pdf", img: imgHotel },
  { id: 2, title: "Cafés & Restaurants", file: "CAFE RESTAURANT.pdf", img: imgCafe },
  { id: 3, title: "Santé & Médical", file: "SANTE-MEDICAL.pdf", img: imgSante },
  { id: 4, title: "Environnement de Travail", file: "ENVIRONNEMENT DE TRAVAIL.pdf", img: imgTravail },
  { id: 5, title: "Établissements Scolaires", file: "ETABLISSMENT SCOLAIRE.pdf", img: imgEcole },
  { id: 6, title: "Cuisine", file: "CUISINE Modele SP24.pdf", img: imgCuisine },
  { id: 7, title: "Commerces & ERP", file: "COMMERCE.pdf", img: imgCommerce },
  { id: 8, title: "Salons de Coiffure", file: "SALON DE COIFFURE.pdf", img: imgCoiffure },
  { id: 9, title: "Air ambiant", file: "AIR A4.pdf", img: imgAir },
  { id: 10, title: "Agriculture", file: "EAU A4.pdf", img: imgEau }
];

export default function Documentation() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docBody = document.querySelector('.doc-wrapper');
      if (docBody) {
        if (scrollY > 50) {
          docBody.classList.add('scrolled-grain');
        } else {
          docBody.classList.remove('scrolled-grain');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="doc-wrapper">
      <div className="grain-overlay"></div>

      <header className="doc-header">
        <h1>Centre de Documentation</h1>
        <p>Téléchargez nos plaquettes commerciales par secteur d'activité</p>
      </header>

      <div className="doc-grid">
        {brochures.map((brochure) => (
          <div key={brochure.id} className="brochure-card">
            <div className="card-image-container">
              <img src={brochure.img} alt={brochure.title} className="card-image" />
              <div className="card-image-overlay"></div>
            </div>

            <div className="card-content-wrapper">
              <div className="card-content">
                <div className="icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3>{brochure.title}</h3>
              </div>
              
              <div className="card-actions">
                <a 
                  href={`/documentation/${brochure.file}`}
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-action view"
                >
                  Visualiser la brochure
                </a>
                <a 
                  href={`/documentation/${brochure.file}`}
                  download 
                  className="btn-action download"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}