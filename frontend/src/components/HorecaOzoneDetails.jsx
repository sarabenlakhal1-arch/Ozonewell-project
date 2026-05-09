import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HorecaOzoneDetails.css';

// Images disponibles dans assets/photozon/
import imgHorecaAir from '../assets/photozon/rest.png';
import imgHorecaFood from '../assets/photozon/cuisine.jpeg';
import imgHorecaAmbience from '../assets/photozon/rest.png';
import imgHorecaSalon from '../assets/photozon/rest.png';
import imgHorecaToilettes from '../assets/photozon/eau-hotellerie.png';
import imgHorecaCuisine from '../assets/photozon/cuisine.jpeg';

const HorecaOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="horeca-page-container">

      <h1 className="horeca-main-title">
        Hygiène environnementale et alimentaire, purificateurs d'air à ozone et à filtres HEPA pour le secteur HORECA
      </h1>

      <div className="horeca-intro-section">
        <h2 className="horeca-slogan">
          Démarquez-vous de la concurrence et renforcez les bonnes performances de l'entreprise : une rentabilité accrue
        </h2>
        
        <ul className="horeca-main-list">
          <li>Les solutions d'hygiène environnementale d'<strong>Ozonewell</strong> pour le secteur de l'hôtellerie garantissent une qualité d'air intérieur optimale et offrent un espace clos sain et sans odeur.</li>
          <li>La purification de l'air et la désinfection à l'ozone préviennent les infections, améliorent l'expérience client et la qualité de vie au travail.</li>
          <li>Notre certificat d'hygiène, affiché dans votre établissement, inspire confiance et véhicule une excellente image de marque.</li>
          <li>Nous proposons des services d'hygiène alimentaire complémentaires pour garantir la sécurité et la qualité de vos produits.</li>
          <li>L'hygiène environnementale et alimentaire accroît directement la rentabilité de votre établissement hôtelier.</li>
        </ul>
      </div>

      {/* CARTES CÔTE À CÔTE */}
      <div className="horeca-cards-flex">
        <div className="horeca-service-card">
          <div className="horeca-img-frame">
            <img src={imgHorecaAir} alt="Traitement de l'air" />
          </div>
          <h3>Traitement de l'air - Hygiène environnementale</h3>
        </div>

        <div className="horeca-service-card">
          <div className="horeca-img-frame">
            <img src={imgHorecaFood} alt="Hygiène alimentaire" />
          </div>
          <h3>Désinfection et nettoyage - Hygiène alimentaire</h3>
        </div>
      </div>

      <div className="horeca-action">
        <button className="horeca-btn-quote" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* NOUVELLE SECTION : PROBLÈMES COURANTS */}
      <div className="horeca-problems-container">
        <h2 className="horeca-problems-main-title">
          Problèmes courants de qualité de l'air intérieur dans l'industrie hôtelière
        </h2>
        <p className="horeca-problems-intro">
          Dans le secteur de la restauration, diverses pratiques peuvent favoriser la contamination microbiologique et chimique, 
          ainsi que la présence d'odeurs désagréables à toutes les étapes du processus :
        </p>

        {/* Bloc 1 : Salons et Salles à manger */}
        <div className="horeca-problem-row">
          <div className="horeca-problem-image">
            <div className="frame-350-10px">
                <img src={imgHorecaSalon} alt="Salon restaurant" />
            </div>
          </div>
          <div className="horeca-problem-text">
            <h3>Salons et salles à manger des restaurants et bars</h3>
            <p>
              Les salles à manger sont des espaces clos où les gens <strong>se rassemblent et circulent</strong>, consomment des aliments et transpirent. 
              Cela compromet fortement la qualité de l'air et l'hygiène, ce qui nuit au bien-être et augmente le risque de contagion.
            </p>
          </div>
        </div>

        {/* Bloc 2 : Toilettes */}
        <div className="horeca-problem-row reverse">
          <div className="horeca-problem-text">
            <h3>Toilettes du restaurant</h3>
            <p>
              Points critiques pour la désinfection. L'humidité et la mauvaise ventilation créent des <strong>odeurs désagréables</strong> qui imprègnent souvent la salle. 
              Les traitements à l'<strong>ozone</strong> sont essentiels pour garantir un environnement sain et une bonne image de marque.
            </p>
          </div>
          <div className="horeca-problem-image">
            <div className="frame-350-10px">
                <img src={imgHorecaToilettes} alt="Toilettes restaurant" />
            </div>
          </div>
        </div>

        {/* Bloc 3 : Cuisines */}
        <div className="horeca-problem-row">
          <div className="horeca-problem-image">
            <div className="frame-350-10px">
                <img src={imgHorecaCuisine} alt="Cuisine professionnelle" />
            </div>
          </div>
          <div className="horeca-problem-text">
            <h3>Cuisines de restaurant : Hygiène environnementale</h3>
            <p>
              La manipulation d'aliments et l'utilisation de poubelles génèrent des odeurs persistantes et des risques de <strong>contamination microbiologique</strong>. 
              Un traitement approprié à l'<strong>ozone</strong> garantit la sécurité alimentaire et le confort des employés.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION AVANTAGES (BANDEAU BLEU) */}
      <div className="horeca-benefits-section">
        <div className="horeca-benefits-card">
          <h3 className="horeca-benefits-header">
            La solution Ozonewell pour le secteur de l'hôtellerie est bénéfique pour l'entreprise, les clients et les employés :
          </h3>
          
          <div className="horeca-benefits-layout">
            <ul className="horeca-check-list">
              <li>Elle procure au client une sensation de tranquillité et de propreté.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Il empêche les mauvaises odeurs et leur imprégnation dans les vêtements.</li>
              <li>Améliorer l'expérience client et fidéliser la clientèle.</li>
              <li>Elle renforce l'hygiène et la sécurité alimentaire.</li>
              <li>Protégez votre bonne réputation et développez votre marque.</li>
            </ul>
            
            <div className="horeca-circle-img-container">
              <img src={imgHorecaAmbience} alt="Ambiance Restaurant" className="horeca-circle-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorecaOzoneDetails;
