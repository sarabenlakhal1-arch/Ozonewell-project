import React from 'react';
import './Catalogue.css';
// Importez vos composants globaux ici quand vous serez prêt
// import TopBar from './TopBar';
// import Navbar from './Navbar';
// import Footer from './Footer';

export default function Catalogue() {
  const documents = [
    {
      id: 1,
      titre: "Catalogue Général 2026",
      reference: "Réf : CT-2026-01",
      desc: "L'ensemble de nos solutions industrielles pour le traitement de l'air et de l'eau.",
      pdfUrl: "/catalogues/catalogue_ozonewell.pdf"
    },
    {
      id: 2,
      titre: "Solutions Traitement d'Air",
      reference: "Réf : BR-AIR-04",
      desc: "Protocoles de désinfection pour le secteur hôtelier, hospitalier et espaces confinés.",
      pdfUrl: "/catalogues/solutions-air.pdf"
    },
    {
      id: 3,
      titre: "Solutions Traitement d'Eau",
      reference: "Réf : BR-EAU-02",
      desc: "Applications pour l'agriculture, l'agroalimentaire et le traitement des eaux usées.",
      pdfUrl: "/catalogues/solutions-eau.pdf"
    }
  ];

  return (
    <div className="catalogue-page">
      {/* 1. EN-TÊTE (À activer selon vos besoins) */}
      {/* <TopBar /> */}
      {/* <Navbar /> */}

      {/* 2. CONTENU DU CATALOGUE */}
      <div className="catalogue-content">
        <header className="catalogue-header">
          <span className="subtitle">Documentation Technique</span>
          <h1>Espace Téléchargements</h1>
          <p>Consultez et téléchargez nos fiches techniques et catalogues pour découvrir l'ensemble de nos solutions Ozone Well.</p>
        </header>

        <div className="catalogue-grid">
          {documents.map((doc) => (
            <div className="catalogue-card" key={doc.id}>
              {/* Vignette minimaliste au lieu du dégradé */}
              <div className="card-thumbnail">
                <div className="doc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <span className="doc-brand">OZONE WELL</span>
              </div>
              
              <div className="card-body">
                <span className="doc-ref">{doc.reference}</span>
                <h3>{doc.titre}</h3>
                <p>{doc.desc}</p>
                
                <div className="card-actions">
                  <a 
                    href={doc.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    Visualiser
                  </a>

                  <a 
                    href={doc.pdfUrl} 
                    download 
                    className="btn btn-primary"
                  >
                    Télécharger
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de redirection plus sobre */}
        <div className="catalogue-cta">
          <div className="cta-text">
            <h3>Besoin d'étudier nos équipements ?</h3>
            <p>Retrievver les détails techniques directement sur notre catalogue interactif en ligne.</p>
          </div>
          <a href="/produits" className="btn-cta">Consulter nos produits</a>
        </div>
      </div>

      {/* 3. PIED DE PAGE */}
      {/* <Footer /> */}
    </div>
  );
}