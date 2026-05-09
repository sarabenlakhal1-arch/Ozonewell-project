import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EcoleOzoneDetails.css';

// Images existantes dans assets/photozon/
import imgSchoolHero from '../assets/photozon/ecol.png';
import imgSchoolSide from '../assets/photozon/school.jpeg';
import imgSchoolBenefit from '../assets/photozon/matern.png';

const EcoleOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="school-page-container">

      <h1 className="school-main-title">
        Désinfection à l'ozone et filtres HEPA pour l'hygiène environnementale dans les établissements scolaires : écoles, crèches et collèges
      </h1>

      {/* Section 1: Image à gauche et Slogan/Tirets à droite */}
      <div className="school-section-flex">
        <div className="school-frame-square">
          <img src={imgSchoolHero} alt="Environnement scolaire sain" />
        </div>
        
        <div className="school-text-content">
          <h2 className="school-slogan-blue">
            Souhaitez-vous que votre école soit un environnement sûr et sain ? <br />
            <span>Voulez-vous éviter les plaintes et les inquiétudes des parents ?</span>
          </h2>
          <ul className="school-top-list">
            <li>Les services d'hygiène environnementale d'<strong>Ozonewell</strong> garantissent la purification de l'air et la désinfection des espaces intérieurs et des surfaces dans les établissements d'enseignement.</li>
            <li>Investir dans des mesures d'hygiène environnementale a un impact sur le bien-être des enseignants et des élèves, prévient les infections et assure le bon fonctionnement de l'établissement.</li>
            <li>La purification et la désinfection de l'air sont des outils indispensables dans le contexte actuel pour assurer une sécurité maximale.</li>
          </ul>
        </div>
      </div>

      <div className="school-separator"></div>

      {/* Section 2: Paragraphe préventif */}
      <div className="school-prevention-block">
        <div className="prevention-text">
          <p>
            Les établissements d'enseignement sont des lieux où la <strong>qualité de l'air intérieur est très importante</strong>, car ils abritent de petits espaces clos où circulent de nombreux individus : élèves, enseignants, assistants, etc.
          </p>
          <p>
            La <strong>prévention des infections et des symptômes allergiques</strong>, ainsi que la promotion du bien-être et de la sécurité grâce aux solutions d'hygiène environnementale, ont un impact positif sur l'image du centre éducatif.
          </p>
        </div>
      </div>

      <div className="school-footer-btn">
        <button className="school-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* Section 3: Détails techniques avec photo à côté */}
      <div className="school-details-grid">
        <div className="school-details-text">
          <h2 className="school-section-header">
            Désinfection à l'ozone et purification de l'air par filtres HEPA dans les établissements scolaires
          </h2>
          <p>Les établissements d'enseignement sont divers et leurs besoins en matière de purification de l'air par <strong>filtres HEPA</strong> et de désinfection à l'<strong>ozone</strong> sont différents :</p>

          <div className="school-sub-item">
            <h3>Désinfection et purification dans les écoles maternelles</h3>
            <p>Les bébés ont un <strong>système immunitaire immature</strong>, ce qui les rend vulnérables. Malgré un nettoyage rigoureux, les salles de classe sont des lieux où les enfants dorment, mangent et portent des jouets à la bouche.</p>
            <p>Grâce à la technologie <strong>Ozonewell</strong>, les établissements offrent aux familles une plus grande sécurité et <strong>moins d'infections</strong>.</p>
          </div>

          <div className="school-sub-item">
            <h3>Désinfection et purification dans les écoles</h3>
            <p>Les écoles comportent des zones sensibles : toilettes, vestiaires, gymnases et cantines. Le service d'<strong>Ozonewell</strong> permet l'<strong>élimination des mauvaises odeurs</strong> et la désinfection pour un environnement exempt de particules contaminants.</p>
          </div>

          <div className="school-sub-item">
            <h3>Désinfection et purification dans les académies</h3>
            <p>Les salles de classe sont souvent de petits espaces clos avec peu de ventilation naturelle. Grâce à l'ozonation et à la filtration HEPA, nous éliminons les <strong>micro-organismes pathogènes et les allergènes</strong>.</p>
          </div>
        </div>

        <div className="school-side-photo">
          <div className="school-frame-square small-frame">
            <img src={imgSchoolSide} alt="Purification air école" />
          </div>
        </div>
      </div>

      {/* Section Avantages (Le cadre bleu) */}
      <div className="school-advantages-container">
        <div className="school-advantages-box">
          <h3>La solution d'hygiène Ozonewell pour les établissements scolaires est bénéfique pour l'entreprise, la communauté et les employés :</h3>
          <div className="school-adv-flex">
            <ul className="school-check-list">
              <li>Apporte la tranquillité d'esprit aux parents.</li>
              <li>Favorise la concentration et la productivité.</li>
              <li>Évite les infections (y compris la COVID-19).</li>
              <li>Prévient et élimine les mauvaises odeurs.</li>
              <li>Fidéliser la clientèle et générer des recommandations.</li>
              <li>Renforce le sentiment d'appartenance et l'image de marque.</li>
              <li>Protège votre bonne réputation et augmente la rentabilité.</li>
            </ul>
            <div className="school-circle-frame">
              <img src={imgSchoolBenefit} alt="Santé enfants" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoleOzoneDetails;
