import React from "react";
import '../styles/Skills.css'
import logoImage from '../asset/Vs.png'
const Skills = () => {
    return (
        
        <div class="box-timeline">
            
        <div class="ligne"></div>

        <div class="rond r1" data-anim="1"><i class="fa-solid fa-code ikon"></i></div>
        <div class="rond r2" data-anim="2"><i class="fa-solid fa-terminal ikon"></i></div>
        <div class="rond r3" data-anim="3"><i class="fa-solid fa-magnifying-glass ikon"></i></div>
        

        <div class="box b1" data-anim="1">
            <h2>Front-End</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi maxime doloremque tempora exercitationem, minima eos impedit odit quia culpa voluptatum harum unde repellat commodi?
            </p>
            <a href="#" class="btn">Projet Front-End</a>
        </div>
        <div class="box b2" data-anim="2">
            <h2>Back-End</h2>
            <img className='logimg' src={logoImage} alt=""/>
            <a href="#" class="btn">Projet Back-End</a>
        </div>
        <div class="box b3" data-anim="3">
            <h2>SEO</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nisi maxime doloremque tempora exercitationem, minima eos impedit odit quia culpa voluptatum harum unde repellat commodi?
            </p>
            <a href="#" class="btn">Projet SEO</a>
        </div>
    </div>

      );
      
};

export default Skills;
