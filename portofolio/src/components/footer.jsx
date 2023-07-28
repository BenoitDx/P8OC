import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='Footer-container'>
      <p>&copy; {new Date().getFullYear()} BenoîtDx. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
