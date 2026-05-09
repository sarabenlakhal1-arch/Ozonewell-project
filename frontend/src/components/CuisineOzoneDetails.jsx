import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CuisineOzoneDetails.css';

// Images disponibles dans assets/photozon/
import imgCuisineHero from '../assets/photozon/cuis1.png';
import imgCuisineAir from '../assets/photozon/cuis2.png';

const CuisineOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="cuisine-page-container">

      <h1 className="cuisine-main-title">Installation d'un générateur d'ozone pour le secteur de l'hôtellerie-restauration</h1>

      {/* SECTION 1 : EAU OZONÉE */}
      <div className="cuisine-section-flex">
        <div className="cuisine-frame-square">
          <img src={imgCuisineHero} alt="Générateur Ozone Cuisine" />
        </div>
        
        <div className="cuisine-text-content">
          <h2 className="cuisine-subtitle-blue">Générateur d'ozone pour cuisines de bars et restaurants</h2>
          <p>
            L'installation de ce générateur d'ozone pour eau <strong>Ozonewell</strong> est rapide et facile. Il se raccorde directement à l'arrivée d'eau, 
            fournissant un robinet d'eau ozonée désinfectante et dégraissante disponible partout.
          </p>
          <p>
            Ce système mesure en temps réel la capacité de désinfection, garantissant une <strong>efficacité optimale</strong>. 
            Contrairement aux produits chimiques, il ne dépend pas du dosage manuel du professionnel.
          </p>
          <ul className="cuisine-mini-list">
            <li>Sécurité au travail accrue (pas d'irritants chimiques).</li>
            <li>Réduction du temps de nettoyage et optimisation de la productivité.</li>
            <li>Économies importantes : moins de produits chimiques et d'eau chaude.</li>
          </ul>
        </div>
      </div>

      {/* SECTION 2 : AIR ET SYNERGIE */}
      <div className="cuisine-description-block">
        <h2 className="cuisine-subtitle-blue">Solutions synergiques pour l'air des cuisines et chambres froides</h2>
        <div className="cuisine-info-grid">
           <div className="cuisine-info-box">
              <p>
                Nos générateurs constituent une mesure d'hygiène environnementale qui améliore la sécurité des aliments. 
                L'ozone désinfecte les espaces et surfaces <strong>sans intervention humaine</strong>.
              </p>
              <p>
                Étant un gaz, il sature la pièce pour purifier les zones difficiles d'accès. 
                L'application est surveillée par des systèmes de contrôle automatisés pour garantir une sécurité totale des personnes.
              </p>
              <p className="highlight-text">
                Après application, l'ozone se décompose naturellement en oxygène : aucun résidu à éliminer !
              </p>
           </div>
           <div className="cuisine-frame-square">
              <img src={imgCuisineAir} alt="Désinfection Air Cuisine" />
           </div>
        </div>
      </div>

      <div className="cuisine-footer">
        <button className="cuisine-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS 
        </button>
      </div>

      {/* SECTION AVANTAGES */}
      <div className="cuisine-advantages-section">
        <div className="cuisine-advantages-card">
          <h3 className="cuisine-adv-main-title">
            L'eau ozonée Ozonewell : l'alternative la plus rentable pour le secteur Horeca
          </h3>
          
          <div className="cuisine-adv-grid">
            {/* Colonne 1 */}
            <div className="adv-col">
              <h4>Sécurité alimentaire accrue</h4>
              <ul>
                <li>Il est enregistrable</li>
                <li>Réduit les erreurs humaines</li>
                <li>Pas de dosage nécessaire</li>
                <li>Aucun résidu chimique</li>
                <li>Améliore la conservation</li>
              </ul>

              <h4>Sécurité d'emploi</h4>
              <ul>
                <li>Évitez les accidents</li>
                <li>Améliore l'expérience employé</li>
                <li>Temps de nettoyage réduits</li>
              </ul>
            </div>

            {/* Colonne 2 */}
            <div className="adv-col">
              <h4>Efficacité & Matériaux</h4>
              <ul>
                <li>Compatibilité divers matériaux</li>
                <li>Économies d'énergie (eau froide)</li>
              </ul>

              <h4>Réduction des produits chimiques</h4>
              <ul>
                <li>Achat et gestion simplifiés</li>
                <li>Moins de problèmes de santé</li>
                <li>Réduction des déchets polluants</li>
                <li>Durabilité environnementale</li>
              </ul>
              <p className="guarantee-tag">Désinfection garantie selon les normes UNE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisineOzoneDetails;
