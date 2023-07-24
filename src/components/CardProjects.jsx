import PropTypes from 'prop-types'

function CardProjects({name, image, linkRepo, linkDeploy, description, skills}) {
  return (
    <div className="portfolio-box">
      <h4>{name}</h4>
      <img className="img-project" alt="imagem-app-recipe" src={image}/>
      <p className="description-project">{description}</p>
      <p className="skills-used">Tecnologias Utilizadas:</p>
      <p className="skills">{skills}</p>
      <div className="buttons-projects">
        <a className="btn-download" rel="noreferrer" target="_blank" href={linkRepo}>Repositório</a>
        {linkDeploy && (<a className="btn-download" rel="noreferrer" target="_blank" href={linkDeploy}>Deploy</a>)}
      </div>
    </div>
  )
}

CardProjects.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  linkRepo: PropTypes.string.isRequired,
  linkDeploy: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
}

export default CardProjects