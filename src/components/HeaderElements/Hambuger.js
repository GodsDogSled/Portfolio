import React from "react";
import styled from "styled-components" 
import { useEffect, useState } from "react";
import MenuToggle from "./menuToggle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const NavLinksContainer =  styled.div`
 
  
`;

const LinksWrapper = styled.ul`
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height:10%;
  width:100%;
  list-style:none;
  background-color: #fff;
  z-index:999;
  
  position: fixed;
  top: 100px;
  left: 0;

  transition:  1s;
  
 
`;

const LinkItem = styled.li`
 
 
 

  
`;






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