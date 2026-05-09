import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

// Importation de votre logo pour servir d'image par défaut
import defaultLogo from '../assets/logo-ozon2.jpeg';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement des données depuis l'API FastAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erreur de connexion à l'API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCardClick = () => {
    navigate('/contact');
  };

  // Filtrage automatique par catégorie
  const ozoneGenerators = products.filter(p => p.category === 'Ozone');
  const airPurifiers = products.filter(p => p.category === 'Purificateur');

  const techInfo = [
    {
      id: "co2", title: "CO2", subtitle: "DIOXYDE DE CARBONE",
      desc: "Gaz inodore, incolore et naturellement présent dans l'atmosphère. C'est un indicateur du niveau de confinement de l'air.",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5C17.6 6.6 14.5 4 10.7 4 7.6 4 5 6.1 4.2 9c-2.3.4-4.2 2.4-4.2 4.8C0 16.5 2.5 19 5.5 19h12z"/></svg>
    },
    {
      id: "cov", title: "COV", subtitle: "COMPOSÉS ORGANIQUES VOLATILES",
      desc: "Regroupent une multitude de polluants d'origine naturelle ou humaine (industrie, colle, produits d'entretien).",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2M8.5 2h7M7 16h10"/></svg>
    },
    {
      id: "pm", title: "PARTICULES FINES", subtitle: "PM 2.5 & PM 10",
      desc: "Composants atmosphériques solides et liquides. Vecteur qui accélère la propagation des infections virales.",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M12 9V5M12 19v-4M15 12h4M5 12h4"/></svg>
    },
    {
      id: "ch2o", title: "FORMALDÉHYDE", subtitle: "CH2O",
      desc: "Principal polluant de l'air intérieur car fortement présent dans les colles, les plafonds, les meubles, les peintures...",
      svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    }
  ];

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Nos Solutions Technologiques</h1>
        <p>Une technologie avancée pour une pureté absolue de l'air.</p>
      </header>

      <section className="intro-text-section">
        <div className="intro-blue-banner">
          <h2>RESPIRER UN AIR SAIN POUR UN BIEN-ÊTRE QUOTIDIEN</h2>
        </div>
        <div className="intro-content">
          <p>
            Les sources de pollution intérieure sont nombreuses dans les instituts de beauté et salons de coiffure. 
            Les professionnels exposent leur santé au quotidien face aux maladies professionnelles liées à la pollution de l'air.
          </p>
          <p className="intro-highlight">
            OZONEWELL vous accompagne en vous proposant des solutions professionnelles pour la purification de l'air.
          </p>
        </div>
      </section>

      {/* SECTION GÉNÉRATEURS DYNAMIQUE */}
      {ozoneGenerators.length > 0 && (
        <section className="product-section">
          <h2 className="section-title">Générateurs d'Ozone</h2>
          <div className="product-grid">
            {ozoneGenerators.map((p) => (
              <div key={p.id} className="product-card" onClick={handleCardClick}>
                <div className="product-image-container">
                  <img 
                    src={p.image_url && p.image_url !== "" ? p.image_url : defaultLogo} 
                    alt={p.name} 
                    className="product-img" 
                    onError={(e) => { e.target.src = defaultLogo; }}
                  />
                  <div className="product-hover-info">
                    <div className="info-circle power"><span>{p.power}</span><small>Puissance</small></div>
                    <div className="info-circle model-name"><span>{p.name}</span></div>
                    <div className="info-circle volume"><span>{p.volume}</span><small>Volume</small></div>
                    <div className="quote-badge">Demander un devis</div>
                  </div>
                </div>
                <h3>{p.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION PURIFICATEURS DYNAMIQUE */}
      {airPurifiers.length > 0 && (
        <section className="product-section">
          <h2 className="section-title">Purificateurs d'Air</h2>
          <div className="product-grid">
            {airPurifiers.map((p) => (
              <div key={p.id} className="product-card" onClick={handleCardClick}>
                <div className="product-image-container">
                  <img 
                    src={p.image_url && p.image_url !== "" ? p.image_url : defaultLogo} 
                    alt={p.name} 
                    className="product-img" 
                    onError={(e) => { e.target.src = defaultLogo; }}
                  />
                  <div className="product-hover-info">
                    <div className="info-circle power"><span>{p.power}</span><small>Puissance</small></div>
                    <div className="info-circle model-name"><span>{p.name}</span></div>
                    <div className="info-circle volume"><span>{p.volume}</span><small>Volume</small></div>
                    <div className="quote-badge">Demander un devis</div>
                  </div>
                </div>
                <h3>{p.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="tech-info-section">
        <div className="tech-info-container">
          {techInfo.map((item) => (
            <div key={item.id} className="tech-info-card">
              <div className="tech-icon-wrapper">{item.svg}</div>
              <div className="tech-text">
                <h4 className="tech-title-main">{item.title}</h4>
                <h5 className="tech-subtitle">{item.subtitle}</h5>
                <p className="tech-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;