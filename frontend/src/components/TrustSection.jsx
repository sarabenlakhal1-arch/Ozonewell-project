import React from 'react';
import './TrustSection.css';

const trustData = [
  {
    title: "ISO 9001:2015",
    description: "Management de la qualité certifié",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  },
  {
    title: "DIRECTIVES OMS",
    description: "Conformité sanitaire mondiale",
    icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v12M6 12h12" />
  },
  {
    title: "EUO3TA MEMBER",
    description: "Standard européen de l'ozone",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  },
  {
    title: "INTERECO BIO",
    description: "Certification agriculture biologique",
    icon: <path d="M12 3v19M5 8l7-5 7 5M5 16l7 5 7-5" />
  }
];

function TrustSection() {
  return (
    <section className="trust-wrapper">
      <div className="trust-grid">
        {trustData.map((item, index) => (
          <div key={index} className="trust-card">
            <div className="trust-visual">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
            </div>
            <div className="trust-info">
              <h4 className="trust-label">{item.title}</h4>
              <p className="trust-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;