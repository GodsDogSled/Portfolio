import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import { appTitle, apiPath_pages } from "../global/globals";
import  SmallProjectCard  from "../components/SmallProjectCard";
import { apiPath_projects} from "../global/globals";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame} from '@react-three/fiber';
import Cube from "../components/Cube";
import Particles from "../components/Particles";

const sizes = {
  width: window.innerWidth,
  height: window.innnerHight
}

const PageHome = () => {

  // API Variables
  const projectsPath = `${apiPath_projects}`
  const pagesPath = `${apiPath_pages}`
  const [homePageData, setData] = useState([])
 
  const [isHomePageLoaded, setLoadStatus] = useState(false)

  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
 

  // useEffect(() => {//Creates the Circle of rotating text
  //   const text =document.querySelector('.text p') 
  //   text.innerHTML = text.innerText.split("").map(
  //     (char, i) => `<span style = "transform:rotate(${i*6.5}deg)">${char}</span>`
  //   ).join("")
  // }, [])
  
  useEffect(() => {
    const fetchData = async () => {
        const projectResponse = await fetch(pagesPath)
        
        if ( projectResponse.ok) {
            const data = await projectResponse.json()
            setData(data)
            setLoadStatus(true)
        } else {
            setLoadStatus(false)
        }
    }
    fetchData()
}, [projectsPath])


  


  return(
    <>
    
    <section className="landing-section">
      <div className="threejs">
        <Canvas >
          <Cube />
          <ambientLight />
        </Canvas>
      </div>

      <div className="premium-gabe">
        <h1>Premium <br></br> Gabe</h1>
      </div>
    </section>

    
    <main>
     
      {(isProjectsDataLoaded) ?
      <>
        <section id='work'>
          <h2>Work</h2>
          <div className="section-content">
            {projectsData.map((project)=>{
              return(
                <SmallProjectCard
                  key={project.id}
                  project = {project}
                />
              )
            })}
          </div>
        </section>

        <section id="about" >
          <h2>About</h2>
          <div className="section-content">
            {(isHomePageLoaded)? <p>{homePageData.acf.aboutMe}</p>: <p>Failed to Load</p>}
          </div>
        </section>

        <section id="contact" >
          <h2>Contact</h2>
          <div className="section-content">
            {(isHomePageLoaded)? <p>{homePageData.acf.email}</p>: <p>Failed to Load</p>}
          </div>
        </section>
      </>
      :
      <>
      <p>Failed to Load</p>
      </>  
      }
      
    
   
    </main>
    </>
    
  )
}


export default PageHome;