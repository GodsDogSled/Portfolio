import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Highlights from "../components/Highlights";


const PageProject = () => {
  const { project_slug } = useParams();

  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
  const [thisProjectData, setThisProjectData] = useState(false);

  let dynamicNavCount = 1; //keeps track of the number of highlight headings

  useEffect(() => {
    if (isProjectsDataLoaded) {
      if (Array.isArray(projectsData)) {
        let thisProject = projectsData.find((project) => project.slug === project_slug);
        setThisProjectData(thisProject);
      }
    }
  }, [isProjectsDataLoaded, projectsData, project_slug])


  return (
    <>
      <section className={`project project-${project_slug}`} >
        {(isProjectsDataLoaded && thisProjectData) ?
          <>
            <div className="default">
              <div className="left-side">
                <div className="project-landing">
                  <h1 id={`${thisProjectData.acf.project_title}`}>{thisProjectData.acf.project_title}</h1>
                  <p id="sub-heading">{thisProjectData.acf.project_description}</p>
                  <img src={thisProjectData.acf.project_first_image.sizes.large} alt={`${thisProjectData.acf.project_title}-landingpage`} />
                </div>

                <section className="basic-info">
                  <span id="1" className="heading-number">01</span>
                  <h2>Overview</h2>
                  <div className="basic-info-content">
                    <p>{thisProjectData.acf.overview}</p>

                    <div className="tech-used">
                      <h3>Tech Used</h3>
                      <ul>{thisProjectData.acf.tech_used.map(tech =>
                        <li>{tech.tech_name}</li>)}
                      </ul>
                    </div>

                    <div className="github">
                      <h3>GitHub Repository</h3>
                      <a href={`${thisProjectData.acf.github_link}`}>Checkout my commits<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z" /></svg></a>
                    </div>
                  </div>
                </section>

              </div>


              <section className="live-links">
                <nav className="vert-nav">
                  <ul>
                    <li><a href={`#${thisProjectData.acf.project_title}`}>{thisProjectData.acf.project_title}</a></li>
                    <li><a href="#1">01</a></li>
                    {thisProjectData.acf.highlights.map((highlight) => {
                      if (highlight.acf_fc_layout === "heading") {
                        dynamicNavCount++;
                        return (<li><a href={`#${dynamicNavCount}`}>0{dynamicNavCount}</a></li>);
                      }
                      else return null;
                    })
                    }
                  </ul>
                </nav>

                <a className="live-site" href={`${thisProjectData.acf.live_site_link}`} ><span> <p>Live <br></br> Site</p> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z" /></svg></span></a>

              </section>

            </div>

            <section className="highlights">

              <Highlights highlights={thisProjectData.acf.highlights} />
            </section>
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