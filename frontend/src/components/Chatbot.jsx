import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Je suis l'assistant Ozonewell. Comment puis-je vous aider ?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Scroll automatique vers le bas à chaque nouveau message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fonction pour envoyer le message au serveur Python (FastAPI)
  const handleSend = async () => {
    if (!input.trim()) return;

    // Affichage immédiat du message de l'utilisateur
    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input; // On garde une copie
    setInput("");

    try {
      // Appel à ton API Python sur le port 8000
      const response = await fetch('http://localhost:8001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: currentInput }),
      });

      if (!response.ok) throw new Error("Erreur serveur");

      const data = await response.json();
      
      // Ajout de la réponse intelligente du bot
      setMessages(prev => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      // Message en cas de serveur Python éteint
      setMessages(prev => [...prev, { 
        text: "Désolé, je rencontre des difficultés à me connecter. Vérifiez que le serveur Python est lancé.", 
        isBot: true 
      }]);
      console.error("Erreur Chatbot:", error);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              {/* Icône Robot SVG */}
              <svg className="bot-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="10" rx="2"/>
                <circle cx="12" cy="5" r="2"/>
                <path d="M12 7v4M8 16h.01M16 16h.01"/>
              </svg>
              <span>Assistant Ozonewell</span>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.isBot ? 'bot' : 'user'}`}>
                {m.text}
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          <div className="chat-footer">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Écrivez ici..." 
            />
            <button className="send-btn" onClick={handleSend}>
              {/* Icône Envoyer SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
           /* Icône Fermer SVG */
           <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="24">
             <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
           </svg>
        ) : (
          /* Icône Message SVG */
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="28">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;