import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Highlights2 from "../components/Highlights2";
import VerticalNav from "../components/VerticalNav";
import { motion } from 'framer-motion';
import ResponsiveImage from "../components/ResonsiveImage";
import Cursor from "../components/CustomCursor";
import { changeCursor } from "../features/cursorSlice";




const PageProject = () => {
  const { project_slug } = useParams();
  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
  const [thisProjectData, setThisProjectData] = useState(false);
  const cursorType = useSelector((state) => state.cursor.value)

  const dispatch = useDispatch();

  const sections = useRef();

  setTimeout(function () { sections.current = document.querySelectorAll('.highlight-section') }, 100);

  useEffect(() => {
    if (isProjectsDataLoaded) {
      if (Array.isArray(projectsData)) {
        let thisProject = projectsData.find((project) => project.slug === project_slug);
        setThisProjectData(thisProject);
        dispatch(changeCursor("default"));
      }
    }
  }, [isProjectsDataLoaded, projectsData, project_slug])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);


  function handleScroll() {//detects when the h2 headings are in the middle of the screen.
    const title = document.getElementById("project-title-link");
    if (window.scrollY <= (window.innerHeight * (1 / 5))) { title.classList.add("vert-nav-active"); }
    else {
      title.classList.remove("vert-nav-active");
    }
    sections.current.forEach((section) => {

      const rect = section.getBoundingClientRect();
      let el = document.querySelector(`.link-${section.id}`);

      //check to see if the h2 element is in the middle of the page or not. If it is add a class for stlying.
      if ((rect.top <= ((window.innerHeight * (3 / 5))) && (rect.bottom > window.innerHeight * (3 / 5)))) {
        el.classList.add("vert-nav-active");
      } else {
        el.classList.remove("vert-nav-active");
      }
    })

  }

  return (
    <>
      <Cursor cursorType={cursorType} />
      <section className={`project project-${project_slug}`} >
        {(isProjectsDataLoaded && thisProjectData) ?
          <>
            <div className="default">
              <div className="left-side">
                <motion.div initial={{ x: -400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1 }} className="project-landing">
                  <h1 onMouseEnter={changeCursor("heading")} onMouseLeave={changeCursor("default")} id={`${thisProjectData.acf.project_title}`}>{thisProjectData.acf.project_title}</h1>
                  <p id="sub-heading">{thisProjectData.acf.project_description}</p>
                  {/* <img src={thisProjectData.acf.project_first_image.sizes.large} alt={`${thisProjectData.acf.project_title}-landingpage`} /> */}
                  <ResponsiveImage imgArray={thisProjectData.acf.project_first_image} />
                </motion.div>

                <section id="1" className="basic-info highlight-section">
                  <span className="heading-number">01</span>
                  <motion.h2 id="1" initial={{ x: -400, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>Overview</motion.h2>
                  <div className="basic-info-content">
                    <p>{thisProjectData.acf.overview}</p>

                    <div className="tech-used">
                      <h3>Tech Used</h3>
                      <ul>{thisProjectData.acf.tech_used.map((tech, i) =>
                        <li key={i}>{tech.tech_name}</li>)}
                      </ul>
                    </div>

                    <div className="github">
                      <h3>GitHub Repository</h3>
                      <a href={`${thisProjectData.acf.github_link}`} target="_blank" rel="noreferrer">Checkout my commits<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z" /></svg></a>
                    </div>
                  </div>
                </section>
              </div>

              <section className="live-links">
                <VerticalNav highlights={thisProjectData.acf.highlights} title={thisProjectData.acf.project_title} />
                <a className="live-site" href={`${thisProjectData.acf.live_site_link}`} rel="noreferrer" target="_blank" >
                  <p>Live Site</p>
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.24 58.24">
                    <polygon class="cls-1" points="58.24 0 58.24 31.96 51.9 31.96 51.9 10.83 39.33 23.4 4.49 58.24 0 53.76 34.84 18.92 47.41 6.35 26.28 6.35 26.28 0 58.24 0" />
                  </svg></a>
              </section>

            </div>

            <section className="highlights">
              <Highlights2 highlights={thisProjectData.acf.highlights} />
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