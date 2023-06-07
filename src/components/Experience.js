import { OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react";
import GabeHead from "./GabeHead.jsx"
import NeoHead from "./NeoHead.jsx"
import { PerspectiveCamera } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber';


const Experience = () => {

  const { camera } = useThree();
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003);

  // useFrame((state, delta) => (ref.current.rotation.x += customDelta))


  // Set the initial camera position and zoom level
  camera.position.set(0, 0, 30);
  // camera.zoom = 1;

  camera.updateProjectionMatrix();

  return (
    <>

      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />


      <GabeHead position={[0, 0, 0]} />
    </>

  )
}

export default Experience