import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Solutions.css';

// Tes imports d'images
import airImg from '../assets/photozon/air.jpeg';
import eauImg from '../assets/photozon/piscine.png';
import cuisineImg from '../assets/photozon/eau-hotellerie.png';
import caferestImg from '../assets/photozon/cafe.jpeg';
import santeImg from '../assets/photozon/sante.jpeg';
import froideImg from '../assets/photozon/chambre.png';
import sportImg from '../assets/photozon/sport.jpeg';
import hotelImg from '../assets/photozon/hotel.jpeg';
import travailImg from '../assets/photozon/travail.jpeg';
import coiffeurImg from '../assets/photozon/coiffeur.png';
import schoolImg from '../assets/photozon/school.jpeg';
import indImg from '../assets/photozon/indusagro.png';
import agrImg from '../assets/photozon/agricul.png';

const Solutions = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(`/solutions/${path}`);
  };

  const activites = [
    { id: 'hotel-ozone', title: 'Hôtellerie', img: hotelImg },
    { id: 'horeca', title: 'Restaurants et Cafés', img: caferestImg },
    { id: 'clinique', title: 'Cliniques et Hôpitaux', img: santeImg },
    { id: 'ecole', title: 'Établissements Scolaires', img: schoolImg },
    { id: 'sport', title: 'Salles de sport', img: sportImg },
    { id: 'bureau', title: 'Environnement de travail', img: travailImg },
    { id: 'coiffure', title: 'Salons de coiffure', img: coiffeurImg },
    { id: 'cuisine', title: 'Cuisine', img: cuisineImg },
    { id: 'chambres-froides', title: 'Chambres Froides', img: froideImg },
  ];

  const applications = [
    { id: 'air-ozone', title: 'Air Ozoné', img: airImg },
    { id: 'eau-ozone', title: 'Eau Ozonée', img: eauImg },
    { id: 'agroalimentaire', title: 'Industrie Agroalimentaire', img: indImg },
    { id: 'agriculture', title: 'Agriculture', img: agrImg },
  ];

  return (
    <div className="solutions-modern-container">
      <header className="solutions-header">
        <h1 className="hero-title">Solutions & Applications Ozone</h1>
        <p className="hero-subtitle">Technologie pure pour un environnement sain.</p>
      </header>

      {/* SECTION ACTIVITÉS */}
      <section className="modern-section">
        <h2 className="section-label">Activités</h2>
        <div className="modern-centered-grid">
          {activites.map((item) => (
            <div key={item.id} className="modern-rect-card" onClick={() => handleCardClick(item.id)}>
              <div className="rect-image-box">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="rect-text">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION APPLICATIONS (Cercles) */}
      <section className="modern-section">
        <h2 className="section-label">Applications</h2>
        <div className="modern-circle-flex">
          {applications.map((app) => (
            <div key={app.id} className="modern-circle-card" onClick={() => handleCardClick(app.id)}>
              <div className="circle-outer">
                <img src={app.img} alt={app.title} />
              </div>
              <h3 className="circle-text">{app.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;