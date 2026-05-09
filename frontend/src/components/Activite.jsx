import React from 'react';
import './Activite.css';

const Activite = () => {
  const handleViewPDF = (fileName) => {
    const pdfUrl = `/activite/${fileName}`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="activite-modern-section">
      <div className="background-blobs">
        <div className="blob blob-air"></div>
        <div className="blob blob-eau"></div>
        <div className="blob blob-odeur"></div>
      </div>

      <div className="activite-container">
        <header className="activite-intro">
          <h2 className="title-modern">Notre Activité</h2>
          <p className="subtitle-modern">Solutions écologiques</p>
        </header>

        <div className="glass-grid">
          
          {/* CARTE AIR */}
          <div className="glass-card card-air">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" className="svg-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 16.5c0-1.5 1-2.5 3-2.5 1-3.5 4.5-5 7-3.5 2-1 4.5 0 4.5 3 1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H5c-1.5 0-2.5-1-2.5-2.5z" />
                <path d="M8 14c.5-4 4.5-5 6-2.5" />
              </svg>
            </div>
            <h3 className="label-ozone">air ozoné</h3>
            <p className="card-description">
              Améliorez la qualité de l'air intérieur (QAI). L'Ozone élimine jusqu'à 99,9% des agents pathogènes, 
              virus, bactéries et mauvaises odeurs (tabac, animaux) sans aucun résidu chimique. 
              Une alternative écologique pour un air sain et aseptisé au quotidien.
            </p>
            <button className="btn-glass" onClick={() => handleViewPDF('AIR.pdf')}>
              Visualiser la brochure
            </button>
          </div>

          {/* CARTE EAU */}
          <div className="glass-card card-eau">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" className="svg-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 12 9 12 9C12 9 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="label-ozone">eau ozonée</h3>
            <p className="card-description">
              Le meilleur désinfectant sans agent chimique selon l'OMS. L'eau ozonée permet une agriculture écologique 
              avec 15% de récolte en plus et une désinfection agroalimentaire sans résidus. 
              Réduit la consommation d'eau et d'énergie en éliminant graisses et micro-organismes.
            </p>
            <button className="btn-glass" onClick={() => handleViewPDF('EAU 5.pdf')}>
              Visualiser la brochure
            </button>
          </div>

          {/* TROISIÈME CARTE - ODEURS AVEC VOTRE NOUVEAU SVG */}
          <div className="glass-card card-odeur centered-bottom">
            <div className="icon-wrapper">
              <svg 
                viewBox="0 0 24 24" 
                className="svg-icon" 
                fill="currentColor" 
                id="Heat--Streamline-Outlined-Material"
              >
                <path d="M13.15 20.7751c-0.08335 0.06665 -0.17085 0.11665 -0.2625 0.15 -0.09165 0.03335 -0.17915 0.05 -0.2625 0.05 -0.1 0 -0.19165 -0.01665 -0.275 -0.05 -0.08335 -0.03335 -0.16665 -0.09165 -0.25 -0.175 -0.68335 -0.71665 -1.19165 -1.45835 -1.525 -2.225 -0.33335 -0.76665 -0.5 -1.56665 -0.5 -2.4 0 -0.6 0.09165 -1.2375 0.275 -1.9125s0.50835 -1.5875 0.975 -2.7375c0.43335 -1 0.725 -1.77085 0.875 -2.3125 0.15 -0.54165 0.225 -1.0375 0.225 -1.4875 0 -0.63335 -0.1375 -1.225 -0.4125 -1.775 -0.275 -0.55 -0.70415 -1.09167 -1.2875 -1.625 -0.08335 -0.083335 -0.14165 -0.170835 -0.175 -0.2625 -0.03335 -0.09167 -0.05 -0.1875 -0.05 -0.2875 0 -0.083335 0.0125 -0.16667 0.0375 -0.25 0.025 -0.083335 0.07085 -0.16667 0.1375 -0.25 0.08335 -0.083335 0.17085 -0.145835 0.2625 -0.1875 0.09165 -0.04167 0.1875 -0.0625 0.2875 -0.0625 0.08335 0 0.17085 0.016665 0.2625 0.05 0.09165 0.03333 0.17915 0.091665 0.2625 0.175 0.73335 0.68333 1.27915 1.391665 1.6375 2.125 0.35835 0.73335 0.5375 1.51665 0.5375 2.35 0 0.56665 -0.08335 1.1625 -0.25 1.7875 -0.16665 0.625 -0.48335 1.4875 -0.95 2.5875 -0.43335 1.01665 -0.73335 1.82085 -0.9 2.4125 -0.16665 0.59165 -0.25 1.1375 -0.25 1.6375 0 0.65 0.13335 1.27085 0.4 1.8625 0.26665 0.59165 0.675 1.17915 1.225 1.7625 0.06665 0.08335 0.1125 0.16665 0.1375 0.25 0.025 0.08335 0.0375 0.16665 0.0375 0.25 0 0.1 -0.01665 0.19585 -0.05 0.2875 -0.03335 0.09165 -0.09165 0.17915 -0.175 0.2625Zm5.075 0.025c-0.08335 0.06665 -0.16665 0.1125 -0.25 0.1375 -0.08335 0.025 -0.16665 0.0375 -0.25 0.0375 -0.1 0 -0.19585 -0.01665 -0.2875 -0.05 -0.09165 -0.03335 -0.17915 -0.09165 -0.2625 -0.175 -0.68335 -0.71665 -1.19165 -1.45415 -1.525 -2.2125 -0.33335 -0.75835 -0.5 -1.55415 -0.5 -2.3875 0 -0.6 0.09165 -1.2375 0.275 -1.9125s0.50835 -1.5875 0.975 -2.7375c0.43335 -1 0.725 -1.77085 0.875 -2.3125 0.15 -0.54165 0.225 -1.0375 0.225 -1.4875 0 -0.63335 -0.1375 -1.22085 -0.4125 -1.7625 -0.275 -0.54165 -0.70415 -1.0875 -1.2875 -1.6375 -0.08335 -0.083335 -0.1375 -0.16667 -0.1625 -0.25 -0.025 -0.083335 -0.0375 -0.175 -0.0375 -0.275 0 -0.083335 0.0125 -0.170835 0.0375 -0.2625 0.025 -0.09167 0.07085 -0.17917 0.1375 -0.2625 0.08335 -0.083335 0.17085 -0.14167 0.2625 -0.175 0.09165 -0.033335 0.1875 -0.05 0.2875 -0.05 0.08335 0 0.16665 0.0125 0.25 0.0375 0.08335 0.025 0.16665 0.07083 0.25 0.1375 0.73335 0.68333 1.27915 1.391665 1.6375 2.125 0.35835 0.73335 0.5375 1.51665 0.5375 2.35 0 0.56665 -0.08335 1.15835 -0.25 1.775 -0.16665 0.61665 -0.48335 1.49165 -0.95 2.625 -0.43335 1 -0.73335 1.79585 -0.9 2.3875 -0.16665 0.59165 -0.25 1.1375 -0.25 1.6375 0 0.65 0.13335 1.27915 0.4 1.8875 0.26665 0.60835 0.675 1.19585 1.225 1.7625 0.06665 0.08335 0.1125 0.16665 0.1375 0.25 0.025 0.08335 0.0375 0.16665 0.0375 0.25 0 0.1 -0.01665 0.19585 -0.05 0.2875 -0.03335 0.09165 -0.09165 0.17915 -0.175 0.2625Zm-10.15 0c-0.08335 0.06665 -0.16665 0.1125 -0.25 0.1375 -0.08335 0.025 -0.16665 0.0375 -0.25 0.0375 -0.1 0 -0.19585 -0.01665 -0.2875 -0.05 -0.09165 -0.03335 -0.17915 -0.09165 -0.2625 -0.175 -0.68335 -0.71665 -1.19165 -1.45415 -1.525 -2.2125 -0.33335 -0.75835 -0.5 -1.55415 -0.5 -2.3875 0 -0.6 0.09165 -1.2375 0.275 -1.9125s0.50835 -1.5875 0.975 -2.7375c0.43335 -1 0.725 -1.77085 0.875 -2.3125 0.15 -0.54165 0.225 -1.0375 0.225 -1.4875 0 -0.63335 -0.1375 -1.22085 -0.4125 -1.7625 -0.275 -0.54165 -0.70415 -1.0875 -1.2875 -1.6375 -0.08335 -0.083335 -0.14165 -0.170835 -0.175 -0.2625 -0.03335 -0.09167 -0.05 -0.1875 -0.05 -0.2875 0 -0.083335 0.0125 -0.170835 0.0375 -0.2625 0.025 -0.09167 0.07085 -0.17917 0.1375 -0.2625 0.08335 -0.083335 0.17085 -0.145835 0.2625 -0.1875 0.09165 -0.04167 0.1875 -0.0625 0.2875 -0.0625 0.08335 0 0.17085 0.016665 0.2625 0.05 0.09165 0.03333 0.17915 0.091665 0.2625 0.175 0.73335 0.68333 1.27915 1.391665 1.6375 2.125 0.35835 0.73335 0.5375 1.51665 0.5375 2.35 0 0.56665 -0.0875 1.17085 -0.2625 1.8125 -0.175 0.64165 -0.4875 1.50415 -0.9375 2.5875 -0.41665 1 -0.70835 1.79165 -0.875 2.375 -0.16665 0.58335 -0.25 1.13335 -0.25 1.65 0 0.66665 0.13335 1.3 0.4 1.9 0.26665 0.6 0.66665 1.18335 1.2 1.75 0.06665 0.08335 0.1125 0.16665 0.1375 0.25 0.025 0.08335 0.0375 0.16665 0.0375 0.25 0 0.1 -0.01665 0.19585 -0.05 0.2875 -0.03335 0.09165 -0.09165 0.17915 -0.175 0.2625Z" />
              </svg>
            </div>
            <h3 className="label-ozone">élimination des mauvaises odeurs</h3>
            <p className="card-description">
              Neutralisez les odeurs de tabac, d'animaux ou de cuisine à la source. 
              Contrairement aux parfums qui masquent, l'ozone détruit les molécules responsables des odeurs 
              pour une fraîcheur naturelle et saine dans tous vos espaces intérieurs.
            </p>
            <button className="btn-glass" onClick={() => handleViewPDF('odeurs.pdf')}>
              Visualiser la brochure
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Activite;