import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelOzoneDetails.css';

// Importations des images
import imgHotelSide from '../assets/photozon/hotel.jpeg';
import imgHotelAdvantage from '../assets/photozon/hote.png';

const HotelOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="hotel-page-centered">
      {/* HEADER TOTALEMENT CENTRÉ */}
      <div className="hotel-header-section">
        <h1 className="hotel-title-top">
          Désinfection à l'ozone et filtres HEPA pour l'hygiène environnementale dans les hôtels
        </h1>
        <h2 className="hotel-slogan-main">
          Des séjours plus confortables et plus sains pour favoriser les bons avis et la rentabilité
        </h2>
      </div>

      {/* SECTION DESCRIPTION CENTRÉE */}
      <div className="hotel-body-content">
        <h3 className="hotel-body-subtitle">
          Désinfection et hygiène environnementale pour les problèmes courants dans les hôtels
        </h3>

        <div className="hotel-text-block-centered">
          <div className="hotel-item">
            <h4>Chambres saines : désinfectées et sans odeur</h4>
            <p>
              Ce service automatisé et continu diffuse de l'ozone dans les chambres 24h/24 et 365j/365. Il élimine tous types de micro-organismes, 
              de contaminants chimiques et d'odeurs. Afin de garantir aux clients une désinfection et une qualité de l'air optimales, 
              <strong> Ozonewell</strong> effectue régulièrement des analyses microbiologiques pour assurer un traitement sans traces.
            </p>
          </div>

          <div className="hotel-item">
            <h4>Traitement choc des chambres</h4>
            <p>
              <strong>Ozonewell</strong> fournit à l'équipe de nettoyage un outil pratique : le canon à ozone, fabriqué exclusivement pour 
              désodoriser et assainir une chambre en moins de 5 minutes. Nous proposons également un audit de qualité environnementale.
            </p>
          </div>

          {/* IMAGE CENTRÉE AVEC CADRE BLANC 10PX */}
          <div className="hotel-central-image">
            <div className="white-frame-10px">
              <img src={imgHotelSide} alt="Désinfection Hôtel Ozonewell" />
            </div>
          </div>

          <div className="hotel-item">
            <h4>Espaces communs et zones critiques</h4>
            <p>
              La purification de l'air via filtration <strong>HEPA haute efficacité</strong> est appliquée dans les zones de passage intense : 
              hall d'entrée, restaurants, buffet, salles de sport et spa pour garantir un environnement sain et sûr.
            </p>
          </div>
        </div>
      </div>

      {/* BOUTON DEVIS CENTRÉ */}
      <div className="hotel-action-centered">
        <button className="hotel-btn-main" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* BANDEAU BLEU DES AVANTAGES (Centré avec marges) */}
      <div className="hotel-benefits-wrapper">
        <div className="hotel-benefits-blue-card">
          <h3 className="hotel-benefits-title">
            La solution de désinfection Ozonewell pour les hôtels est bénéfique pour l'entreprise, les clients et les employés :
          </h3>
          
          <div className="hotel-benefits-grid">
            <ul className="hotel-list-check">
              <li>Sensation de tranquillité et de propreté pour le client.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Protège contre les symptômes d'allergie.</li>
              <li>Prévient et élimine les mauvaises odeurs.</li>
              <li>Améliorer l'expérience client et fidéliser.</li>
              <li>Protégez votre réputation et augmentez la rentabilité.</li>
            </ul>
            
            <div className="hotel-circle-frame">
               <img src={imgHotelAdvantage} alt="Qualité Ozonewell" className="hotel-circle-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelOzoneDetails;