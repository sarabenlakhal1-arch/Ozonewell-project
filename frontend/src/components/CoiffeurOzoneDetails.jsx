import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoiffeurOzoneDetails.css';

// Images existantes dans assets/photozon/
import imgCoiffeurHero from '../assets/photozon/coiffeur.jpeg';
import imgCoiffeurTools from '../assets/photozon/saloncoif.png';
import imgCoiffeurBenefit from '../assets/photozon/coiffeur.png';

const CoiffeurOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="salon-page-container">

      <h1 className="salon-main-title">
        Désinfection à l'ozone et filtres HEPA pour l'hygiène environnementale dans les salons de coiffure et les centres de beauté
      </h1>

      {/* Section 1: Image asymétrique et Slogan */}
      <div className="salon-header-flex">
        <div className="salon-frame-square">
          <img src={imgCoiffeurHero} alt="Désinfection Salon de Coiffure" />
        </div>
        
        <div className="salon-header-text">
          <h2 className="salon-slogan-blue">
            Optez pour un environnement plus confortable et plus sain dans votre établissement : exempt de contagion, de mauvaises odeurs et de produits chimiques toxiques.
          </h2>
          <ul className="salon-dot-list">
            <li>La solution d'hygiène environnementale d'<strong>Ozonewell</strong>, avec ses purificateurs HEPA et générateurs d'ozone, optimise la qualité de l'air intérieur.</li>
            <li>Elle élimine la <strong>contamination chimique et biologique</strong>, offrant un environnement sûr aux professionnels et aux clients.</li>
            <li>Les risques sanitaires sont évités, la <strong>fidélité de la clientèle</strong> est accrue et la rentabilité est assurée.</li>
            <li><strong>Ozonewell</strong> fournit un certificat d'hygiène environnementale attestant de votre engagement sécurité.</li>
            <li>Un outil indispensable contre la pandémie de <strong>COVID-19</strong>.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Premier Paragraphe avec habillage image float */}
      <div className="salon-intro-section">
        <div className="salon-image-float-left">
            <div className="salon-frame-square small">
                <img src={imgCoiffeurTools} alt="Stérilisation instruments" />
            </div>
        </div>

        <div className="salon-intro-text">
          <p>
            Pour les salons de coiffure et d'esthétique, il est essentiel que l'environnement et les instruments soient désinfectés pour la <strong>santé des professionnels et des clients</strong>.
          </p>
          <p>
            Ces établissements font face à un double problème : l'air pollué par les <strong>produits chimiques</strong> (laques, teintures) et la forte fréquentation. De plus, le <strong>partage des instruments</strong> (peignes, ciseaux) favorise la transmission de micro-organismes.
          </p>
          <p>
            La solution <strong>Ozonewell</strong> combat ces problèmes grâce à des systèmes synergiques garantissant une <strong>qualité d'air optimale et un environnement sain</strong>.
          </p>
        </div>
      </div>

      <div className="salon-center-btn">
        <button className="salon-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* Section 3: Détails Techniques */}
      <div className="salon-details-content">
        <div className="salon-detail-block">
          <p>
            L'air dans ces centres contient des contaminants divers : des particules solides aux <strong>gaz toxiques</strong>. Une mauvaise qualité de l'air représente un risque (maux de tête, allergies, problèmes respiratoires) pour les coiffeurs et esthéticiennes exposés aux produits capillaires.
          </p>
          <p>
            L’utilisation collective d’instruments (peignes, serviettes, ciseaux) peut propager des <strong>poux, la gale, des champignons ou des bactéries</strong>.
          </p>
        </div>

        <h3 className="salon-sub-title">Les avantages de l'ozone dans les salons de coiffure</h3>
        <p>
          Le traitement à l'<strong>ozone environnemental</strong> empêche la prolifération des micro-organismes pathogènes et élimine les mauvaises odeurs. La <strong>stérilisation des instruments à l'ozone</strong> garantit que vos ciseaux et brosses sont parfaitement désinfectés.
        </p>

        <h3 className="salon-sub-title">Avantages de la purification HEPA</h3>
        <p>
          Les purificateurs <strong>Ozonewell</strong> éliminent jusqu'à <strong>99,97 % des particules</strong>, y compris le formaldéhyde. Ils filtrent les virus, bactéries et substances chimiques pour créer un espace intérieur sain.
        </p>

        <h3 className="salon-sub-title">Solution d'hygiène environnementale Ozonewell</h3>
        <p>
          Après l'installation, nous effectuons une <strong>maintenance technique</strong> pour garantir une efficacité et une sécurité maximales.
        </p>
      </div>

      {/* Section 4: Cadre Bleu Avantages */}
      <div className="salon-blue-card">
        <h3 className="salon-card-title">
          La solution de désinfection Ozonewell pour les salons de coiffure est bénéfique tant pour les professionnels que pour les clients :
        </h3>
        <div className="salon-card-flex">
          <ul className="salon-check-list">
            <li>Projette une image positive et inspire la tranquillité.</li>
            <li>Décontamine et élimine les mauvaises odeurs.</li>
            <li>Améliore le bien-être et la santé au sein de l'établissement.</li>
            <li>Évitez les infections (y compris la COVID-19).</li>
            <li>Améliore l'expérience client.</li>
            <li>Fidélise la clientèle et génère des recommandations.</li>
          </ul>
          <div className="salon-circle-frame">
            <img src={imgCoiffeurBenefit} alt="Satisfaction Client" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoiffeurOzoneDetails;
