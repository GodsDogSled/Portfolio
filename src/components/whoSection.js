import Experience from "../components/Experience";
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useState } from "react";
import AnimatedText from "./AnimatedText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const WhoSection = (info) => {

  const fadeInX = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2
      }
    },
  }
  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -100,

    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3
      }
    },
  }

  const fadeIn = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4.5
      }
    }
  }

  const primaryDark = "#515454";
  const myRed = "#FF7979";

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: .2, once: true })

  const [textRevealed, setTextRevealed] = useState(false);



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

  function revealText() {
    document.querySelector(".who-text p").style.opacity = "1";
    document.querySelector(".who-text h3").innerHTML = "he is:";

  }
  function hideText() {
    document.querySelector(".who-text p").style.opacity = "0";
    document.querySelector(".who-text h3").innerHTML = "is he?";
    setTextRevealed(false);
  }

  function handleClick() {
    setTextRevealed(!textRevealed);
    const dotColor = document.querySelector(".dot");
    const hoverMessage = document.querySelector(".instructions p");
    (textRevealed) ? hideText() : revealText();
    (!textRevealed) ? (hoverMessage.innerHTML = "Click to hide") : hoverMessage.innerHTML = ("Click to reveal");
    (textRevealed) ? dotColor.style.backgroundColor = "transparent" : dotColor.style.backgroundColor = myRed;;
  }

  return (
    <>
      <motion.section ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: .8, }} id="about" >
        <motion.div variants={fadeInX} className="title">
          <h2>
            who
          </h2>
          <div className="black-line">
          </div>
        </motion.div>
        <motion.div variants={fadeDown} className="down-arrow">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.24 58.24">
            <polygon className="cls-1" points="58.24 0 58.24 31.96 51.9 31.96 51.9 10.83 39.33 23.4 4.49 58.24 0 53.76 34.84 18.92 47.41 6.35 26.28 6.35 26.28 0 58.24 0" />
          </svg>
        </motion.div>

        <div className="who-text" >
          <h3><AnimatedText text={"is he?"} wait={.8} varient={"basic"} /></h3>
          {(info.isLoaded) ? <p>{info.data}</p> : <p>Failed to Load</p>}
        </div>

        <motion.div variants={fadeIn} className="three-head">
          <Canvas>
            <Light brightness={600} color={"#2D49F9"} pos={[-20, 5, 7]} />
            <Light brightness={600} color={"#2D49F9"} pos={[20, 7, 7]} />
            <ambientLight />
            <Experience handleHover={revealText} handleLeave={(textRevealed ? "" : hideText)} isRevealed={textRevealed} />
          </Canvas>
        </motion.div>





        <div className="dot-container" onClick={() => { handleClick() }}>

          <div className="instructions">
            <p>Click to reveal</p>
          </div>
          <div className="dot">

          </div>
        </div>




      </motion.section>

    </>
  )
}

export default WhoSection