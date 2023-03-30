import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef} from "react";
import Highlights from "../components/Highlights";


const PageProject = () => {
  const { project_slug } = useParams();
  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
  const [thisProjectData, setThisProjectData] = useState([])

  
 useEffect(()=>{
  if(isProjectsDataLoaded){
    let thisProject; 
    thisProject = projectsData.find(project => project.slug === project_slug);
    console.log(thisProject);
    setThisProjectData(thisProject);
  }
 },[isProjectsDataLoaded,projectsData,project_slug])


  return(
  <>
    <section className={`project project-${project_slug}`} >
   
      {(isProjectsDataLoaded && thisProjectData.length!==0) ?
      <>
        <div className="default">
          <h1>{thisProjectData.acf.project_title}</h1>
          <p id="sub-heading">{thisProjectData.acf.project_description}</p>
        
          <h3>Overview</h3>
          <p>{thisProjectData.acf.overview}</p>
          <h3>Tech Used</h3>
          <p>{thisProjectData.acf.tech_used}</p>
        </div>
        <h2>Highlights</h2>
        <div className="highlights">
          <Highlights highlights = { thisProjectData.acf.highlights} />
        </div>
       </>
      :
      <>
      <p>Loading...</p>
      </>  
      }
    </section>
  
    </>
  );
}


export default PageProject;