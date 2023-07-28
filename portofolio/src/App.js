import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import Footer from './components/footer';
import ContactForm from './components/ContactForm';
import DeveloperPresentation from './components/Welcome';
import './styles/global.css'; // Importer le fichier global.css
import './styles/stars.scss'; // Importer le fichier stars.scss

function App() {
  return (
    <div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        {/* Ajoutez les autres étoiles ici */}
      </div>
        <Header />
        <DeveloperPresentation />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;