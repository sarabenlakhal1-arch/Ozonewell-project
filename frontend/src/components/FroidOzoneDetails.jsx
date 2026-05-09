import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FroidOzoneDetails.css';

// Images existantes dans assets/photozon/
import imgChambreFroideHero from '../assets/photozon/conserv.png';
import imgAlimentaireCercle from '../assets/photozon/chambre.png';

const FroidOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="froid-page-container">

      <h1 className="froid-main-title">
        Utilisation de l'ozone dans les chambres froides <br />
        <span className="froid-sub-main">L'ozone pour les chambres froides destinées au stockage des fruits et légumes, de la viande et du poisson : qualité et durabilité</span>
      </h1>

      <div className="froid-intro-section">
        {/* L'image qui flotte à gauche */}
        <div className="froid-image-float-left">
          <div className="froid-frame-square">
            <img src={imgChambreFroideHero} alt="Chambre Froide Ozonewell" />
          </div>
        </div>

        <div className="froid-intro-text">
          <h2 className="froid-slogan-blue">
            Amélioration de la conservation des aliments par ozonation des chambres froides : désinfection et désodorisation
          </h2>
          
          <p>
            L'utilisation du froid est essentielle dans l'industrie agroalimentaire et le secteur de l'hôtellerie-restauration. La grande valeur des chambres froides réside dans leur capacité à préserver leurs <strong>qualités organoleptiques et nutritionnelles</strong>, et empêchent les enzymes et les micro-organismes de les altérer.
          </p>
          <p>
            Cependant, les basses températures n'empêchent pas totalement la prolifération des champignons et des bactéries. Cette contamination biologique incontrôlée réduit la durée de conservation et la viabilité commerciale.
          </p>
          <p>
            Grâce à ses propriétés désinfectantes, l'ozone améliore la capacité de conservation et augmente la <strong>sécurité alimentaire et la rentabilité</strong>.
          </p>
          <p>
            Investir dans des systèmes de générateurs d'ozone gazeux <strong>Ozonewell</strong> a un impact direct sur la <strong>réduction des marchandises détériorées et jetées</strong>, tout en améliorant la présentation des produits.
          </p>
        </div>
      </div>

      <div className="froid-center-btn">
        <button className="froid-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      <div className="froid-details-content">
        <h2 className="froid-section-header">Pourquoi utiliser l'ozone dans les chambres froides ? Avantages</h2>
        <p>
          L'application d'<strong>ozone</strong> est efficace pour le traitement microbiologique de l'air, combat les virus, bactéries et moisissures sur toutes les surfaces et <strong>contrôle l'éthylène</strong> produit par les fruits et légumes.
        </p>
        <p>
          Une chambre froide ozonée permet aux aliments de conserver leur <strong>poids initial</strong> et un aspect optimal. L'ozone ne génère <strong>aucun type de résidu chimique</strong> car il se décompose naturellement en oxygène.
        </p>

        <h3 className="froid-sub-title">Propriétés biocides</h3>
        <p>
          L'ozone gazeux combat les micro-organismes grâce à son <strong>fort pouvoir de pénétration</strong>. Il élimine tout risque de contamination alimentaire, y compris la <strong>contamination croisée</strong>.
        </p>

        <h3 className="froid-sub-title">Propriétés désodorisantes</h3>
        <p>
          L'ozone inhibe directement les molécules responsables des odeurs. Il prévient la <strong>transmission d'odeurs</strong> entre différents types de marchandises stockées dans la même chambre.
        </p>

        <h2 className="froid-section-header">Applications dans l'industrie agroalimentaire</h2>
        
        <div className="froid-app-grid">
          <div className="froid-app-item">
            <h4>Produits carnés</h4>
            <p>L'ozonisation garantit l'<strong>élimination des germes et moisissures</strong> (Listeria, Salmonellose, E. coli). La viande est <strong>plus tendre, plus saine et plus savoureuse</strong>.</p>
          </div>
          <div className="froid-app-item">
            <h4>Poisson</h4>
            <p>L'ozone élimine les micro-organismes à la surface du poisson, garantissant la <strong>sécurité alimentaire</strong> et augmentant significativement la durée de conservation.</p>
          </div>
          <div className="froid-app-item">
            <h4>Fruits et légumes</h4>
            <p>L'ozone <strong>oxyde naturellement l'éthylène</strong>, l'hormone responsable de la maturation, ralentissant ainsi le mûrissement naturel des produits post-récolte.</p>
          </div>
        </div>

        <h2 className="froid-section-header">Quels services Ozonewell propose-t-elle ?</h2>
        <p>
            <strong>Ozonewell</strong> conçoit et fabrique ses propres générateurs, s'adaptant aux besoins des clients et proposant des systèmes personnalisés qui répondent aux normes européennes.
        </p>
      </div>

      {/* Section Cadre Bleu */}
      <div className="froid-blue-card">
        <h3 className="froid-card-title">
          La solution de désinfection Ozonewell pour les chambres froides est bénéfique pour l'entreprise, les clients et les employés :
        </h3>
        <div className="froid-card-flex">
          <ul className="froid-check-list">
            <li>Prolonge la durée de conservation des produits.</li>
            <li>Évite les infections et contaminations croisées.</li>
            <li>Élimine les odeurs et prévient le mélange des saveurs.</li>
            <li>Réduit les pertes économiques dues aux produits jetés.</li>
            <li>Ne laisse aucun résidu chimique sur les aliments.</li>
            <li>Garantit un environnement de travail plus sain.</li>
          </ul>
          <div className="froid-circle-frame">
            <img src={imgAlimentaireCercle} alt="Sécurité Alimentaire" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FroidOzoneDetails;
