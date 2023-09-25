import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const contactFormRef = useRef ();
  return (
    <header>
      <div className='Header-container'>
        <div className="header-logo">
          <h1>BenoîtDx</h1>
        </div>
        <nav>
          <ul>
            <li>
            <NavLink exact="true" to="/" activeclassname="active">Accueil</NavLink>
            </li>
            <li>
            <NavLink exact="true" to="/about" activeclassname="active">Mes compétences</NavLink>
            </li>
            <li>
            <NavLink exact="true" to="/projects" activeclassname="active">Mes Projets</NavLink>
            </li>
            <li>
            <NavLink exact="true" to="/contact" activeclassname="active" onClick={() => contactFormRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</NavLink>
            </li>
            <li>
            <NavLink exact="true" to="/langue" activeclassname="active">Dark mode</NavLink>
            </li>
          </ul>
        </nav>
      </div>    
    </header>
  );
};

export default Header;
