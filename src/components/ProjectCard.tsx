import Button from "./Button"
import { ProjectType } from "./projects"
import Skill from "./Skill"

function ProjectCard(props: ProjectType) {
  return (
    <div className="project">
        <div className="project-content">
        <h2>{props.projectName}</h2>
        <p>{props.projectDescription}</p>
        <ul className="skills-section">
          {props.projectStack.map((skill) => <Skill name={skill}/>)}
        </ul>
        <Button link={props.projectLink} value="Github" width={100}/>
        </div>
        <div className="project-img">
            
        </div>
    </div>
  )
}

export default ProjectCard