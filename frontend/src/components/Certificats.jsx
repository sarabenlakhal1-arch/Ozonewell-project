import React from 'react';
import './Certificats.css';

const certificates = [
  {
    id: 1,
    title: "BUREAU VERITAS ISO 9001:2015",
    desc: "Certification internationale pour la conception, fabrication et maintenance d'équipements de désinfection par ozone.",
    category: "Qualité",
    file: "/certificats/CERTIFICADO ISO ESPAÑOL.pdf"
  },
  {
    id: 2,
    title: "OMS (WHO)",
    desc: "Conformité aux seuils mondiaux de sécurité pour la qualité de l'air et les concentrations d'ozone (Mise à jour 2005).",
    category: "Santé",
    file: "/certificats/OMS WHO_SDE_PHE_OEH_06.02_fre.pdf"
  },
  {
    id: 3,
    title: "INTERECO",
    desc: "Certificat de produit utilisable en agriculture biologique selon le règlement européen (UE) 2018/848.",
    category: "Écologie",
    file: "/certificats/Certificado INTERECO 021023 a 300625.pdf"
  },
  {
    id: 4,
    title: "EUO3TA",
    desc: "Documentation technique et validation des standards de fabrication pour les solutions d'ozonisation industrielle.",
    category: "Technique",
    file: "/certificats/euo3ta.org asp certificado.pdf"
  }
];

export default function Certificats() {
  return (
    <div className="cert-page-wrapper">
      <header className="cert-header">
        <div className="header-content">
          <h1>Certifications & Conformité</h1>
          <div className="header-line"></div>
        </div>
      </header>

      <main className="container">
        <div className="cert-grid-modern">
          {certificates.map((cert) => (
            <div key={cert.id} className="modern-card">
              <div className="card-top">
                <span className="category-tag">{cert.category}</span>
                <div className="pdf-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 18H17M7 14H17M7 10H11M20 13V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H13M20 13L15 18M20 13H15V18" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="card-body">
                <h2 className="org-name">{cert.org}</h2>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.desc}</p>
              </div>

              <div className="card-footer">
                <a href={cert.file} target="_blank" rel="noopener noreferrer" className="btn-modern">
                  <span>Visualiser le document</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}