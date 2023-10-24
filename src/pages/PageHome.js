import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { appTitle, apiPath_pages, apiPath_projects, cursorVarient } from "../global/globals";
import WorkSection from "../components/workSection";
import WhoSection from "../components/whoSection";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import Cube from "../components/Cube";

import { OtherGlobe, Globe, Spring, Hand, UpsidedownHand } from "../svgs/LandingIcons.js"

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";


import Cursor from "../components/CustomCursor";
import { changeCursor } from "../features/cursorSlice";




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


  //framer motion variables for scrolling email adress
  const { scrollYProgress } = useScroll();

  //turns off orbit controls for the mobile view
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //customCursor Variable
  const cursorType = useSelector((state) => state.cursor.value)
  const dispatch = useDispatch();

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
  }, [projectsPath, projectsData])


  //checks if the viewport is in a mobile view
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, [screenWidth])

  //copies email adress to clipboard
  function clipboard(id) {
    var text = document.getElementById(id).innerHTML;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    const cursor = document.getElementById("cursor");
    cursor.firstChild.innerHTML = "COPIED";
    cursor.firstChild.style.color = "white";
  }




  //-------------------------------------Cursor Varient Functions--------------------------------------------
  const emailEnter = () => {
    dispatch(changeCursor("email"));
    const cursor = document.getElementById("cursor");
    cursor.innerHTML = "<p>COPY</p>";
  }

  const elementLeave = () => {
    dispatch(changeCursor("default"));
    const cursor = document.getElementById("cursor");
    cursor.innerHTML = "";
  }
  let balls = [0];

  let ballValues = balls.map((number, index) => {
    return <Cube posX={0} posY={0} posZ={0} growth={(Math.random() * .005)} />
  })

  return (
    <>
      <Cursor cursorType={cursorType} />
      <section className="landing-section">
        <motion.div className="premium-gabe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="threejs">
            {/* <Canvas camera={{ position: [0, 0, 0] }} >

              <ambientLight />
              <OrbitControls target-y={1} enableZoom={false} enablePan={screenWidth > 860 ? true : false} enableRotate={screenWidth > 860 ? true : false} />
            </Canvas> */}
            {/* <img src={blobs} alt="red blopbs" /> */}
          </div>

          <div className="landing-text">
            <div className="title-section">
              {/* <span className="red-line"></span> */}
              <div className="gabriel">
                <div className="red-line">
                </div>
                <h1 id="gabriel">Gabriel</h1>
              </div>
              <div className="kelly">
                <h1 id="kelly">Kelly</h1>
                <div className="icon-container">
                  <UpsidedownHand />
                  {/* <Hand /> */}
                  <OtherGlobe />
                  <UpsidedownHand className="right-hand" />
                </div>
              </div>
            </div>
            <div className="sub-text">

              <p>Developer</p>

              <p>designer</p>

            </div>
          </div>
        </motion.div>
      </section>

      <section className="arrow">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.34 171.34">
          <rect strokeWidth="20" className="cls-1" x="5.3" width="151.03" height="15" />
          <rect className="cls-1" x="156.34" width="15" height="15" />
          <rect className="cls-1" x="88.32" y="83.02" width="151.03" height="15" transform="translate(73.32 254.36) rotate(-90)" />
          <rect className="cls-1" x="-26.12" y="82.67" width="214.58" height="15" transform="translate(-39.99 83.8) rotate(-45)" />
          <rect className="cls-1" x="130.39" y="47.16" width="0" height="1.38" />
        </svg>
      </section>

      {(isProjectsDataLoaded) ?

        <>

          {/* {shownImage.current = (projectsData[0].acf.project_first_image)} */}
          <WhoSection isLoaded={isHomePageLoaded} data={homePageData.acf.aboutMe} />
          <section className="arrow">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 171.34 171.34">
              <rect strokeWidth="20" className="cls-1" x="5.3" width="151.03" height="15" />
              <rect className="cls-1" x="156.34" width="15" height="15" />
              <rect className="cls-1" x="88.32" y="83.02" width="151.03" height="15" transform="translate(73.32 254.36) rotate(-90)" />
              <rect className="cls-1" x="-26.12" y="82.67" width="214.58" height="15" transform="translate(-39.99 83.8) rotate(-45)" />
              <rect className="cls-1" x="130.39" y="47.16" width="0" height="1.38" />
            </svg>
          </section>
          <WorkSection projectsData={projectsData} />




          <section onMouseEnter={emailEnter} onMouseLeave={elementLeave} onClick={() => { clipboard("email") }} id="contact" >
            <h3 className="mobile-instructions">Tap to copy to clipboard</h3>
            <div className="section-content " id="email-scroll">
              {(isHomePageLoaded) ? <div> <p id="email"  >{homePageData.acf.email}  </p> <p id="email" >{homePageData.acf.email + " "} </p></div> : <p>Failed to Load</p>}
              {/* {(isHomePageLoaded) ? <a id="linkedin-link" href={homePageData.acf.linkedin}  >Linked In</a> : <p>Failed to Load</p>} */}
            </div>
          </section>
        </>
        :
        <>
          <p>Failed to Load</p>
        </>
      }




    </>

  )
}


export default PageHome;