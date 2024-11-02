import './Education.css'
function Education() {
  return (
    <section className="education">
            <h1>Education</h1>
            <div className='concordia-logo'><img src="logo1.png" alt="" className="education-logo"/></div>
            <p className='education-info'>
                <h3>Concordia University</h3> <span className='degree'>Master of Applied Computer Science</span> <span className='date'>Graduated 2024</span>
            </p>

            <div className='logo'><img src="logo2.png" alt="" className="education-logo" /></div>
            <p className='education-info'><h3>Vellore Institute of Technology</h3> <span className='degree'>Bachelor of Technology in Computer Science && Engg</span> <span className='date'>Graduated 2022</span></p>
        
    </section>
  )
}

export default Education