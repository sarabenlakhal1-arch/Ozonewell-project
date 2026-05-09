import React, { useState, useEffect } from 'react';
import API_URL from '../config'; // <--- 1. Importation de l'URL centralisée
import './AdminPanel.css';

// --- ICONES SVG ---
const IconPlus = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const IconTrash = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);
const IconPencil = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const IconImage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
);

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ 
        name: '', power: '', volume: '', category: 'Ozone', image: null 
    });

    useEffect(() => { 
        fetchProducts(); 
    }, []);

    const fetchProducts = async () => {
        try {
            // <--- 2. Utilisation de la variable API_URL
            const response = await fetch(`${API_URL}/api/products`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (error) { 
            console.error("Erreur chargement catalogue:", error); 
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('name', formData.name);
        data.append('power', formData.power);
        data.append('volume', formData.volume);
        data.append('category', formData.category);
        
        if (formData.image) {
            data.append('file', formData.image);
        }

        // <--- 3. Utilisation de la variable pour l'URL de POST ou PUT
        const url = editingProduct 
            ? `${API_URL}/api/products/${editingProduct.id}` 
            : `${API_URL}/api/products`;
        
        const method = editingProduct ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, { 
                method: method, 
                body: data 
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Erreur: ${JSON.stringify(errorData.detail)}`);
            } else {
                console.log("Produit enregistré avec succès !");
                closeModal();
                fetchProducts();
            }
        } catch (error) { 
            console.error("Erreur lors de l'envoi:", error);
            alert("Impossible de contacter le serveur.");
        }
    };

    const handleDelete = async (id) => {
        if(window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
            try {
                // <--- 4. Utilisation de la variable pour DELETE
                const response = await fetch(`${API_URL}/api/products/${id}`, { 
                    method: 'DELETE' 
                });
                if (response.ok) fetchProducts();
            } catch (error) {
                console.error("Erreur suppression:", error);
            }
        }
    };

    // ... (Le reste du code reste identique)
    const openModal = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setFormData({ 
                name: product.name, 
                power: product.power, 
                volume: product.volume, 
                category: product.category, 
                image: null 
            });
        } else {
            setEditingProduct(null);
            setFormData({ name: '', power: '', volume: '', category: 'Ozone', image: null });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    return (
        <div className="ozonewell-admin">
            <aside className="app-sidebar">
                <div className="brand-header">
                    <h2>OZONEWELL</h2>
                    <span className="brand-subtitle">Console de Gestion</span>
                </div>
            </aside>
            
            <main className="app-main-content">
                <header className="content-header">
                    <h1>Catalogue Produits</h1>
                    <button className="btn-add-main" onClick={() => openModal()}>
                        <IconPlus /> Nouveau Produit
                    </button>
                </header>

                <div className="data-table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Modèle</th>
                                <th>Puissance</th>
                                <th>Volume</th>
                                <th>Catégorie</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((p) => (
                                    <tr key={p.id}>
                                        <td className="col-name">{p.name}</td>
                                        <td>{p.power}</td>
                                        <td>{p.volume}</td>
                                        <td><span className={`badge ${p.category}`}>{p.category}</span></td>
                                        <td className="col-actions">
                                            <button className="btn-icon btn-edit" onClick={() => openModal(p)} title="Modifier"><IconPencil /></button>
                                            <button className="btn-icon btn-delete" onClick={() => handleDelete(p.id)} title="Supprimer"><IconTrash /></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>Aucun produit trouvé</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <header className="modal-header">
                                <h3>{editingProduct ? "Modifier" : "Ajouter"} le Modèle</h3>
                                <button className="modal-close" onClick={closeModal}>×</button>
                            </header>
                            <form onSubmit={handleSubmit} className="modal-form">
                                <label>Nom du modèle</label>
                                <input 
                                    type="text" 
                                    placeholder="Ex: OZO 1250"
                                    value={formData.name} 
                                    onChange={e => setFormData({...formData, name: e.target.value})} 
                                    required 
                                />
                                
                                <div className="form-row-2">
                                    <div className="input-group">
                                        <label>Puissance</label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: 20W"
                                            value={formData.power} 
                                            onChange={e => setFormData({...formData, power: e.target.value})} 
                                            required 
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label>Volume</label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: 100m3"
                                            value={formData.volume} 
                                            onChange={e => setFormData({...formData, volume: e.target.value})} 
                                            required 
                                        />
                                    </div>
                                </div>
                                
                                <label>Catégorie</label>
                                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                                    <option value="Ozone">Générateur Ozone</option>
                                    <option value="Purificateur">Purificateur d'air</option>
                                </select>

                                <label>Photo du produit</label>
                                <div className="file-input-container">
                                    <input type="file" id="file" onChange={handleFileChange} accept="image/*" hidden />
                                    <label htmlFor="file" className="file-label">
                                        <IconImage /> {formData.image ? formData.image.name : "Choisir une image"}
                                    </label>
                                </div>
                                
                                <footer className="modal-footer">
                                    <button type="button" className="btn-secondary" onClick={closeModal}>Annuler</button>
                                    <button type="submit" className="btn-save">Confirmer l'enregistrement</button>
                                </footer>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminPanel;