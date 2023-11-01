import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { changeCursor } from "../features/cursorSlice";
import AnimatedText from "./AnimatedText";

function SmallProjectCard(projectObject) {
  const dispatch = useDispatch();
  const projectEnter = () => {
    dispatch(changeCursor("project"));
    const cursor = document.getElementById("cursor");
    cursor.innerHTML = "<p>VIEW</p>";
  }

  const elementLeave = () => {
    dispatch(changeCursor("default"));
    const cursor = document.getElementById("cursor");
    cursor.innerHTML = "";
  }

  function imageUpdate(imageSizes, title, work, description) {
    projectObject.updateImage(
      imageSizes, title, work, description,
    );
  }

  return (
    <>
      <article
        onMouseEnter={projectEnter}
        onMouseLeave={elementLeave}
        onMouseOver={() => imageUpdate(
          projectObject.project.acf.project_first_image,
          projectObject.project.acf.project_title,
          "design + development",
          projectObject.project.acf.project_description,
        )}
        className="small-project-card"
      >
        <Link to={`/projects/${projectObject.project.slug}`} className="project-link">
          <div className="text-content">
            <span className="number">0{projectObject.numb}</span>
            <div className="arrow-container">
              {/* <h3>{projectObject.project.acf.project_title}</h3> */}
              <h3><AnimatedText text={projectObject.project.acf.project_title} wait={.1} varient={"project"} /></h3>


              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.34 171.34">
                <rect className="cls-1" x="5.3" width="151.03" height="15" />
                <rect className="cls-1" x="156.34" width="15" height="15" />
                <rect className="cls-1" x="88.32" y="83.02" width="151.03" height="15" transform="translate(73.32 254.36) rotate(-90)" />
                <rect className="cls-1" x="-26.12" y="82.67" width="214.58" height="15" transform="translate(-39.99 83.8) rotate(-45)" />
                <rect className="cls-1" x="130.39" y="47.16" width="0" height="1.38" />
              </svg>
            </div>
            {/* <p>{projectObject.project.acf.project_description}</p> */}
          </div>
        </Link>
      </article>
    </>
  )
}

export default SmallProjectCard