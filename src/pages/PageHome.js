import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import { appTitle, apiPath_pages } from "../global/globals";
import  SmallProjectCard  from "../components/SmallProjectCard";
import { apiPath_projects} from "../global/globals";

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
    <main>
    <section className="landing-section">
       
      <div className="threejs">
      </div>

     
      <div className="premium-gabe">
        <h1>Premium <br></br> Gabe</h1>
        
      </div>
      
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

        <h2>About</h2>
        {(isHomePageLoaded)? <p>{homePageData.acf.aboutMe}</p>: <p>Failed to Load</p>}
        <h2>{console.log(homePageData)}</h2>
        {(isHomePageLoaded)? <p>{homePageData.acf.email}</p>: <p>Failed to Load</p>}
      </>
      :
      <>
      <p>Failed to Load</p>
      </>  
      }
      
    </section>
   
    </main>
    </>
    
  )
}


export default PageHome;