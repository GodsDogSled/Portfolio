

import React, { useRef, useState } from 'react'
import { useFrame} from '@react-three/fiber'


function Cube(props) {
  
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003); 

  useFrame((state, delta) => (ref.current.rotation.x += customDelta ))
  
  return (
    <mesh
      {...props}
      position={[0, 1, 0]}
      ref={ref}
      scale={ 1.2 }
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry args={[2.2, 2,-50]} />
      <meshStandardMaterial color={hovered ? 'black' : '#F55555'} wireframe = {true} />
    </mesh>
  )
}


export default Cube;
