


function SmallProjectCard(projectObject){
  return(
    <>
     <h3>{projectObject.project.acf.project_title}</h3>
     <p>{projectObject.project.acf.project_description}</p>
    </>
   
  )
}

export default SmallProjectCard