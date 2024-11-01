import Button from "./Button"
import  './About.css'
function About() {
  return (
    <div className="about">
        <div className="img-wrapper">
            <img src="srikar.jpg" alt="srikar's image" className="img" />
        </div>
        <div className="description">
            <h1 >Hello! I'm <span className="name">Srikar Akella</span></h1>
            <p>I am Full-Stack Developer specializing in React, TypeScript, Java, Springboot and Go. I hold a Master of Applied Computer Science from Concordia University and Bachelor of Computer Science & Engg from VIT Vellore</p>
            <div className="socials">
                <a href="#"><img src="brand-linkedin.svg" alt="linked logo" /></a>
                <a href=""><img src="brand-github.svg" alt="github logo" /></a>
                <Button value="Let's connect" link="/"/>
            </div>
        </div>
    </div>
  )
}

export default About