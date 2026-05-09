import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  // 1. Référence pour le formulaire
  const form = useRef();

  // 2. État pour gérer le chargement (UX)
  const [isSending, setIsSending] = useState(false);

  // 3. Fonction d'envoi d'email
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Désactive le bouton dès le clic

    // Utilisation des variables d'environnement (Vite)
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert("Votre message a été envoyé avec succès à Ozonewell !");
        form.current.reset(); // Vide le formulaire après succès
    })
    .catch((error) => {
        console.error(error.text);
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    })
    .finally(() => {
        setIsSending(false); // Réactive le bouton à la fin du processus
    });
  };

  return (
    <div className="contact-wrapper">
      
      {/* Bannière Hero */}
      <div className="contact-hero-banner">
          <div className="hero-overlay">
            <h1>Contact</h1>
          </div>
      </div>

      <div className="container">
        <div className="contact-intro-text">
          <br />
          <p>Nous restons à votre entière disposition pour toute demande d'information complémentaire.</p>
        </div>

        {/* Section Formulaire */}
        <section className="form-section-oz">
          <h2 className="oz-title">Enregistrez votre demande</h2>
          <form ref={form} onSubmit={sendEmail} className="oz-real-form">
            
            <div className="oz-row">
              <div className="oz-col">
                <label>Nature de votre demande *</label>
                <select name="request_type" required>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Demande d'information">Demande d'information</option>
                  <option value="Demande de fiche technique">Demande de fiche technique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div className="oz-col">
                <label>Nom complet *</label>
                <input type="text" name="user_name" placeholder="Votre nom" required />
              </div>
            </div>

            <div className="oz-row">
              <div className="oz-col">
                <label>Adresse email *</label>
                <input type="email" name="user_email" placeholder="votre@email.com" required />
              </div>
              <div className="oz-col">
                <label>Société</label>
                <input type="text" name="company" placeholder="Nom de l'entreprise" />
              </div>
            </div>

            <div className="oz-row">
              <div className="oz-col">
                <label>Téléphone *</label>
                <input type="tel" name="phone" placeholder="+212..." required />
              </div>
            </div>

            <div className="oz-full-row">
              <label>Message *</label>
              <textarea name="message" rows="5" placeholder="Votre message..." required></textarea>
            </div>

            {/* Bouton avec gestion du statut d'envoi */}
            <button 
              type="submit" 
              className="oz-submit-btn" 
              disabled={isSending}
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </section>

        {/* Section Carte et Détails de contact */}
        <section className="map-info-split">
          <div className="split-left-map">
            <iframe 
              title="Localisation Ozonewell"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4288065620613!2d-7.592603824303049!3d33.59417687333292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd46d3b1d9bf%3A0x318e2b41fb6fdbfe!2sCAP%20SECURITE!5e0!3m2!1sen!2sma!4v1777900194519!5m2!1sen!2sma"              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="split-right-details">
            <div className="details-content">
              
              <div className="detail-block">
                <h4>Siège Social</h4>
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p>80, rue Allal Ben Ahmed Amkik, Belvédère 20300 Casablanca - Maroc</p>
                </div>
              </div>

              <div className="detail-block">
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  <p>Tel : +212 (5) 22 24 99 32</p>
                </div>
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:contact@ozonewell.com">contact@ozonewell.com</a>
                </div>
              </div>

              <div className="detail-block">
                <div className="detail-row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <p>Lundi - Vendredi : 08:30 - 17:30</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}