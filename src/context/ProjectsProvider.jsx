import { useEffect, useMemo, useState } from "react";
import ProjectsContext from './ProjectsContext'
import PropTypes from 'prop-types';
import { projects } from '../data/projectsData'

function ProjectsProvider({ children }) {
  const [dataProjects, setProjects] = useState([]);

  const data = useMemo(() => ({
    dataProjects,
  }), [dataProjects]);

  useEffect(() => {
    setProjects(projects)
  }, [])

  return (
    <ProjectsContext.Provider value={ data }>
      {children}
    </ProjectsContext.Provider>
  )
}

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectsProvider
