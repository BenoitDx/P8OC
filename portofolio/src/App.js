import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import Footer from './components/footer';

import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Project from './components/Project';
import './styles/global.css'; // Importer le fichier global.css
import Carousel from './components/Carousel';
import ContactForm from './components/Contactform';


function App() {
  return (
    <div>
        <Header />
        <Welcome />
        <Skills />
        <Project />
        <Carousel />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default App;