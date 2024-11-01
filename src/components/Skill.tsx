import './Skill.css'

interface SkillType{
    name:string;
}

function Skill(props: SkillType) {
  return (
    <li className='skill'>{props.name}</li>
  )
}

export default Skill