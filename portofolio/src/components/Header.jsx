import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'
import logoImage from '../asset/portrait.png'

const Header = () => {
  return (
    <header>
      <div className='Header-container'>
        <div className="header-logo">
          <img src={logoImage} alt="Logo" /> {/* Ajouter votre image ici */}
          <h1>BenoîtDx</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>    
    </header>
  );
};

export default Header;