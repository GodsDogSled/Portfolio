import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99000;
  cursor: pointer;

`;

const Path = (props) => (
  <motion.path
    fill="transparent"

    strokeWidth="5"
    {...props}
  />
);

const transition = { duration: 0.4 };

export default function MenuToggle({ toggle, isOpen }) {
  return (
    <Button className="ham-button" onClick={toggle}>
      <motion.svg id="hamburger-svg" width="40" height="40" viewBox="0 0 100 100" whileHover={{ scale: 1.2 }}>
        <Path

          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 0 25 L 100 25", stroke: "#313333" },
            open: { d: "M 75 0 L 75 100", stroke: "white" },
          }}
          transition={transition}
        />

        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 0 75 L 100 75", stroke: "#313333" },
            open: { d: "M 25 0 L 25 100", stroke: "white" },
          }}
          transition={transition}
        />
      </motion.svg>
    </Button>
  );
}