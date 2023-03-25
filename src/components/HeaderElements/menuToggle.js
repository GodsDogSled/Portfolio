import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;

`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.4 };

export default function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="100" height="70" viewBox="0 0 100 100">
        <Path
          
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 25 35 L 75 35", stroke: "#313333" },
            open: {  d: "M 65 25 L 65 75",  stroke: "#313333" },
          }}
          transition={transition}
        />
        
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 25 65 L 75 65", stroke: "#313333" },
            open: { d:"M 35 25 L 35 75" ,stroke: "#313333" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}