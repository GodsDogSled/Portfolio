import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Highlights from "../components/Highlights";
import VerticalNav from "../components/VerticalNav";
import { motion, useScroll, useTransform } from 'framer-motion';




const PageProject = () => {
  const { project_slug } = useParams();
  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded)
  const [thisProjectData, setThisProjectData] = useState(false);


  const h2s = useRef();



  setTimeout(function () { h2s.current = document.querySelectorAll('h2') }, 50);

  useEffect(() => {
    if (isProjectsDataLoaded) {
      if (Array.isArray(projectsData)) {
        let thisProject = projectsData.find((project) => project.slug === project_slug);
        setThisProjectData(thisProject);
      }
    }


  }, [isProjectsDataLoaded, projectsData, project_slug])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  }, []);



  function handleScroll() {//detects when the h2 headings are in the middle of the screen.
    h2s.current.forEach((h2) => {
      const rect = h2.getBoundingClientRect();
      let el = document.querySelector(`.link-${h2.id}`);
      console.log(h2.id);

      //check to see if the h2 element is in the middle of the page or not. If it is add a class for stlying.
      if ((rect.bottom <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) && (rect.bottom >= 0))) {
        el.classList.add("vert-nav-active")
      } else {
        el.classList.remove("vert-nav-active")
      }
    })

  }



  return (
    <>
      <section className={`project project-${project_slug}`} >
        {(isProjectsDataLoaded && thisProjectData) ?
          <>
            <div className="default">
              <div className="left-side">
                <motion.div initial={{ x: -400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', duration: 1 }} className="project-landing">
                  <h1 id={`${thisProjectData.acf.project_title}`}>{thisProjectData.acf.project_title}</h1>
                  <p id="sub-heading">{thisProjectData.acf.project_description}</p>
                  <img src={thisProjectData.acf.project_first_image.sizes.large} alt={`${thisProjectData.acf.project_title}-landingpage`} />
                </motion.div>

                <section className="basic-info">
                  <span id="1" className="heading-number">01</span>
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
                      <a href={`${thisProjectData.acf.github_link}`}>Checkout my commits<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 100 85"><path d="M14.727 30 10 34.707 42.942 67.07c3.906 3.902 10.234 3.91 14.141 0l26.25-25.69v11.954H90v-20A3.338 3.338 0 0 0 86.667 30l-20 .003v6.663H78.62L52.37 62.359a3.335 3.335 0 0 1-4.714 0L14.727 30z" /></svg></a>
                    </div>
                  </div>
                </section>

              </div>


              <section className="live-links">
                <VerticalNav highlights={thisProjectData.acf.highlights} title={thisProjectData.acf.project_title} />
                {/* <nav className="vert-nav">
                  <ul>
                    <motion.li><a href={`#${thisProjectData.acf.project_title}`}>{thisProjectData.acf.project_title}</a></motion.li>
                    <motion.li><a href="#1">01</a></motion.li>
                    {thisProjectData.acf.highlights.map((highlight) => {
                      if (highlight.acf_fc_layout === "heading") {
                        dynamicNavCount++;
                        return (<motion.li><a href={`#${dynamicNavCount}`}>0{dynamicNavCount}</a></motion.li>);
                      }
                      else return null;
                    })
                    }
                  </ul>
                </nav> */}

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