import React from "react";
import '../styles/Skills.css'
import logoImage from '../asset/logo/Vs.png'
const Skills = () => {
    return (
        
        <div class="box-timeline">
            
        <div class="ligne"></div>

        <div class="rond r1" data-anim="1"><i class="fa-solid fa-code ikon"></i></div>
        <div class="rond r2" data-anim="2"><i class="fa-solid fa-terminal ikon"></i></div>
        <div class="rond r3" data-anim="3"><i class="fa-solid fa-magnifying-glass ikon"></i></div>
        <div class="rond r4" data-anim="4"><i class="fa-solid fa-laptop-code ikon"></i></div>
        
        
        <div class="box b1" data-anim="1">
            <h2>Front-End</h2>
            <p>
            À l'aise avec HTML, CSS, React et JavaScript, je crée des interfaces web conviviales pour offrir de bonnes expériences aux utilisateurs.
            </p>
            <a href="#" class="btn">Projet Front-End</a>
        </div>
        <div class="box b2" data-anim="2">
            <h2>Back-End</h2>
        
                <p>Je travaille avec Node.js, MongoDB, SQL et Express.js pour soutenir le développement d'applications web robustes.</p>
            
        
            <a href="#" class="btn">Projet Back-End</a>
        </div>
        <div class="box b3" data-anim="3">
            <h2> SEO</h2>
            <p>Je m'intéresse à l'optimisation pour les moteurs de recherche SEO pour améliorer la visibilité en ligne et maximiser la performance des sites web.</p>
            <a href="#" class="btn">SEO</a>
        </div>
        <div class="box b4" data-anim="4">
            <h2>Environement et outils</h2>
            <p>
            J'utilise des outils tels que VSCode, Git, Docker, et des environnements Windows/Linux pour faciliter mon travail de développement.
            </p>
            <a href="#" class="btn">Environnement & Outils</a>
        </div>
    </div>

      );
      
};

export default Skills;
