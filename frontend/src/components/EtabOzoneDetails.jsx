import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EtabOzoneDetails.css';

// Importation de tes captures (place-les dans src/assets/photozon/)
import imgEtabHero from '../assets/photozon/travail.jpeg'; 
import imgEtabEnvironnement from '../assets/photozon/etablissement.png';
import imgBavet from '../assets/photozon/bavet.png';

const EtabOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="etab-page-container">

      <h1 className="etab-main-title">
        Applications de purification de l'air dans les espaces clos et désinfection des environnements intérieurs
      </h1>

      <div className="etab-section-flex">
        <div className="etab-frame-square">
          <img src={imgEtabHero} alt="Désinfection Air" />
        </div>
        
        <div className="etab-text-content">
          <p className="etab-intro-text">
            <strong>Ozonewell</strong> désinfecte les environnements intérieurs de tout lieu de travail, bâtiment ou établissement public à forte fréquentation. 
            Les environnements intérieurs sont divers et leurs problèmes spécifiques varient ; par conséquent, les solutions de purification de l’air doivent être adaptées à chaque situation.
          </p>
          <h2 className="etab-slogan-blue">
            Purification et désinfection de l'air à l'ozone dans divers établissements publics :
          </h2>
          <ul className="etab-list">
            <li>Bureaux, lieux de travail et industries.</li>
            <li>Centres éducatifs : écoles, jardins d'enfants...</li>
            <li>Hôtellerie : restaurants, cafés, hôtels.</li>
            <li>Salles de sport et établissements de soins de santé.</li>
            <li>Commerces, salons de coiffure et musées.</li>
          </ul>
        </div>
      </div>


      <div className="etab-footer">
        <button className="etab-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN DEVIS
        </button>
      </div>

              {/* --- NOUVELLE SECTION AJOUTÉE --- */}
        <div className="office-problems-section">
          <h2 className="office-problems-main-title">
            Problèmes courants d'hygiène environnementale dans les bureaux, les industries et autres lieux de travail
          </h2>

          <div className="office-problems-flex">
            {/* ESPACE POUR LA PHOTO À GAUCHE */}
            <div className="office-problems-image-placeholder">
              <div className="office-frame-square">
                  {/* Tu pourras insérer ton image ici */}
                  <img src={imgBavet} alt="Problèmes hygiène bureaux" />
              </div>
            </div>

            {/* TEXTE À DROITE */}
            <div className="office-problems-text">
              <div className="problem-item">
                <h3>Contamination microbiologique (virus, bactéries...)</h3>
                <p>
                  Dans les bureaux et les lieux de travail, les conduits de climatisation, les plafonds, les murs et l'air en général sont désinfectés quotidiennement afin de prévenir toutes sortes de <strong>maladies contagieuses</strong> (rhume, grippe, <strong>COVID-19</strong>...) et, par conséquent, d'éviter les arrêts maladie et l'<strong>absentéisme</strong>.
                </p>
                <p>
                  L'<strong>ozone gazeux</strong> a une forte capacité de pénétration sur les tables, poignées de porte, rideaux et circuits de climatisation. Les purificateurs d'air à <strong>filtration HEPA</strong> assurent également un assainissement en éliminant les microparticules de virus et les allergènes.
                </p>
                <p>
                  Les experts d'<strong>Ozonewell</strong> analysent chaque cas et effectuent des mesures régulières de la <strong>qualité de l'air</strong>.
                </p>
              </div>

              <div className="virus-list-box">
                <strong>Quelques types de virus et maladies :</strong>
                <ul>
                  <li><strong>Adénovirus :</strong> Infections respiratoires.</li>
                  <li><strong>Orthomyxovirus :</strong> Grippe.</li>
                  <li><strong>Coronavirus :</strong> Rhume, SRAS, COVID-19.</li>
                </ul>
                <br />
                <strong>Quelques types de bactéries :</strong>
                <ul>
                  <li><strong>Staphylococcus aureus :</strong> Pneumonie.</li>
                  <li><strong>Streptocoque :</strong> Infections de la gorge et du système sanguin.</li>
                </ul>
              </div>

              <div className="problem-item">
                <h3>Pollution chimique et composés organiques volatils (COV)</h3>
                <p>
                  Les solutions d'<strong>Ozonewell</strong> minimisent la pollution chimique causée par les produits de nettoyage et les matériaux de construction, tels que les <strong>COV et le formaldéhyde</strong>.
                </p>
              </div>

              <div className="problem-item">
                <h3>Élimination des allergènes : poussière, acariens, pollen</h3>
                <p>
                  Les filtres HEPA garantissent des espaces <strong>exempts d'allergènes</strong>, améliorant la performance des employés souffrant d'allergies (25 % de la population active).
                </p>
              </div>

              <div className="problem-item">
                <h3>Mauvaises odeurs ou sensation d'étouffement</h3>
                <p>
                  Les odeurs de plomberie ou de forte concentration de personnes nuisent à l'<strong>image de l'entreprise</strong>. <strong>Ozonewell</strong> garantit des espaces <strong>hygiéniquement sains et sans odeur</strong>.
                </p>
              </div>
              
              <p className="final-problem-conclusion">
                Grâce à la méthodologie exclusive d'<strong>Ozonewell</strong>, les entreprises améliorent leur <strong>rentabilité</strong> en offrant des environnements sécurisés.
              </p>
            </div>
          </div>
        </div>
        {/* --- FIN DE LA SECTION AJOUTÉE --- */}

      {/* SECTION AVANTAGES (TITRE AU-DESSUS) */}
      <div className="etab-advantages-section">
        <div className="etab-advantages-card">
          <h3 className="etab-advantages-title">
            La solution de désinfection Ozonewell pour les espaces clos :
          </h3>
          
          <div className="etab-advantages-content">
            <ul className="etab-adv-list">
              <li>Elle dégage une impression de tranquillité et de propreté.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Prévient et élimine les mauvaises odeurs.</li>
              <li>Améliorer l'expérience client et fidéliser la clientèle.</li>
              <li>Protégez votre bonne réputation.</li>
              <li>Développez votre marque et augmentez votre rentabilité.</li>
            </ul>
            
            <div className="etab-image-circle-container">
               <img src={imgEtabEnvironnement} alt="Bureau propre" className="etab-image-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtabOzoneDetails;