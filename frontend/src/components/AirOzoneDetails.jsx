import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AirOzoneDetails.css';

// Importation de tes captures d'écran (assure-toi que les noms sont exacts)
import imgIndustrie from '../assets/photozon/industrie-agro.png';
import imgEtablissement from '../assets/photozon/etablissement.png';
import imgCamara from '../assets/photozon/camara-frigo.png';
import imgSalleBlanche from '../assets/photozon/salle-blanche.png';
import imgPurificateur from '../assets/photozon/purificateur-air.png';

const AirOzoneDetails = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="air-page-detail">
      {/* SECTION HEADER */}
      <header className="page-header">
        <p className="top-nav-hint">Traitement à l'ozone de l'air intérieur et des surfaces</p>
        <h1 className="main-blue-italic">
          Veillez à l'hygiène environnementale pour garantir le bon fonctionnement de votre entreprise.
        </h1>
        <div className="header-description">
          <p class="bold">Les solutions de traitement de l'air ASP désinfectent et/ou purifient l'air et les surfaces intérieures des espaces clos, tout en éliminant les odeurs désagréables.</p>
          <p class="bold">De bons résultats sont toujours garantis, car la méthode de travail comprend la réalisation d'une étude préliminaire, la mise en œuvre d'un système personnalisé.</p>
          <br />
          <button className="asp-blue-gradient-btn" onClick={handleContact}>Demandez un devis.</button>
        </div>
      </header>

      {/* SECTION DEUX PHOTOS (Industries / Établissements) */}
      <section className="grid-dual">
        <div className="card-item">
          <div className="bubble-frame">
            <img src={imgIndustrie} alt="Industries Alimentaires" />
          </div>
          <h2 className="title-with-line">Air ozoné pour les industries</h2>
          <p className="bold">Chambres froides, salles de manutention, désinfection environnementale, élimination des odeurs.</p>
          <p className="bold">Hygiène et sécurité des aliments</p>
        </div>

        <div className="card-item">
          <div className="bubble-frame">
            <img src={imgEtablissement} alt="Établissements" />
          </div>
          <h2 className="title-with-line">Air ozoné pour les établissements</h2>
          <p className="bold">Hôtels, centres de soins, bureaux, résidences, magasins, etc.</p>
          <p className="bold">Qualité de l'air intérieur</p>
        </div>
      </section>

      {/* SECTION AGROALIMENTAIRE DÉTAILLÉE */}
      <section className="agro-full-content">
        <h2 className="blue-large-title">Désinfection de l'air à l'ozone dans l'industrie agroalimentaire : efficacité, sécurité et économies accrues</h2>
        <div className="agro-flex">
          <div className="agro-img">
            <img src={imgCamara} alt="Camara Frigorifica" />
          </div>
          <div className="agro-text">
            <span className="blue-category">Industries alimentaires</span>
            <p>L'ozone est une <strong>alternative très efficace pour la désinfection de l'air et des surfaces</strong> dans l'industrie alimentaire, car il ne génère pas de résidus chimiques dans les aliments.</p>
            <p>L'application d'ozone permet <strong>l'assainissement et la désinfection de l'air</strong> dans les zones de production, de manipulation ou de stockage des aliments.</p>
            <p>De même, l'ozone assure la désinfection des surfaces en contact avec les aliments (tables de travail, ustensiles).</p>
          </div>
        </div>
      </section>

      {/* SECTION SALLES BLANCHES */}
      <section className="clean-room-flex">
        <div className="clean-room-text">
          
          <h3 className="blue-underline-title">Salles blanches de l'industrie alimentaire Ozone dans les salles blanches et les chambres</h3>
          <p>Le traitement de l'air et des surfaces à l'ozone optimise la qualité de l'air intérieur, réduisant la charge microbienne dans les espaces intérieurs critiques tels que <strong>les salles blanches ou les salles de manipulation des aliments</strong>  , ainsi que dans toutes les installations de l'industrie alimentaire.

              L'ozone est particulièrement utile dans les chambres froides , car il améliore la conservation des aliments et désodorise en contrôlant la contamination microbiologique et l'éthylène. Ceci s'applique aux <strong>chambres froides de l'industrie agroalimentaire</strong>, ainsi qu'aux commerces de détail alimentaires et aux établissements de restauration.</p>
        </div>
        <div className="clean-room-img">
          <img src={imgSalleBlanche} alt="Salles blanches" />
        </div>
      </section>

      {/* SECTION SANTÉ ET BÂTIMENTS */}
      <section className="health-section">
        <h2 className="blue-large-title">Un air pur à l'intérieur des bâtiments : une meilleure santé et rentabilité</h2>
        <div className="health-flex">
          <div className="health-img">
            <img src={imgPurificateur} alt="Purificateur" />
          </div>
          <div className="health-text">
            <p>Actuellement, nous passons la majeure partie de notre temps dans des espaces intérieurs remplis de mauvaises odeurs et présentant <strong></strong>

            Il convient de noter qu'en outre, certains de ces environnements clos ne peuvent même pas être correctement ventilés en raison de problèmes architecturaux (ils n'ont pas de fenêtres, par exemple) ou de problèmes de climatisation (climatisation en été et chauffage en hiver).

            Tout cela engendre une mauvaise qualité de l'air intérieur,  ce qui nuit au bien-être et à la productivité au travail . Sans parler du risque réel de contracter des maladies respiratoires   comme le rhume, la grippe et la COVID-19 (infection par le coronavirus SARS-CoV-2), qui se transmettent par gouttelettes et/ou aérosols.

            ASP propose un service complet d'hygiène environnementale, avec purification de l'air et désinfection des surfaces et de l'environnement, incluant des études sur la qualité de l'air intérieur (QAI) et une certification qui résolvent des problèmes très courants, améliorant la santé, la sécurité et le confort des personnes dans les espaces clos.
            </p>
            <br />
            <button className="asp-blue-gradient-btn" onClick={handleContact}>Demander un devis</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirOzoneDetails;