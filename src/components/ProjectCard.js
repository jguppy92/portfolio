import React from 'react'
import { projects } from '../data/ProjectsData'

function ProjectCard() {
  
  const [projectsIndex, setProjectsIndex] = React.useState(0)

  const handleNext = () => {
    if (projectsIndex >= (projects.length - 1)) {
      setProjectsIndex(0)
    } else if (projectsIndex <= (projects.length - 1)) {
      setProjectsIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (projectsIndex <= 0) {
      setProjectsIndex(projects.length - 1)
    } else {
      setProjectsIndex(prev => prev - 1)
    }
  }



  return (
    <>
      <div className="columns">
        <div className="column is-two-fifths">
          <h1 className="title"><span className="purple-text">P</span>rojects</h1>
          <figure className="image is-16by9">
            <img src={projects[projectsIndex].image} alt={projects[projectsIndex].title}/>
          </figure>
        </div>
        <div className="column is-three-fifths">
          <div className="proj-text-container">
            <h1 className="title">{projects[projectsIndex].title}</h1>
            <p className="text">
              {projects[projectsIndex].info}
            </p>
            <div className="proj-techs">
              {projects[projectsIndex].techIcons.map(icon =>(
                <i key={icon} className={icon}></i>
              ))}
            </div>
            <div className="project-links">
              <a href={projects[projectsIndex].deployedLink} className="button is-rounded proj-button">
                <i className="devicon-firefox-plain small-icon"></i>
              </a>
              <a href={projects[projectsIndex].github} className="button is-rounded proj-button">
                <i className="devicon-github-original small-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="button is-inverted" onClick={handlePrevious}>Previous</button>
        <button className="button is-inverted" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default ProjectCard