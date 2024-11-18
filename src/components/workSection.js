import ResponsiveImage from "../components/ResonsiveImage";
import SmallProjectCard from "./SmallProjectCard";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WorkSection = (data) => {

  const ref = useRef(null);
  const imgRef = useRef(null);

  const isInView = useInView(ref, { amount: .5, once: true })
  const imgInView = useInView(imgRef, { amount: .5, once: true })


  //states for the image section variable
  const [shownImage, setShownImage] = useState({
    imageSizesObject: data.projectsData[0].acf.project_first_image,
    imageTitle: data.projectsData[0].acf.project_title,
    workDone: "development + design",
    projectDescription: data.projectsData[0].acf.project_description,
  });

  const [featuredProjects, setFeaturedProjects] = useState([])

  function updateImage(imageSizes, title, work, description) {

    //set all zindex back to 0
    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = "0";
    }

    setShownImage({
      imageSizesObject: imageSizes,
      imageTitle: title,
      workDone: work,
      projectDescription: description,
    });

    //set z-index of hoverd project to 1
    document.getElementById(title).style.opacity = "1";
  }

  //sort featured projects
  useEffect(() => {
    const featured = data.projectsData.filter(project => project.acf.featured);
    setFeaturedProjects(featured);
  }, [data.projectsData]);


  return (
    <>
      <section id='work'>
        <motion.h2 ref={ref} initial={{ x: -100, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1, transition: { duration: 2 } } : ""}>featured <span>Projects</span></motion.h2>
        <div className="section-content">
          <div className="small-projects-container">
            {featuredProjects.map((project, i) => {
              if (project.acf.featured) {
                return (
                  <SmallProjectCard
                    key={i}
                    project={project}
                    numb={i + 1}
                    updateImage={updateImage}
                  />
                )
              } else {
                return null
              }
            })}

          </div>

          <motion.div ref={imgRef} initial={{ x: 100, opacity: 0 }} animate={imgInView ? { x: 0, opacity: 1, transition: { duration: 1.5 } } : ""} className="project-image-container">
            <div className="all-images-container">
              {
                featuredProjects.map((project, i) => {
                  return (
                    <ResponsiveImage key={i} id={project.acf.project_title} imgArray={shownImage.imageSizesObject} />
                  )
                })
              }
            </div>

            <div className="project-title">
              <p>{shownImage.projectDescription}</p>
              <span>{shownImage.workDone}</span>
            </div>

          </motion.div>

        </div>

        <div className="more-projects">
          <p>Here are some select projects that showcase my passion for creating memorable web experiences.   </p>

          {/* <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.1 127.51">
            <rect className="cls-1" y="30.45" width="0" height="1.38" />
            <circle className="cls-1" cx="168.34" cy="63.75" r="63.75" />
          </svg>
          <Link href="/PageAllProjects">See all Projects</Link> */}
        </div>
      </section>
    </>
  )
}

export default WorkSection;