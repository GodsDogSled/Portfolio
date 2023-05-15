
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";



function VerticalNav(data) {
  let dynamicNavCount = 1;
  let h = document.querySelector("html").offsetHeight;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({

    offset: ["start ", "end "]
  })






  return (
    <nav className="vert-nav">
      <motion.div style={{ scaleY: scrollYProgress }} className='scroll-line'></motion.div>
      <ul>
        <motion.li><a className={`${data.title}`} href={`#${data.title}`}>{data.title}</a></motion.li>
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
    </nav>
  )
}


export default VerticalNav;