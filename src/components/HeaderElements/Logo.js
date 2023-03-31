import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";


function Logo (){
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  
  const divRef = useRef(null);

  function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (isMouseOver) {
      const divX = divRef.current.offsetLeft + (divRef.current.offsetWidth / 2);
      const divY = divRef.current.offsetTop + (divRef.current.offsetHeight / 2);
      const deltaX = mouseX - divX;
      const deltaY = mouseY - divY;
      const distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
      const maxDistance = 300;
      const movement = Math.min(distance, maxDistance) / maxDistance;
      const translateX = deltaX * movement;
      const translateY = deltaY * movement;
      setPosition({ x: translateX, y: translateY });
    }
  }

  function handleMouseEnter() {
    setIsMouseOver(true);
    const divX = divRef.current.offsetLeft;
    const divY = divRef.current.offsetTop;
    setOriginalPosition({ x: divX, y: divY });
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
    setPosition({ x: 0, y: 0 });
  }
 
   

  return(
    <>
  <Link to = "/">
    <motion.div className="logo"
    drag
    dragConstraints={{
      top: -1,
      left: -1,
      right: 1,
      bottom: 1,
    }}
    //   ref={divRef}
    //   onMouseMove={handleMouseMove}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave} 
    //   style={{
    //     padding:`10px`,
    //     position: "absolute",
    //     top: `${originalPosition.y}px`,
    //     left: `${originalPosition.x}px`,
    //     transform: `translate(${position.x}px, ${position.y}px)`,
    //     transition: "transform 0.2s ease-out"
    // }}
    >
      <svg className="pg-logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 793.08 484.61" >
        <path className="cls-1" d="m793.08,248.9c-1.98,130.51-108.32,235.71-239.3,235.71-132.21,0-239.39-107.18-239.39-239.39,0-124.87,95.61-227.35,217.61-238.36v101.07c-4.25-.31-8.53-.53-12.86-.53-95.24,0-172.45,77.21-172.45,172.45s77.21,172.45,172.45,172.45,172.45-77.21,172.45-172.45c0-10.57-1-20.9-2.82-30.95h104.31Zm-261.08,86.54h82.07s0-86.54,0-86.54h-82.07s0,86.54,0,86.54Z"/>
        <g>
        <path className="cls-1" d="m166.75.07c-53.37-1.68-92.97,26.43-105.39,36.12-3.15,2.45-44.35,36.45-60.22,91.98h46.43c23.14-34.26,62.33-56.79,106.79-56.79,71.12,0,128.77,57.65,128.77,128.77s-54.12,125.17-122.17,128.6v14.76c1.92.06,3.85.11,5.79.11,94.87,0,171.78-76.91,171.78-171.78C338.52,68.25,244.79,2.53,166.75.07Z"/>
        <rect className="cls-1" y="398.77" width="82.07" height="85.84"/>
        </g>
      </svg>
    </motion.div>
    </Link>
    </>
  )
  
}

export default Logo;