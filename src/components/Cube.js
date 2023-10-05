

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'


function Cube({ posX, posY, posZ, growth }) {

  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(.01);
  const [customScaleX, setCustomScaleX] = useState(.005);
  const [customScaleY, setCustomScaleY] = useState(.003);
  let scaler = growth;

  useFrame((state, delta) => {

    //   (ref.current.position.x += customDelta);
    //   (ref.current.position.y += customDelta);
    (ref.current.scale.x += growth);
    console.log(ref.current.scale.x);
    //   (ref.current.scale.y += customScaleY);

    //   if (ref.current.position.x > 5) {
    //     setCustomDelta(-.09);

    //     setCustomScaleX(-.005);
    //     setCustomScaleY(-.003);

    //   }
    if (ref.current.scale.x > 1.3) {
      growth *= -1;

    }
    if (ref.current.scale.x < .5) {
      growth *= -1;

    }
  })




  return (
    <mesh

      position={[posX, posY, posZ]}
      rotateX={24}

      ref={ref}

      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      {/* <sphereGeometry args={[2, 156, 30]} /> */}
      <sphereBufferGeometry args={[1, 156, 30]} />
      {/* <sphereGeometry args={[15, 32, 16]} /> */}


      <meshStandardMaterial color={hovered ? 'black' : '#F55555'} wireframe={true} />
    </mesh>
  )
}


export default Cube;
