import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Catalogue from './components/Catalogue';
import Solutions from './components/Solutions';
import Products from './components/Products';
import AirOzoneDetails from './components/AirOzoneDetails';
import EauOzoneDetails from './components/EauOzoneDetails';
import IndustOzoneDetails from './components/IndustOzoneDetails';
import AgriOzoneDetails from './components/AgriOzoneDetails';
import EtabOzoneDetails from './components/EtabOzoneDetails';
import CuisineOzoneDetails from './components/CuisineOzoneDetails';
import HorecaOzoneDetails from './components/HorecaOzoneDetails';
import CliniqueOzoneDetails from './components/CliniqueOzoneDetails';
import HotelOzoneDetails from './components/HotelOzoneDetails';
import EcoleOzoneDetails from './components/EcoleOzoneDetails';
import SportOzoneDetails from './components/SportOzoneDetails';
import CoiffeurOzoneDetails from './components/CoiffeurOzoneDetails';
import FroidOzoneDetails from './components/FroidOzoneDetails';
import Certificats from './components/Certificats';
import Documentation from './components/Documentation';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import ScrollToTop from './components/ScrollToTop'; // Import de votre fonction
import Chatbot from './components/Chatbot'; // Import du chatbot
import './App.css';

export default function App() {
  return (
    <Router>
      {/* Appel de la fonction de scroll ici */}
      <ScrollToTop />
      
      <div className="app">
        <TopBar />
        <Navbar />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/solutions/air-ozone" element={<AirOzoneDetails />} />
          <Route path="/solutions/eau-ozone" element={<EauOzoneDetails />} />
          <Route path="/solutions/agroalimentaire" element={<IndustOzoneDetails />} />
          <Route path="/solutions/agriculture" element={<AgriOzoneDetails />} />
          <Route path="/solutions/bureau" element={<EtabOzoneDetails />} />
          <Route path="/solutions/cuisine" element={<CuisineOzoneDetails />} />
          <Route path="/solutions/horeca" element={<HorecaOzoneDetails />} />
          <Route path="/solutions/clinique" element={<CliniqueOzoneDetails />} />
          <Route path="/solutions/hotel-ozone" element={<HotelOzoneDetails />} />
          <Route path="/solutions/ecole" element={<EcoleOzoneDetails />} />
          <Route path="/solutions/sport" element={<SportOzoneDetails />} />
          <Route path="/solutions/coiffure" element={<CoiffeurOzoneDetails />} />
          <Route path="/solutions/chambres-froides" element={<FroidOzoneDetails />} />
    
          <Route path="/certificats" element={<Certificats />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
    
        <Footer />
        <Chatbot /> {/* Ajout du chatbot */}
      </div>
    </Router>
  );
}