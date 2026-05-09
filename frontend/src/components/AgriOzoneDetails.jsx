import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AgriOzoneDetails.css';

// Images disponibles dans assets/photozon/
import imgAgriHero from '../assets/photozon/agri1.png';
import imgAgriCulture from '../assets/photozon/agri2.png';

const AgriOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="agri-page-container">

      <h1 className="agri-main-title">Ozone pour l'agriculture : plein champ, hydroponie, semis et après-récolte</h1>

      <div className="agri-section-flex">
        <div className="agri-frame-square">
          <img src={imgAgriHero} alt="Ozone Agriculture" />
        </div>
        
        <div className="agri-text-content">
          <h2 className="agri-slogan-blue">
            L'alternative zéro déchet pour améliorer la production, réduire les coûts et prévenir les maladies.
          </h2>
          <ul className="agri-list">
            <li>Les systèmes à ozone ASP augmentent la <strong>rentabilité</strong> des exploitations agricoles.</li>
            <li>Ils préviennent et traitent les maladies dans tous les types de cultures.</li>
            <li>Ils agissent comme un <strong>biostimulant fonctionnel indirect</strong>, protégeant la santé.</li>
            <li>L'utilisation de l'ozone ne génère <strong>pas de déchets chimiques</strong> et réduit l'usage d'engrais.</li>
            <li>Systèmes sur mesure avec garantie d'efficacité grâce à un suivi technique.</li>
          </ul>
        </div>
      </div>

      <div className="agri-description-block">
        <p>
          L'ozone est un désinfectant naturel efficace qui élimine les agents pathogènes sans laisser de résidus chimiques, 
          car il se décompose naturellement en oxygène. Cette propriété en fait une alternative plus <strong>économique et durable</strong>.
        </p>
        
        <div className="agri-info-grid">
           <div className="agri-info-box">
              <p>Les systèmes à l'ozone d'ASP se distinguent par leur double action : un puissant effet <strong>antimicrobien</strong> et une capacité à agir comme <strong>biostimulant</strong>.</p>
              <p>L'application d'ozone améliore la santé des cultures en renforçant la résistance au stress et en favorisant un <strong>enracinement plus fort</strong>.</p>
              <p> 
                 L'application d'ozone, selon une méthodologie appropriée, améliore la santé des cultures en prévenant et en traitant les maladies ; en outre, elle renforce la résistance des cultures au stress, améliore l'efficacité de l'absorption des nutriments et favorise <strong>une croissance plus vigoureuse et un enracinement plus fort</strong>.
              </p>
              <p>
                Par conséquent, l'utilisation de l'ozone en agriculture se traduit par une amélioration notable de <strong>la production et de la rentabilité de l'exploitation.</strong>

              </p>
              <p>
                Il convient de noter que l'ozone s'est avéré être <strong>une alternative très efficace</strong> pour prévenir et contrôler <strong>les maladies des racines et des tiges ( Phytophthora , Fusarium , Pythium , Rhizoctonia... )</strong> et <strong>les maladies aériennes ( Mycosphaerella , Botrytis , Sclerotinia, Mildiou , Alternaria, Oïdium ... )</strong>.

              </p>
              <p>


                Après récolte, les systèmes à ozone ASP servent au lavage et à <strong>la désinfection des fruits et légumes</strong> sans laisser de résidus chimiques (y compris dans les systèmes de refroidissement par eau), ainsi qu'à l'amélioration de leur conservation et au contrôle de l'éthylène en chambre froide. Ils sont également utilisés pour <strong>la désinfection des salles blanches, des emballages, des machines, etc</strong>.
              </p>
           </div>
           <div className="agri-frame-square">
              <img src={imgAgriCulture} alt="Culture et Ozone" />
           </div>
        </div>
      </div>

      <div className="agri-footer">
        <button className="agri-btn-blue" onClick={() => navigate('/contact')}>
          CONTACTER UN EXPERT
        </button>
      </div>

      {/* SECTION AVANTAGES */}
      <div className="agri-advantages-section">
        <div className="agri-advantages-card">
          <h3>Avantages des systèmes à ozone</h3>
          
          <div className="adv-group">
            <h4>Agriculture (irrigation et traitements) :</h4>
            <ul>
              <li>Évitez les maladies</li>
              <li>Ils améliorent la production</li>
              <li>Économies de coûts</li>
            </ul>
          </div>

          <div className="adv-group">
            <h4>Après la récolte (stockage, lavage...) :</h4>
            <ul>
              <li>Meilleure préservation</li>
              <li>Ils contrôlent l'éthylène</li>
              <li>Ils désinfectent et assainissent</li>
              <li>Aucun résidu chimique</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriOzoneDetails;
