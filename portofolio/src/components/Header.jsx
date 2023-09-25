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
              <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">Mes compétences</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">Mes Projets</NavLink>
            </li>
            <li>
            <NavLink to="/contact" activeClassName="active" onClick={() => contactFormRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/langue" activeClassName="active">Dark mode</NavLink>
            </li>
          </ul>
        </nav>
      </div>    
    </header>
  );
};

export default Header;
