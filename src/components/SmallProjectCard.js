


function SmallProjectCard(projectObject){
  return(
    <>
    <article>
      
      <h3>{projectObject.project.acf.project_title}</h3>
      <p>{projectObject.project.acf.project_description}</p>
      
     </article>
    </>
   
  )
}

export default SmallProjectCard