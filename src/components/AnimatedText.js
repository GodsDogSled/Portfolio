import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedText = ({ text, wait, varient }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: .9, once: true })


  const basic = {
    hidden: {
      opacity: 0,
      y: 50,

    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: wait
      }
    },
  }
  const project = {
    hidden: {
      opacity: 0,
      y: 20,

    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: wait
      }
    },
  }

  const selectVarient = (varient === "project" ? project : basic)



  return (
    <>
      <motion.span ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ staggerChildren: .06 }} aria-hidden>
        {
          text.split(" ").map(word => {
            return (
              <motion.span >

                {
                  word.split("").map(char => {
                    return (
                      <motion.span style={{ display: "inline-block" }} variants={selectVarient}>{char}</motion.span>
                    )
                  })
                }
                <span>&nbsp;</span>
              </motion.span>

            )
          })
        }
      </motion.span>
    </>
  )
}

export default AnimatedText