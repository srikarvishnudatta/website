import Button from "./Button"
import  './About.css'
function About() {
  return (
    <div className=" about">
        <div className="img-wrapper">
            <img src="srikar.jpg" alt="srikar's image" className="img" />
        </div>
        <div className="description">
            <h1 >Hello! I'm <span 
            className="name">Srikar Akella</span></h1>
            <p>I am Full-Stack Developer specializing in React, TypeScript, Java, Springboot and Go. </p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/srikar-akella-0207411aa/"><img src="brand-linkedin.svg" alt="linked logo" /></a>
                <a href="https://github.com/srikarvishnudatta"><img src="brand-github.svg" alt="github logo" /></a>
                <Button value="Let's connect" link="mailto:srikarakella28@gmail.com"/>
            </div>
        </div>
    </div>
  )
}

export default About