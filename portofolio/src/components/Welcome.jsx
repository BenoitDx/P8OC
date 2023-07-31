import React from 'react';
import logoImage from '../asset/portrait.png'
import '../styles/Welcome.css'

const DeveloperPresentation = () => {
  return (
    <div className='Welcome-container'>
      <img className='Welcome-img'
        src={logoImage}
        alt="Votre nom"
      />
            <h1 className='Welcome-title'>Bienvenue. </h1>
            <div class="typewriter">
  <span class="text">Ceci et un test poor verifier le fonctionnement de cette animation... !</span>
</div>
    </div>
  );
};

export default DeveloperPresentation;