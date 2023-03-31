import React from "react";
import styled from "styled-components" 
import { useEffect, useState } from "react";
import MenuToggle from "./menuToggle";
import { motion } from "framer-motion";
import { Link , useNavigate } from "react-router-dom";









export default function Hamburger(props){
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  
    
  function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }else{
      navigate("/");
      section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
 return<>
  <div className="hamburger">
    <MenuToggle isOpen = {isOpen} toggle={()=> setOpen(!isOpen)}/>
    {isOpen && <motion.div animate={{right:"0"}} transition={{duration:.00001}} className = "hamburger-container">
        <ul>
          <li><Link onClick={()=> setOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={()=> {setOpen(false); scrollToSection("work");}} to="/#work">Work</Link></li>
          <li><Link onClick={()=> {setOpen(false); scrollToSection("about");}} to="/#about">About</Link></li>
          <li><Link onClick={()=> {setOpen(false); scrollToSection("contact");}} to="/#contact">Contact</Link></li>
        </ul>
    </motion.div>}
  </div>

</> 
}