import ProjectCard from './ProjectCard'
import {data} from './projects'
import './ProjectCompnent.css'
function ProjectsComponent() {
  return (
<div className="projects">
        <h1>My Cool projects</h1>
        {data.map((value) => <ProjectCard {...value} />)}
      </div>  
      
    )
}

export default ProjectsComponent