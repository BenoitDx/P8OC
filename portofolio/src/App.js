import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import Footer from './components/footer';
import About from './components/About';
import Welcome from './components/Welcome';
import './styles/global.css'; // Importer le fichier global.css


function App() {
  return (
    <div>
        <Header />
        <Welcome />
        <About />
        <Footer />
    </div>
  );
}

export default App;