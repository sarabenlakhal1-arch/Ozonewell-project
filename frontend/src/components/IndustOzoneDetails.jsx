import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IndustOzoneDetails.css';

// Images disponibles dans assets/photozon/
import imgIndustrieHero from '../assets/photozon/industrie-agro1.png'; 
import imgIndustrieProcess from '../assets/photozon/industrie-agro.png';

const IndustOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="indust-page-container">

      <h1 className="indust-main-title">Désinfection à l'ozone pour l'industrie agroalimentaire</h1>

      {/* Section 1: Slogan et Liste */}
      <div className="indust-section-flex">
        <div className="indust-frame-square">
          <img src={imgIndustrieHero} alt="Conception Ozone" />
        </div>
        
        <div className="indust-text-content">
          <h2 className="indust-slogan-blue">
            Ozone sur mesure : efficacité et zéro déchet. <br />
            <span>Conception et fabrication réalisées en interne</span>
          </h2>
          <ul className="indust-list">
            <li>Générateurs d'ozone industriels pour systèmes à air, à eau et mixtes.</li>
            <li>Avec un historique de traitement de désinfection à l'ozone.</li>
            <li>Contrôle à distance via le web.</li>
            <li>Possibilité d'<strong>automatisation</strong>, sans opérateur manuel.</li>
            <li>Configurable : production d'ozone, intégrations...</li>
            <li>Efficacité de désinfection certifiée selon les normes UNE.</li>
            <li>Conseils, vérifications et contrôle technique de l'installation.</li>
            <li>ASP est une entreprise spécialisée dans l'ozone, agréée dans l'UE.</li>
          </ul>
        </div>
      </div>

      <div className="indust-separator"></div>

      {/* Section 2: Rentabilité et Détails Techniques */}
      <div className="indust-section-center">
        <h2 className="indust-slogan-large">
          Désinfection et hygiène à l'ozone pour accroître la rentabilité de l'industrie agroalimentaire ; sans résidus
        </h2>
        
        <div className="indust-info-grid">
           <div className="indust-info-box">
              <h3>Désinfection et assainissement à l'eau ozonée</h3>
              <p>• Désinfection et nettoyage des <strong>machines, canalisations</strong>, surfaces de manipulation, <strong>conteneurs</strong> et réservoirs de stockage.</p>
              <p>• Lavage et désinfection des <strong>aliments autorisés</strong> (fruits, légumes, etc.).</p>
              <p>• Nettoyage et dégraissage des cuisines industrielles et de restauration.</p>
           </div>

           <div className="indust-frame-square">
              <img src={imgIndustrieProcess} alt="Process industriel" />
           </div>
        </div>

        <div className="indust-info-box air-treatment">
           <h3>Traitement de l'air à l'ozone</h3>
           <p>• Désinfection et/ou purification de l'air intérieur (<strong>salles de traitement, chambres froides, cuisines, etc.</strong>).</p>
           <p>• Désinfection <strong>automatisée</strong>, sans intervention humaine ni exposition des opérateurs manuels.</p>
        </div>
      </div>

      <div className="indust-footer">
        <button className="indust-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

            {/* NOUVELLE PARTIE : AVANTAGES (Basée sur ta photo) */}
      <div className="indust-advantages-container">
        <div className="indust-advantages-box">
          <h3>Principaux avantages de l'ozone</h3>
          <ul>
            <li>Plus d'efficacité</li>
            <li>Plus de sécurité</li>
            <li>Plus économique</li>
            <li>Plus respectueux de l'environnement</li>
            <li>Aucun résidu chimique</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndustOzoneDetails;
