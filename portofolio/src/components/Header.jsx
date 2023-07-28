import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css'


const Header = () => {
  return (
    <header>
    <div className='Header-container'>
      <h1>BenoîtDx</h1>
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