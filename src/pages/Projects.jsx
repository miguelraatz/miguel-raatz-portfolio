import { useContext } from 'react';
import CardProjects from '../components/CardProjects';
import ProjectsContext from '../context/ProjectsContext';

export default function Projects () {

  const { dataProjects } = useContext(ProjectsContext)
  
  
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Ultimos <span>Projetos</span></h2>
      <div className="portfolio-container">
        {dataProjects.map((project) => (
          <CardProjects
          name={project.name}
          image={project.image}
          linkRepo={project.linkRepo}
          linkDeploy={project.linkDeploy}
          description={project.description}
          skills={project.skills}
          key={project.name}/>
        ))}
      </div>
    </section>
  )
}