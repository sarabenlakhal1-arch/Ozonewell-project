import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SportOzoneDetails.css';

// Images existantes dans assets/photozon/
import imgSportHero from '../assets/photozon/sport1.png';
import imgSportDetails from '../assets/photozon/sport.jpeg';
import imgSportBenefit from '../assets/photozon/sport.jpeg';

const SportOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="sport-page-container">

      <h1 className="sport-main-title">
        Désinfection à l'ozone et filtres HEPA pour l'hygiène environnementale dans les salles de sport
      </h1>

      {/* Section 1: Image asymétrique et Slogan */}
      <div className="sport-section-flex">
        <div className="sport-frame-square">
          <img src={imgSportHero} alt="Désinfection Salle de Sport" />
        </div>
        
        <div className="sport-text-content">
          <h2 className="sport-slogan-blue">
            Environnement et matériel désinfectés pour fidéliser la clientèle et obtenir des recommandations
          </h2>
          <ul className="sport-top-list">
            <li>Les services d'hygiène environnementale d'<strong>Ozonewell</strong> préviennent la prolifération des <strong>virus et des bactéries pathogènes</strong>, ainsi que les <strong>mauvaises odeurs</strong>.</li>
            <li>Le confort des usagers est amélioré et la propagation des maladies est prévenue aussi bien dans les salles que dans les vestiaires.</li>
            <li>Les clients se sentiront plus à l'aise dans un environnement désinfecté et <strong>exempt d'odeurs désagréables</strong>.</li>
            <li>Une solution essentielle dans un contexte de pandémie de <strong>COVID-19</strong>.</li>
            <li><strong>Ozonewell</strong> propose un certificat de désinfection attestant de votre engagement envers la sécurité sanitaire.</li>
          </ul>
        </div>
      </div>

      <div className="sport-description-text">
        <p>
          La purification de l'air par filtre HEPA et la désinfection par ozone visent à promouvoir un <strong>environnement sûr pour la pratique sportive</strong>, en garantissant des espaces exempts de contagion (telles que la COVID-19 ou les champignons).
        </p>
        <p>
          Les centres sportifs sont des lieux où la qualité de l'air est souvent affectée négativement par les activités (cyclisme, musculation, cardio). Il est essentiel d'améliorer l'hygiène environnementale pour le <strong>bien-être et le confort général des clients</strong>.
        </p>

        <h3>Hygiène environnementale dans les salles de sport</h3>
        <p>
          L'activité physique intense génère de la transpiration, créant une <strong>atmosphère étouffante et des odeurs désagréables</strong>. Grâce aux services d'<strong>Ozonewell</strong>, les salles de sport peuvent proposer des espaces propres, créant des <strong>environnements sûrs et sains pour les clients et employés</strong>.
        </p>
      </div>

      <div className="sport-footer-action">
        <button className="sport-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

      {/* Section 2: Problèmes critiques avec habillage de l'image */}
      <div className="sport-problems-section">
        <h2 className="sport-section-title">
          Comment désinfecter les salles de sport ? Points critiques de la désinfection
        </h2>
        
        <div className="sport-wrap-container">
          <div className="sport-image-wrap-left">
            <div className="sport-frame-square small">
              <img src={imgSportDetails} alt="Vestiaires et hygiène" />
            </div>
          </div>

          <div className="sport-wrap-text">
            <p>
              Les espaces clos comme les <strong>vestiaires, sanitaires et salles de musculation</strong> sont sujets aux mauvaises odeurs et aux moisissures. Sans prise en charge, cela augmente le risque de transmission d'agents pathogènes et ternit l'<strong>image de l'établissement</strong>.
            </p>
            <p>
              Les <strong>vestiaires sont les points les plus problématiques</strong> : zones de forte fréquentation, humidité des douches et transpiration s'y accumulent. Les odeurs d'origine organique sont le signe de micro-organismes pathogènes.
            </p>

            <h3 className="sport-sub-title">Mauvaises odeurs dans les installations sportives</h3>
            <p>
              Les traitements utilisant des purificateurs d'air HEPA et l'ozone garantissent une <strong>solution à ce problème</strong>, liée à la perception du client et donc à la <strong>rentabilité de l'entreprise</strong>.
            </p>

            <h3 className="sport-sub-title">Services d'hygiène : purification HEPA, ozone…</h3>
            <p>
              <strong>Ozonewell</strong> propose un audit préliminaire et l'application du traitement le plus approprié. L'installation peut être <strong>continue, nocturne ou programmée</strong>, minimisant les risques d'infection.
            </p>
            <p>
              En plus de prévenir la <strong>grippe ou la COVID-19</strong>, ces mesures réduisent les symptômes allergiques. Cela réduit l'absentéisme et favorise une <strong>image positive des installations</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Cadre bleu des avantages */}
      <div className="sport-advantages-container">
        <div className="sport-advantages-box">
          <h3 className="sport-adv-title">
            La solution de désinfection Ozonewell pour les salles de sport est bénéfique pour l'entreprise, les clients et les employés :
          </h3>
          <div className="sport-adv-flex">
            <ul className="sport-check-list">
              <li>Sensation de tranquillité et de propreté pour le client.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Prévient les mauvaises odeurs : transpiration, salles de bains...</li>
              <li>Améliorer l'expérience client et fidéliser.</li>
              <li>Fidéliser la clientèle et générer des recommandations.</li>
              <li>Protégez votre bonne réputation.</li>
              <li>Développez votre marque et augmentez votre rentabilité.</li>
            </ul>
            <div className="sport-circle-frame">
              <img src={imgSportBenefit} alt="Engagement Qualité" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportOzoneDetails;
