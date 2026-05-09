import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                localStorage.setItem("isAuthenticated", "true");
                setTimeout(() => navigate('/admin'), 800);
            } else {
                setError('Identifiants invalides. Veuillez réessayer.');
                setIsLoading(false);
            }
        } catch (err) {
            setError('Erreur de connexion au serveur.');
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">OZONE<span>WELL</span></div>
                    <p>Accès réservé à l'administration</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label htmlFor="username">Utilisateur</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username" 
                            placeholder="Nom d'utilisateur" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password"
                            name="password" 
                            placeholder="••••••••" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    {error && <div className="login-error-msg">{error}</div>}

                    <button type="submit" className={`login-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
                        {isLoading ? "Vérification..." : "Se connecter"}
                    </button>
                </form>
                
                <div className="login-footer">
                    &copy; 2026 Ozonewell - Casablanca
                </div>
            </div>
        </div>
    );
};

export default Login;