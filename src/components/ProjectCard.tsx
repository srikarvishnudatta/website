import Button from "./Button"
import { ProjectType } from "./projects"

function ProjectCard(props: ProjectType) {
  return (
    <div className="project">
        <div className="project-content">
        <h2>{props.projectName}</h2>
        <p>{props.projectDescription}</p>
        <p>{props.projectStack}</p>
        <Button link="/" value="Github" width={100}/>
        </div>
        <div className="project-img">
            
        </div>
    </div>
  )
}

export default ProjectCard