import React from 'react';
import './Partners.css';

const partners = [
  { id: 1, name: 'Kenzi Hotels', logo: '/assets/kenzi.png' },
  { id: 2, name: 'Park Hyatt', logo: '/assets/park-hayat.png' },
  { id: 3, name: 'Sol Meliá', logo: '/assets/sol-melia.png' },
  { id: 4, name: 'Hotel Merinides', logo: '/assets/hotel-merinides.png' },
  { id: 5, name: 'Migiri House', logo: '/assets/migiri-house.png' },
];

export default function Partners() {
  const tickerItems = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2 className="partners-title">Ils nous font confiance</h2>
        <div className="partners-underline"></div>
      </div>

      <div className="partners-ticker-wrapper">
        <div className="partners-ticker-track">
          {tickerItems.map((partner, index) => (
            <div key={index} className="partner-ticker-item">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-ticker-logo" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}