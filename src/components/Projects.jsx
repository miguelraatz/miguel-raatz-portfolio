import recipes from '../images/recipes-app.png';
import trivia from '../images/trivia.png';
import trybewallet from '../images/trybewallet.png';
import nodeExpress from '../images/node-express.png';

import {
  SiJavascript,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiDocker,
  SiSequelize,
} from 'react-icons/si'

export default function Projects () {
  return(
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Ultimos <span>Projetos</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <h4>Recipes <span>App</span></h4>
          <img className="img-project"src={recipes} alt="imagem-app-recipe" />
          <div className="skills-project">
            <SiJavascript className="project-icon"/>
            <SiCss3 className="project-icon" />
            <SiReact className="project-icon" />
          </div>
          <div className="buttons-projects">
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://github.com/miguelraatz/react-contextApi-recipes-app">Repositório</a>
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://recipes-app-two-kappa.vercel.app/">Deploy</a>
          </div>
        </div>

        <div className="portfolio-box">
          <h4>Trybe <span>Wallet</span></h4>
          <img className="img-project"src={trybewallet} alt="imagem-app-recipe" />
          <div className="skills-project">
            <SiJavascript className="project-icon"/>
            <SiCss3 className="project-icon" />
            <SiReact className="project-icon" />
          </div>
          <div className="buttons-projects">
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://github.com/miguelraatz/react-redux-trybeWallet">Repositório</a>
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://react-redux-trybe-wallet.vercel.app/">Deploy</a>
          </div>
        </div>

        <div className="portfolio-box">
          <h4>Triv<span>ia</span></h4>
          <img className="img-project"src={trivia} alt="imagem-app-recipe" />
          <div className="skills-project">
            <SiJavascript className="project-icon"/>
            <SiCss3 className="project-icon" />
            <SiReact className="project-icon" />
          </div>
          <div className="buttons-projects">
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://github.com/miguelraatz/react-redux-trivia">Repositório</a>
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://game-trivia-rust.vercel.app/">Deploy</a>
          </div>
        </div>

        <div className="portfolio-box">
          <h4>Blogs <span>API</span></h4>
          <img className="img-project"src={nodeExpress} alt="imagem-app-recipe" />
          <div className="skills-project">
            <SiNodedotjs className="project-icon"/>
            <SiMysql className="project-icon" />
            <SiExpress className="project-icon" />
            <SiDocker className="project-icon" />
            <SiSequelize className="project-icon" />
          </div>
          <div className="buttons-projects">
            <a className="btn-download" rel="noreferrer" target="_blank" href="https://github.com/miguelraatz/react-redux-trivia">Repositório</a>
          </div>
        </div>

      </div>
    </section>
  )
}