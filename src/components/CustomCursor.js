import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = (props) => {
  //Custom Cursor
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  const primaryLight = "#E2E1E1"


  const [cursorVarient, setCursorVarient] = useState("default")

  const varients = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: primaryLight,
      mixBlendMode: "difference",
    },
    email: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: primaryLight,
      mixBlendMode: "difference",
      scale: 6,
      content: "Copy to clipboard",
      transition: ".5s"
    },
  }

  useEffect(() => {
    setCursorVarient(props.cursorType);
    const mouseMove = e => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [props.cursorType])

  return (
    <motion.div id="cursor"
      variants={varients}
      animate={cursorVarient}
      transition={{ ease: "easeOut", duration: 0 }}
    >
    </motion.div>
  )

}

export default Cursor