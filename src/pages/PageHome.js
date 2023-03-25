import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import { appTitle, apiPath_pages } from "../global/globals";
import  SmallProjectCard  from "../components/SmallProjectCard";
import { apiPath_projects } from "../global/globals";

const PageHome = () => {

  // API Variables
  const projectsPath = `${apiPath_projects}`
  const [homePageData, setData] = useState([])
  const [isHomePageLoaded, setLoadStatus] = useState(false)

  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
 

  useEffect(() => {//Creates the Circle of rotating text
    const text =document.querySelector('.text p') 
    text.innerHTML = text.innerText.split("").map(
      (char, i) => `<span style = "transform:rotate(${i*6.4}deg)">${char}</span>`
    ).join("")


    
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(projectsPath)
        if ( response.ok ) {
            const data = await response.json()
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
      </div>

      <div className="circle">
        <div className ="text">
          <p >Developer * Designer * Dreamer *</p>
        </div>
      </div>
      <h1>Premium <br></br> Gabe</h1>
      
    </section>

    <section className="work">
      <h2>Work</h2>
      {(isProjectsDataLoaded) ?
      <>
        {projectsData.map((project)=>{
          return(
            <SmallProjectCard
              key={project.id}
              project = {project}
            />
          )
        })}
      </>
      :
      <>
      <p>Failed to Load</p>
      </>  
      }
      
    </section>
   
    
    </>
    
  )
}


export default PageHome;