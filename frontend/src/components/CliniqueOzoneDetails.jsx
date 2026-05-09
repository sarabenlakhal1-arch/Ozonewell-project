import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CliniqueOzoneDetails.css';

// Images disponibles dans assets/photozon/
import imgCliniqueHero from '../assets/photozon/sante.jpeg';
import imgCliniqueSante from '../assets/photozon/clinic.png';

const CliniqueOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="clinique-page-container">

      <h1 className="clinique-main-title">
        Désinfection à l'ozone et filtres HEPA pour l'hygiène environnementale dans les cliniques et les hôpitaux
      </h1>

      <div className="clinique-section-flex">
        <div className="clinique-frame-square">
          <img src={imgCliniqueHero} alt="Hygiène Hôpital" />
        </div>
        
        <div className="clinique-text-content">
          <h2 className="clinique-slogan-blue">
            L'hygiène environnementale rend les établissements de santé plus confortables, plus sains et plus sûrs.
          </h2>
          <p className="clinique-intro-bold">
            Polycliniques et centres médicaux, hôpitaux, cliniques dentaires, cliniques ambulatoires et centres de santé, podologie, physiothérapie, thérapies alternatives…
          </p>
          <ul className="clinique-list">
            <li><strong>Les solutions Ozonewell empêchent la prolifération des virus et des bactéries pathogènes</strong>, ainsi que les mauvaises odeurs dans les espaces clos.</li>
            <li><strong>La désinfection à l'ozone et la purification par filtres HEPA</strong> assainissent l'environnement intérieur et réduisent la charge microbienne.</li>
            <li><strong>Un outil essentiel</strong> dans le contexte de prévention des infections et des pandémies.</li>
            <li><strong>Certificat d'hygiène environnementale</strong> attestant de votre engagement envers la santé et la sécurité.</li>
          </ul>
        </div>
      </div>

      <div className="clinique-description-box">
        <p>
          Les hôpitaux, les cliniques et les centres médicaux sont des lieux où la qualité de l'air intérieur est essentielle à la santé des patients et du personnel. 
          Ozonewell propose la conception et la maintenance de solutions personnalisées, incluant notamment des <strong>purificateurs d'air HEPA de pointe, des lampes UV et la désinfection à l'ozone de l'air et des surfaces</strong>. 
          Nos solutions contribuent à créer des environnements intérieurs plus confortables et plus sains.
        </p>
      </div>

      <div className="clinique-footer">
        <button className="clinique-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* SECTION AVANTAGES (Bleue) */}
      <div className="clinique-advantages-section">
        <div className="clinique-advantages-card">
          <h3 className="clinique-adv-title">
            La solution d'hygiène environnementale d'Ozonewell est bénéfique pour le centre, les patients et les professionnels :
          </h3>
          
          <div className="clinique-adv-content">
            <ul className="clinique-adv-list">
              <li>Elle procure un sentiment de calme aussi bien au patient qu'au professionnel.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Cela améliore l'expérience du patient.</li>
              <li>Fidéliser la clientèle et générer des recommandations.</li>
              <li>Elle protège la bonne réputation et renforce la marque.</li>
            </ul>
            
            <div className="clinique-image-circle-container">
               <img src={imgCliniqueSante} alt="Santé environnementale" className="clinique-image-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CliniqueOzoneDetails;
