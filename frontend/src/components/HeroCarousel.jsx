import { useState, useEffect } from 'react';
// IMPORTATION IMPORTANTE : On ajoute Link ici
import { Link } from 'react-router-dom'; 
import './HeroCarousel.css';

import hotelImg from '../assets/photozon/hotel.jpeg';
import schoolImg from '../assets/photozon/school.jpeg';
import cafeImg from '../assets/photozon/cafe.jpeg';
import sportImg from '../assets/photozon/sport.jpeg';
import santeImg from '../assets/photozon/sante.jpeg';
import travailImg from '../assets/photozon/travail.jpeg';
import commerceImg from '../assets/photozon/commerce.jpeg';
import coiffeurImg from '../assets/photozon/coiffeur.png';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SLOGAN_UNIQUE = "Respirer un air sain pour un bien-être quotidien";

  const slides = [
    { image: hotelImg, title: 'Hôtellerie', subtitle: SLOGAN_UNIQUE },
    { image: schoolImg, title: 'Établissements Scolaires', subtitle: SLOGAN_UNIQUE },
    { image: cafeImg, title: 'Cafés-Restaurants', subtitle: SLOGAN_UNIQUE },
    { image: sportImg, title: 'Salles de Sport', subtitle: SLOGAN_UNIQUE },
    { image: santeImg, title: 'Santé & Médical', subtitle: SLOGAN_UNIQUE },
    { image: travailImg, title: 'Environnement de Travail', subtitle: SLOGAN_UNIQUE },
    { image: commerceImg, title: 'Commerces', subtitle: SLOGAN_UNIQUE },
    { image: coiffeurImg, title: 'Salons de Coiffure', subtitle: SLOGAN_UNIQUE },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="slide-image">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-text-wrapper">
                <h1 className="slide-title">{slide.title}</h1>
                <div className="slide-divider"></div>
                <p className="slide-subtitle">{slide.subtitle}</p>
                
                {/* Utilisation de Link au lieu de <a> */}
                <Link to="/solutions" className="slide-cta">
                  Découvrir nos solutions
                </Link>
                
              </div>
            </div>
          </div>
        ))}

        <div className="carousel-pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;