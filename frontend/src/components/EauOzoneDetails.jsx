import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EauOzoneDetails.css';

// Importation de tes captures d'écran
import imgIndustriel from '../assets/photozon/industrie-agro.png';
import imgAgriculture from '../assets/photozon/eau-agriculture.png';
import imgHotellerie from '../assets/photozon/eau-hotellerie.png';
import imgPiscine from '../assets/photozon/eau-piscine.png';

const EauOzoneDetails = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="water-page-container">

      <h1 className="blue-highlight">Traitement de l'eau</h1>

      <div className="water-slogan-box">
        <h2 className="water-slogan-text">
          Investissez dans l'ozone et améliorez 
          la rentabilité de votre entreprise
        </h2>
      </div>

      {/* Grille 1 */}
      <div className="water-flex-row">
        <div className="water-card-unit">
          <div className="water-frame-square">
            <img src={imgIndustriel} alt="Eau industrielle" />
          </div>
          <div className="water-card-info">
            <h3>Eau ozonée : Usage industriel</h3>
            <p>Désinfection des <strong>aliments</strong>, des installations et des emballages. Traitement des eaux usées et purification.</p>
          </div>
        </div>

        <div className="water-card-unit">
          <div className="water-frame-square">
            <img src={imgAgriculture} alt="Eau agriculture" />
          </div>
          <div className="water-card-info">
            <h3>Eau ozonée pour l'agriculture</h3>
            <p>Traitement des cultures par <strong>irrigation et pulvérisation</strong>. Désinfection des sols agricoles.</p>
          </div>
        </div>
      </div>

      {/* Grille 2 */}
      <div className="water-flex-row">
        <div className="water-card-unit">
          <div className="water-frame-square">
            <img src={imgHotellerie} alt="Eau hôtellerie" />
          </div>
          <div className="water-card-info">
            <h3>Eau ozonée : Hôtellerie</h3>
            <p>Nettoyage et dégraissage des cuisines à <strong>l'eau ozonée</strong>. Désinfection des emballages et aliments.</p>
          </div>
        </div>

        <div className="water-card-unit">
          <div className="water-frame-square">
            <img src={imgPiscine} alt="Eau piscine" />
          </div>
          <div className="water-card-info">
            <h3>Traitement pour piscines et spas</h3>
            <p>Désinfection complète et <strong>élimination des odeurs</strong> dans les installations aquatiques.</p>
          </div>
        </div>
      </div>

      <div className="water-footer-section">
        <p>
          Ozonewell propose une <strong>solution de traitement de l'eau à l'ozone</strong>, un désinfectant puissant qui garantit un assainissement complet sans résidus chimiques.
        </p>
        <button className="water-btn-blue" onClick={handleContact}>
          DEMANDER UN DEVIS
        </button>
      </div>
    </div>
  );
};

export default EauOzoneDetails;