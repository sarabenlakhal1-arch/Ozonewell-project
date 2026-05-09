import React from 'react';
import './Entreprise.css';
// import TopBar from './TopBar';
// import Navbar from './Navbar';
// import Footer from './Footer';

export default function Entreprise() {
  return (
    <div className="entreprise-page">
      {/* <TopBar /> */}
      {/* <Navbar /> */}

      <div className="entreprise-hero">
        <div className="hero-overlay">
          <h1>À Propos de Nous</h1>
          <p>L'expertise technologique au service de la pureté de l'air et de l'eau</p>
        </div>
      </div>

      <div className="entreprise-container">
        
        <section className="section-presentation">
          <div className="presentation-text">
            <span className="section-subtitle">Qui sommes-nous ?</span>
            <h2>Leader dans les solutions de traitement par Ozone</h2>
            <p>
              Fondée avec la vision d'apporter des solutions écologiques et hautement performantes, 
              <strong> Ozone Well</strong> s'est imposée comme un acteur de référence dans la conception 
              et la distribution de générateurs d'ozone industriels et professionnels.
            </p>
            <p>
              Notre savoir-faire nous permet d'accompagner les entreprises dans leurs défis sanitaires 
              et environnementaux les plus complexes, en garantissant une désinfection sans résidus chimiques.
            </p>
          </div>
          
          <div className="presentation-mission">
            <div className="mission-box">
              <h3>Notre Mission</h3>
              <p>Innover continuellement pour offrir des technologies de purification accesibles, durables et respectueuses de l'environnement.</p>
            </div>
          </div>
        </section>

        <section className="section-stats">
          <div className="stat-item">
            <span className="stat-number">+10</span>
            <span className="stat-label">Années d'expertise</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+500</span>
            <span className="stat-label">Clients industriels</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Éco-responsable</span>
          </div>
        </section>

        <section className="section-activites">
          <div className="section-header-center">
            <span className="section-subtitle">Nos Domaines d'Intervention</span>
            <h2>Nos Activités</h2>
            <p>Nous déployons la puissance de l'ozone sur deux pôles d'expertise majeurs pour répondre aux exigences des professionnels.</p>
          </div>

          <div className="activites-grid">
            <div className="activite-card">
              <div className="activite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
              </div>
              <h3>Traitement de l'Air</h3>
              <p>Désinfection et élimination des odeurs dans les espaces clos. Solutions pour hôtels, hôpitaux, bureaux et lieux publics.</p>
            </div>

            <div className="activite-card">
              <div className="activite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Traitement de l'Eau</h3>
              <p>Stérilisation et purification de l'eau pour la consommation, l'agriculture et les processus industriels.</p>
            </div>
          </div>
        </section>

      </div>

      {/* <Footer /> */}
    </div>
  );
}