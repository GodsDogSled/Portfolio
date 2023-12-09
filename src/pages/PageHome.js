// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux"
// import { apiPath_pages, apiPath_projects } from "../global/globals";
// import WorkSection from "../components/workSection";
// import WhoSection from "../components/whoSection";
// import AnimatedText from "../components/AnimatedText";
// // import { OrbitControls } from '@react-three/drei'
// // import { Canvas } from '@react-three/fiber';

// // import Spline from '@splinetool/react-spline';

// import { OtherGlobe, UpsidedownHand } from "../svgs/LandingIcons.js"

// import { motion, useScroll, } from "framer-motion";



// import Cursor from "../components/CustomCursor";
// import { changeCursor } from "../features/cursorSlice";
// import DesignArrow from "../components/designArrow";




// const sizes = {
//   width: window.innerWidth,
//   height: window.innnerHight
// }

// const PageHome = () => {
//   // API Variables
//   const projectsPath = `${apiPath_projects}`
//   const pagesPath = `${apiPath_pages}`

//   const [homePageData, setData] = useState([])
//   const [isHomePageLoaded, setLoadStatus] = useState(false)

//   const projectsData = useSelector((state) => state.project.projects)
//   const isProjectsDataLoaded = useSelector((state) => state.project.loaded);


//   //framer motion variables for scrolling email adress
//   const { scrollYProgress } = useScroll();

//   //turns off orbit controls for the mobile view
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   //customCursor Variable
//   const cursorType = useSelector((state) => state.cursor.value)
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchData = async () => {
//       const projectResponse = await fetch(pagesPath)
//       if (projectResponse.ok) {
//         const data = await projectResponse.json()
//         setData(data)
//         setLoadStatus(true)
//       } else {
//         setLoadStatus(false)
//       }
//     }
//     fetchData()
//   }, [projectsPath, projectsData])


//   //checks if the viewport is in a mobile view
//   useEffect(() => {
//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);
//   }, [screenWidth])

//   //copies email adress to clipboard
//   function clipboard(id) {
//     var text = document.getElementById(id).innerHTML;
//     var elem = document.createElement("textarea");
//     document.body.appendChild(elem);
//     elem.value = text;
//     elem.select();
//     document.execCommand("copy");
//     document.body.removeChild(elem);
//     const cursor = document.getElementById("cursor");
//     cursor.firstChild.innerHTML = "COPIED";
//     cursor.firstChild.style.color = "white";
//   }

//   //-------------------------------------Cursor Varient Functions--------------------------------------------
//   const emailEnter = () => {
//     dispatch(changeCursor("email"));
//     const cursor = document.getElementById("cursor");
//     cursor.innerHTML = "<p>COPY</p>";
//   }

//   const elementLeave = () => {
//     dispatch(changeCursor("default"));
//     const cursor = document.getElementById("cursor");
//     cursor.innerHTML = "";
//   }


//   return (
//     <>
//       <Cursor cursorType={cursorType} />
//       <section className="landing-section">
//         <div className="premium-gabe">
//           <div className="threejs">

//           </div>

//           <div className="landing-text">
//             <div className="title-section">
//               <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .5, duration: 1.5, type: "spring", stiffness: 10 }} className="gabriel">
//                 <div className="red-line">
//                 </div>
//                 {/* <h1 id="gabriel"><span className="migra">g</span>ab<span className="migra">r</span>ie<span className="migra">l</span></h1> */}
//                 <h1 id="gabriel">
//                   gabriel
//                 </h1>
//                 <h1 className="sr-only">gabriel kelly</h1>
//               </motion.div>
//               <motion.div className="kelly" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .9, duration: 1.5 }} >
//                 <h1 id="gabriel">
//                   kelly
//                 </h1>
//                 <div className="icon-container">
//                   <UpsidedownHand />
//                   {/* <Hand /> */}
//                   <OtherGlobe />
//                   <UpsidedownHand className="right-hand" />
//                 </div>
//               </motion.div>
//             </div>
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} className="bottom-section">

//               <div className="small-text">
//                 <p>
//                   <AnimatedText text={"developer"} />
//                 </p>


//                 <p>designer</p>
//               </div>

//               <DesignArrow />

//             </motion.div>
//           </div>
//         </div>
//       </section>



//       {(isProjectsDataLoaded) ?

//         <>


//           <WhoSection isLoaded={isHomePageLoaded} data={homePageData.acf.aboutMe} />

//           <WorkSection projectsData={projectsData} />




//           <section onMouseEnter={emailEnter} onMouseLeave={elementLeave} onClick={() => { clipboard("email") }} id="contact" >
//             <h3 className="mobile-instructions">Tap to copy to clipboard</h3>
//             <div className="section-content " id="email-scroll">
//               {(isHomePageLoaded) ? <div> <p id="email"  >{homePageData.acf.email}  </p> <p id="email" >{homePageData.acf.email + " "} </p></div> : <p>Failed to Load</p>}
//               {/* {(isHomePageLoaded) ? <a id="linkedin-link" href={homePageData.acf.linkedin}  >Linked In</a> : <p>Failed to Load</p>} */}
//             </div>
//           </section>
//         </>
//         :
//         <>
//           <p>Failed to Load</p>
//         </>
//       }




//     </>

//   )
// }


// export default PageHome;


import { useState, useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux"
import { apiPath_pages, apiPath_projects } from "../global/globals";
import WorkSection from "../components/workSection";
import { useInView } from 'react-intersection-observer'
import AnimatedText from "../components/AnimatedText";
import { OtherGlobe, UpsidedownHand } from "../svgs/LandingIcons.js";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import Cursor from "../components/CustomCursor";
import { changeCursor } from "../features/cursorSlice";
import DesignArrow from "../components/designArrow";

const WhoSection = lazy(() => import("../components/whoSection"));


const PageHome = () => {
  // API Variables
  const projectsPath = `${apiPath_projects}`
  const pagesPath = `${apiPath_pages}`
  const { ref, inView } = useInView({

    triggerOnce: true,
  });

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


  return (
    <>
      <Cursor cursorType={cursorType} />
      <section className="landing-section">
        <div className="premium-gabe">
          <div className="threejs">
            <Suspense fallback={<div>Loading</div>}>
              <Spline scene="https://prod.spline.design/s5h3SCNWuq-Q3ZvR/scene.splinecode" />
            </Suspense >

          </div>

          <div className="landing-text">
            <div className="title-section">
              {/* initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .5, duration: 1.5, type: "spring", stiffness: 10 }}  */}
              <div className="gabriel">
                <div className="red-line">
                </div>
                {/* <h1 id="gabriel"><span className="migra">g</span>ab<span className="migra">r</span>ie<span className="migra">l</span></h1> */}
                <h1 id="gabriel">
                  gabriel
                </h1>
                <h1 className="sr-only">gabriel kelly</h1>
              </div>
              <div className="kelly"  >
                <h1 id="gabriel">
                  kelly
                </h1>
                <div className="icon-container">
                  <UpsidedownHand />
                  <OtherGlobe />
                  <UpsidedownHand className="right-hand" />
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }} className="bottom-section">
              <div className="small-text">
                <p>
                  <AnimatedText text={"developer"} />
                </p>
                <p>designer</p>
              </div>
              <DesignArrow />
            </motion.div>
          </div>
        </div>
      </section>

      {(isProjectsDataLoaded && isHomePageLoaded) ? (

        <>
          <div ref={ref} className="who-container">
            <Suspense fallback={<div>Loading</div>}>
              {inView && (
                <WhoSection isLoaded={isHomePageLoaded} data={homePageData.acf.aboutMe} />
              )}
            </Suspense>
          </div>
          <WorkSection projectsData={projectsData} />
          <section onMouseEnter={emailEnter} onMouseLeave={elementLeave} onClick={() => { clipboard("email") }} id="contact" >
            <h3 className="mobile-instructions">Tap to copy to clipboard</h3>
            <div className="section-content " id="email-scroll">
              {(isHomePageLoaded) ? <div> <p id="email"  >{homePageData.acf.email}  </p> <p id="email" >{homePageData.acf.email + " "} </p></div> : <p>Failed to Load</p>}
              {/* {(isHomePageLoaded) ? <a id="linkedin-link" href={homePageData.acf.linkedin}  >Linked In</a> : <p>Failed to Load</p>} */}
            </div>
          </section>
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