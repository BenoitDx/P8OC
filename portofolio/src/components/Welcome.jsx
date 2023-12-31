import React from 'react';
import logoImage from '../asset/portrait.png'
import '../styles/Welcome.css'

const DeveloperPresentation = () => {
  return (
    <div className='Welcome-main'>
    <div className='Welcome-container'>
      <img className='Welcome-img' src={logoImage} alt="Votre nom"/>
      <div className='Welcome-text'>
        <h1 className='Welcome-title'>Bienvenue, je suis Benoît</h1>
        <h2 className='Welcome-mention'>Développeur Web</h2>
        <h2 className='Welcome-about'>Mon objectif est de créer des expériences numériques de qualité en fournissant des solutions innovantes et efficaces. Je suis déterminé à contribuer à des projets significatifs en combinant créativité et compétences techniques. Travaillons ensemble pour atteindre vos objectifs.</h2>
        <button className='Welcome-button'>Contacter-moi</button>
      </div>
      <div className='Welcome-icon'>
        <i className="fa-solid fa-code"></i>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-terminal"></i>
      </div>
    </div>
    <div className='Welcome-scroll'>
    <i className="fa-solid fa-arrow-down animated-icon"></i>
    <h3>Mes compétences</h3>
      </div>  
    </div>
  );
};

export default DeveloperPresentation;