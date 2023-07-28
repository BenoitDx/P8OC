import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './styles/global.css'; // Importer le fichier global.css

const App = () => {
  return (
    <div className="background-container">
      {/* Éléments de fond animés */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* Contenu de votre application */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;

