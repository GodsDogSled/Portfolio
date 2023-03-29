import {Link} from "react-router-dom";


function SmallProjectCard(projectObject){
  return(
    <>
    <article className="small-project-card">
      
      <h3>{projectObject.project.acf.project_title}</h3>
      <p>{projectObject.project.acf.project_description}</p>
      <Link to={`/projects/${projectObject.project.slug}`} className="project-link">
        <span className="link-text">View Project</span><span><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z"/></svg></span>
       
      </Link>
      
     </article>
    </>
   
  )
}

export default SmallProjectCard