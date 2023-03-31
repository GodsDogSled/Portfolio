
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'
import { motion } from "framer-motion"

function Cube(props) {
  
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003); 

  useFrame((state, delta) => (ref.current.rotation.x += customDelta ))
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry args={[2.2, 2,-50]} />
      <meshStandardMaterial color={hovered ? 'black' : '#F55555'} wireframe = {true} />
    </mesh>
  )
}


export default Cube;
