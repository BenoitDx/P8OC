import React from 'react';
import logoImage from '../asset/portrait.png'

const DeveloperPresentation = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenue. </h1>
      <img
        src={logoImage}
        alt="Votre nom"
        style={{ width: '200px', borderRadius: '25%', marginBottom: '20px' }}
      />
              <p>
          Je suis un développeur full-stack passionné par la création d'applications web innovantes.
          J'ai une solide expérience dans le développement front-end et back-end, ainsi que dans la
          gestion de bases de données et le déploiement d'applications.
        </p>
        <p>
          Compétences clés :
          - Langages de programmation : JavaScript, Python, Java
          - Frameworks : React, Node.js, Express, Django
          - Bases de données : MySQL, MongoDB
          - Outils : Git, Webpack, npm
          - Déploiement : AWS, Heroku
        </p>
        <p>
          Je suis constamment à la recherche de nouvelles technologies et de défis pour améliorer mes compétences
          et créer des solutions innovantes pour les utilisateurs. Si vous avez un projet intéressant, n'hésitez pas
          à me contacter !
        </p>

    </div>
  );
};

export default DeveloperPresentation;