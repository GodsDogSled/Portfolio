import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Highlights from "../components/Highlights";


const PageProject = () => {
  const { project_slug } = useParams();

  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
  const [thisProjectData, setThisProjectData] = useState(false);






  // console.log(thisProject);
  useEffect(() => {
    if (isProjectsDataLoaded) {
      if (Array.isArray(projectsData)) {
        console.log("Yep its array");
        let thisProject = projectsData.find((project) => project.slug === project_slug);
        console.log(thisProject);
        setThisProjectData(thisProject);
      }
    }
  }, [isProjectsDataLoaded, projectsData, project_slug])


  return (
    <>
      <section className={`project project-${project_slug}`} >
        {console.log(thisProjectData)}
        {(isProjectsDataLoaded && thisProjectData) ?
          <>
            <div className="default">
              <div className="left-side">
                <div className="project-landing">
                  <h1>{thisProjectData.acf.project_title}</h1>

                  <p id="sub-heading">{thisProjectData.acf.project_description}</p>
                </div>
                <img src={thisProjectData.acf.project_first_image.sizes.large} alt={`${thisProjectData.acf.project_title}-landingpage`} />

                <section className="basic-info">
                  <div className="overview">
                    <h2>Overview</h2>
                    <p>{thisProjectData.acf.overview}</p>
                  </div>
                  <div className="tech-used">
                    <h3>Tech Used</h3>
                    <ul>{thisProjectData.acf.tech_used.map(tech => <li>{tech.tech_name}</li>)}</ul>
                  </div>

                  <div className="github">
                    <h3>GitHub Repository</h3>
                    <a href={`${thisProjectData.acf.github_link}`}>{thisProjectData.acf.github_link}</a>
                  </div>

                </section>

              </div>

              <div className="live-links">
                <div className="live-site">
                  <h3>
                    <a href="#">Visit Live Site</a> <span><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z" /></svg></span>
                  </h3>
                </div>
              </div>

            </div>

            <div className="highlights">

              <Highlights highlights={thisProjectData.acf.highlights} />
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