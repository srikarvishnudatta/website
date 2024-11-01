import About from "./components/About"
import Experience from "./components/Experience"
import ProjectsComponent from "./components/ProjectsComponent"
import 'animate.css'

function App() {

  return (
    <div className="animate__animated animate__fadeInUp main-container">
      <About />
      <Experience />
      <ProjectsComponent />
    </div>
  )
}

export default App
