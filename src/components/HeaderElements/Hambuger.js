import React from "react";
import styled from "styled-components" 
import { useEffect, useState } from "react";
import MenuToggle from "./menuToggle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";









export default function Hamburger(props){
  const [isOpen, setOpen] = useState(false);
 
  
 return<>
  <div className="hamburger">
    <MenuToggle isOpen = {isOpen} toggle={()=> setOpen(!isOpen)}/>
    {isOpen && <motion.div animate={{right:"0"}} transition={{duration:.00001}} className = "hamburger-container">
        <ul>
          <li><Link onClick={()=> setOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={()=> setOpen(false)} to="/">Work</Link></li>
          <li><Link onClick={()=> setOpen(false)} to="/">About</Link></li>
          <li><Link onClick={()=> setOpen(false)} to="/">Contact</Link></li>
        </ul>
    </motion.div>}
  </div>

</> 
}