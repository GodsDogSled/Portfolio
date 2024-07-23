
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { apiPath_pages, apiPath_projects } from "../global/globals";
import WorkSection from "../components/workSection";
import WhoSection from "../components/whoSection";
import ContactSection from "../components/contactSection";

import AnimatedText from "../components/AnimatedText";
import { OtherGlobe, UpsidedownHand, AnimeStar, MotionRings, Clipboard } from "../svgs/LandingIcons.js";
import { motion } from "framer-motion";
// import Spline from '@splinetool/react-spline';
import Cursor from "../components/CustomCursor";
import { changeCursor } from "../features/cursorSlice";
import DesignArrow from "../components/designArrow";




const PageHome = () => {
  // API Variables
  const projectsPath = `${apiPath_projects}`
  const pagesPath = `${apiPath_pages}`
  // const { ref, inView } = useInView({

  //   triggerOnce: true,
  // });

  const [homePageData, setData] = useState([])
  const [isHomePageLoaded, setLoadStatus] = useState(false)


  const projectsData = useSelector((state) => state.project.projects)
  const isProjectsDataLoaded = useSelector((state) => state.project.loaded);

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
  }, [projectsPath, projectsData, pagesPath])


  //checks if the viewport is in a mobile view
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, [screenWidth])





  //copies email adress to clipboard
  function clipboard(id) {
    var text = id;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    const cursor = document.getElementById("cursor");
    cursor.firstChild.innerHTML = "now paste";
    cursor.style.backgroundColor = "white";
  }

  //-------------------------------------Cursor Varient Functions--------------------------------------------
  const emailEnter = () => {
    dispatch(changeCursor("email"));
    const cursor = document.getElementById("cursor");


    cursor.innerHTML = `<p className='email-mouse-variant-text' >Email Me! <br/> </p>`;
  }

  const elementLeave = () => {
    dispatch(changeCursor("default"));
    const cursor = document.getElementById("cursor");
    cursor.innerHTML = "";
  }


  return (
    <>
      <Cursor cursorType={cursorType} />
      <section className="landing-section">
        <div className="premium-gabe">
          <div className="landing-text">
            <div className="title-section">
              {/* initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .5, duration: 1.5, type: "spring", stiffness: 10 }}  */}
              <div className="gabriel">
                <MotionRings />
                <h1 id="gabriel">
                  <AnimeStar position={"right"} />
                  gabriel
                </h1>
                <h1 className="sr-only">gabriel kelly</h1>
              </div>
              <div className="kelly"  >
                <h1 id="gabriel">
                  <AnimeStar position={"left"} />
                  kelly
                </h1>
                <div className="icon-container">
                  <UpsidedownHand />
                  <OtherGlobe />
                  <UpsidedownHand className="right-hand" />
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <div className="small-text">
                <div className="paragraph">
                  <p> Adversary of <br></br>unremarkable</p>
                </div>
                <div class="text-container">
                  <div id="text">
                    <div id="developer">
                      <p>development</p>
                    </div>
                    <p id="ampersand">&</p>
                    <div id="designer"><p>design</p></div>
                  </div>
                  <div id="red-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(isProjectsDataLoaded && isHomePageLoaded) ? (

        <>


          <WhoSection isLoaded={isHomePageLoaded} data={homePageData.acf.aboutMe} />
          <p id="forever">forever</p>
          <section id="forever-message" >
            {/* <h3 className="mobile-instructions">Tap to copy to clipboard</h3> */}
            {/* <p id="premium">premium</p><br></br> */}

            <div className="" id="email-scroll">
              {(isHomePageLoaded) ? <div id="scroll-text"><p id="email" >and ever</p> <p id="email" >and ever</p><p id="email" >and ever</p><p id="email" >and ever</p><p id="email" >and ever</p> <p id="email" >and ever</p><p id="email" >and ever</p> <p id="email" >and ever</p>  </div> : <p>Failed to Load</p>}
            </div>
            {/* {homePageData.acf.email + " "} */}
          </section>

          <WorkSection projectsData={projectsData} />

          <div id="copy-this" onMouseEnter={emailEnter} onMouseLeave={elementLeave} onClick={() => { clipboard(homePageData.acf.email) }}>
            <ContactSection email={homePageData.acf.email} />
          </div>
        </>)
        :
        <>
          <p>Failed to Load</p>
        </>
      }
    </>
  )
}
export default PageHome;