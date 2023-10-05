import { motion, useAnimate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Cursor = (props) => {

  const CircleRef = useRef();
  //Custom Cursor
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  const primaryLight = "#E2E1E1"


  const [cursorVarient, setCursorVarient] = useState("default")

  const varients = {
    default: {
      x: mousePos.x,
      y: mousePos.y,
      backgroundColor: primaryLight,
      mixBlendMode: "difference",

    },
    email: {
      x: mousePos.x - 1,
      y: mousePos.y - 1,
      backgroundColor: primaryLight,
      mixBlendMode: "difference",
      scale: 6,
      content: "Copy to clipboard",
      // transition: ".4s"
    },
  }

  useEffect(() => {
    setCursorVarient(props.cursorType);
    // const mouseMove = e => {
    //   setMousePos({
    //     x: e.clientX,
    //     y: e.clientY
    //   })
    // }

    const mouseMove = e => {
      if (!CircleRef.current) return;

      CircleRef.current?.animate(
        {
          left: `${e.clientX - 10}px`,
          top: `${e.clientY - 10}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        }
      );
    };
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [props.cursorType])

  return (
    <motion.div id="cursor"
      variants={varients}
      animate={cursorVarient}
      ref={CircleRef}
    >
    </motion.div>
  )

}

export default Cursor