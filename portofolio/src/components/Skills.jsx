import React from "react";
import '../styles/Skills.css'

// Importe les images des logos au format WebP
import logoHTML from '../asset/logos/html.webp';
import logoCSS from '../asset/logos/css.webp';
import logoReact from '../asset/logos/react.webp';
import logoJavaScript from '../asset/logos/javascript.webp';

import logoNodeJS from '../asset/logos/nodejs.webp';
import logoMongoDB from '../asset/logos/mongodb.webp';
import logoSQL from '../asset/logos/sql.webp';
import logoExpressJS from '../asset/logos/expressjs.webp';

import logoSEO from '../asset/logos/seo.webp'

import logoVSCode from '../asset/logos/vscode.webp';
import logoGit from '../asset/logos/git.webp';
import logoDocker from '../asset/logos/docker.webp';
import logoGithub from '../asset/logos/github.webp';
import logoLinux from '../asset/logos/linux.webp';

const Skills = () => {
    return (
        <div className="box-timeline">
            <div className="ligne"></div>
            
            <div className="rond r1" data-anim="1"><i className="fa-solid fa-code ikon"></i></div>
            <div className="rond r2" data-anim="2"><i className="fa-solid fa-terminal ikon"></i></div>
            <div className="rond r3" data-anim="3"><i className="fa-solid fa-magnifying-glass ikon"></i></div>
            <div className="rond r4" data-anim="4"><i className="fa-solid fa-laptop-code ikon"></i></div>
            
            <div className="box b1" data-anim="1">
                <h2 className="title-skills">Front-End</h2>
                <p>
                    À l'aise avec HTML, CSS, React et JavaScript, je crée des interfaces web conviviales pour offrir de bonnes expériences aux utilisateurs.
                </p>
                {/* Logo HTML */}
                <img src={logoHTML} alt="HTML Logo" className="logo" />
                {/* Logo CSS */}
                <img src={logoCSS} alt="CSS Logo" className="logo" />
                {/* Logo React */}
                <img src={logoReact} alt="React Logo" className="logo" />
                {/* Logo JavaScript */}
                <img src={logoJavaScript} alt="JavaScript Logo" className="logo" />
            </div>
            <div className="box b2" data-anim="2">
                <h2 className="title-skills">Back-End</h2>
                <p>
                    Je travaille avec Node.js, MongoDB, MySQL et Express.js pour soutenir le développement d'applications web robustes.
                </p>
                {/* Logo Node.js */}
                <img src={logoNodeJS} alt="Node.js Logo" className="logo" />
                {/* Logo MongoDB */}
                <img src={logoMongoDB} alt="MongoDB Logo" className="logo" />
                {/* Logo SQL */}
                <img src={logoSQL} alt="SQL Logo" className="logo" />
                {/* Logo Express.js */}
                <img src={logoExpressJS} alt="Express.js Logo" className="logo xplogo" />
            </div>
            <div className="box b3" data-anim="3">
                <h2 className="title-skills"> SEO</h2>
                <p>
                    Je m'intéresse à l'optimisation pour les moteurs de recherche (SEO) pour améliorer la visibilité en ligne et maximiser la performance des sites web.
                </p>
                {/* Logo SEO */}
                <img src={logoSEO} alt="SEO Logo" className="logo" />
            </div>
            <div className="box b4" data-anim="4">
                <h2 className="title-skills">Environnement et outils</h2>
                <p>
                    J'utilise des outils tels que VSCode, Git, Docker, et des environnements Windows/Linux pour faciliter mon travail de développement.
                </p>
                {/* Logo VSCode */}
                <img src={logoVSCode} alt="VSCode Logo" className="logo" />
                {/* Logo Git */}
                <img src={logoGit} alt="Git Logo" className="logo" />
                {/* Logo Docker */}
                <img src={logoDocker} alt="Docker Logo" className="logo" />
                {/* Logo Github */}
                <img src={logoGithub} alt="Github Logo" className="logo" />
                {/* Logo Linux */}
                <img src={logoLinux} alt="Linux Logo" className="logo" />
            </div>
        </div>
    );
};

export default Skills;
