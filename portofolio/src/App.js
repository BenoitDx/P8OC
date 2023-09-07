import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import Footer from './components/footer';

import Welcome from './components/Welcome';
import Skills from './components/Skills';
import './styles/global.css'; // Importer le fichier global.css


function App() {
  return (
    <div>
        <Header />
        <Welcome />
        <Skills />
        <Footer />
    </div>
  );
}

export default App;