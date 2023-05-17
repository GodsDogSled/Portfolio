
import { useEffect, useRef, useState } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";



function VerticalNav(data) {
  let dynamicNavCount = 1;
  let ty = "-50%";
  const [rotation, setRotate] = useState();
  let h = document.querySelector("html").offsetHeight;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({

    offset: ["start ", "end "]
  })

  function findScrollProgress() {
    setRotate(600 * scrollYProgress.current);
    console.log(720 * scrollYProgress.current);
  }

  useEffect(() => {
    window.addEventListener('scroll', findScrollProgress);
  }, []);








  return (
    <nav className="vert-nav">

      <motion.div animate={{ rotate: rotation, y: ty }} className='spin-star'>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.54 38.54">
          <polygon points="16.32 26.68 8.15 30.71 11.95 22.43 3.32 19.5 11.86 16.32 7.83 8.15 16.12 11.95 19.05 3.32 22.22 11.86 30.39 7.83 26.6 16.12 35.22 19.05 26.68 22.22 30.71 30.39 22.43 26.6 19.5 35.22 16.32 26.68" />
          <path d="m19.09,6.64l1.65,4.45.86,2.31,2.21-1.09,4.26-2.1-1.98,4.31-1.03,2.24,2.33.79,4.49,1.53-4.45,1.65-2.31.86,1.09,2.21,2.1,4.26-4.31-1.98-2.24-1.03-.79,2.33-1.53,4.49-1.65-4.45-.86-2.31-2.21,1.09-4.26,2.1,1.98-4.31,1.03-2.24-2.33-.79-4.49-1.53,4.45-1.65,2.31-.86-1.09-2.21-2.1-4.26,4.31,1.98,2.24,1.03.79-2.33,1.53-4.49m-.09-6.64l-3.54,10.42L5.45,5.84l4.86,9.87L0,19.54l10.42,3.54-4.58,10.01,9.87-4.86,3.83,10.32,3.54-10.42,10.01,4.58-4.86-9.87,10.32-3.83-10.42-3.54,4.58-10.01-9.87,4.86L19,0h0Z" />
        </svg>
      </motion.div>
      <ul>
        <motion.li><a id="project-title-link" className={`vert-nav-active ${data.title}`} href={`#top`}>{data.title}</a></motion.li>
        <motion.li ><a className="link-1" href="#1">01</a></motion.li>
        {data.highlights.map((highlight, i) => {
          if (highlight.acf_fc_layout === "heading") {
            dynamicNavCount++;
            return (<motion.li key={i}><motion.a className={`link-${dynamicNavCount}`} href={`#heading-${dynamicNavCount}`}>0{dynamicNavCount}</motion.a></motion.li>);
          }
          else return null;
        })
        }
      </ul>
    </nav >
  )
}


export default VerticalNav;