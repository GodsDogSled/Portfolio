import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import { appTitle, apiPath_pages, apiPath_projects } from "../global/globals";
import SmallProjectCard from "../components/SmallProjectCard";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import Cube from "../components/Cube";
import { motion } from "framer-motion";


import Experience from "../components/Experience";



const sizes = {
  width: window.innerWidth,
  height: window.innnerHight
}

const PageHome = () => {


  // API Variables
  const projectsPath = `${apiPath_projects}`
  const pagesPath = `${apiPath_pages}`

  const [homePageData, setData] = useState([])
  const [isHomePageLoaded, setLoadStatus] = useState(false)

  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded);

  useEffect(() => {
    const fetchData = async () => {
      const projectResponse = await fetch(pagesPath)

      if (projectResponse.ok) {
        const data = await projectResponse.json()
        setData(data)
        setLoadStatus(true)
      } else {
        setLoadStatus(false)
      }
    }
    fetchData()
  }, [projectsPath])

  //copies email adress to clipboard
  function clipboard(id) {
    var text = document.getElementById(id).innerHTML;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied to clipboard")
  }

  function Light({ brightness, color, pos }) {//lighting for the about section 3d head
    return (
      <rectAreaLight
        width={5}
        height={5}
        color={color}
        intensity={brightness}
        position={pos}
      />
    )
  }


  return (
    <>
      <section className="landing-section">
        <div className="threejs">
          <Canvas camera={{ position: [0, 0, 6] }} >

            <Cube />
            <ambientLight />
            <OrbitControls target-y={1} enableZoom={false} />
          </Canvas>
        </div>

        <motion.div className="premium-gabe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <h1>Gabriel <br></br> Kelly</h1>

          <div className="circle">
            <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
              <title>Circular Text Path</title>

              <defs>
                <path id="textcircle" d="M250,400
                          a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
              </defs>
              <g fill="black" stroke="0" strokeWidth="1">

                <svg className="arrow" clipRule="evenodd" fillRule="evenodd" strokeMiterlimit="2" viewBox="-62 -62 150 150" ><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" /></svg>
              </g>
              <g className="textcircle">
                <text textLength="940">
                  <textPath
                    xlinkHref="#textcircle"
                    aria-label="CSS & SVG are awesome"
                    textLength="940">
                    - Designer - Developer - Designer - Developer
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </motion.div>

      </section>


      <main>

        {(isProjectsDataLoaded) ?
          <>
            <section id='work'>

              <h2>Work</h2>
              <div className="section-content">
                {projectsData.map((project, i) => {
                  return (
                    <SmallProjectCard
                      key={i}
                      project={project}
                    />
                  )
                })}
              </div>
            </section>

            <section id="about" >
              <h2>Who is Gabriel?</h2>

              <div className="section-content">
                <div className="three-head">
                  <Canvas>
                    <Light brightness={600} color={"#2D49F9"} pos={[-20, 5, 7]} />
                    <Light brightness={600} color={"#2D49F9"} pos={[20, 7, 7]} />

                    /<ambientLight />
                    {/* <Light brightness={50} color={"white"} pos={[0, -7, 7]} /> */}

                    <Experience />
                  </Canvas>
                </div>
                {(isHomePageLoaded) ? <p>{homePageData.acf.aboutMe}</p> : <p>Failed to Load</p>}


              </div>
            </section>

            <section id="contact" >

              <div className="section-content">
                {/* {(isHomePageLoaded) ? <p id="email" onClick={() => { clipboard("email") }} >{homePageData.acf.email}{homePageData.acf.email}</p> : <p>Failed to Load</p>} */}
                {/* {(isHomePageLoaded) ? <a id="linkedin-link" href={homePageData.acf.linkedin}  >Linked In</a> : <p>Failed to Load</p>} */}
              </div>
            </section>
          </>
          :
          <>
            <p>Failed to Load</p>
          </>
        }



      </main>
    </>

  )
}


export default PageHome;