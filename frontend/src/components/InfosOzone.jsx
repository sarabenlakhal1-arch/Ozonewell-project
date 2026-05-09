import React from 'react';
import './InfosOzone.css';

import iconShield from '../assets/photozon/icon-shield.png';
import iconMolecule from '../assets/photozon/icon-molecul.png';
import iconFan from '../assets/photozon/icon-fan.png';
import iconHand from '../assets/photozon/icon-hand.png';

const InfosOzone = () => {
  return (
    <section className="ozone-catalog-page">
      <div className="catalog-content-container">
        
        {/* Cette section passera en haut sur mobile */}
        <div className="catalog-left-sidebar">
          <h2 className="catalog-vertical-title">OZONE</h2>
        </div>

        <div className="catalog-main-content">
          <header className="oms-header-block">
            <p>
              Selon l'<strong>Organisation Mondiale de la Santé</strong>, l'ozone est le désinfectant le plus puissant 
              contre toutes sortes de micro-organismes, bactéries, champignons et virus. 
              L'OMS reconnaît que le pouvoir désinfectant de l'ozone est de <strong>99%</strong>.
            </p>
          </header>

          <div className="catalog-features-list">
            <div className="feature-item">
              <div className="feature-icon-box">
                <img src={iconShield} alt="Désinfectant" />
              </div>
              <div className="feature-info">
                <h4>Désinfectant</h4>
                <p>Elimination des BACTERIES, VIRUS, champignons et acariens. L'Ozone est une molécule instable qui oxyde les molécules de ces composés.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <img src={iconFan} alt="Désodorisant" />
              </div>
              <div className="feature-info">
                <h4>Désodorisant</h4>
                <p>Le processus d'oxydation des composés organiques volatils s'accélère, éliminant leur présence et détruisant les odeurs.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <img src={iconMolecule} alt="Sans résidus" />
              </div>
              <div className="feature-info">
                <h4>Sans résidus chimiques</h4>
                <p>L'Ozone se décompose rapidement en CO2 et O2 sans créer de sous-produits dangereux dans l'environnement.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <img src={iconHand} alt="Manipulation" />
              </div>
              <div className="feature-info">
                <h4>Manipulation facile</h4>
                <p>Conception compacte et légère. L'équipement comprend une minuterie et un interrupteur indicateur de fonctionnement.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfosOzone;