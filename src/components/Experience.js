import { OrbitControls } from "@react-three/drei"
import { useState, useEffect } from "react";
import GabeHead from "./GabeHead.jsx"
import { useThree } from '@react-three/fiber';


const Experience = (props) => {

  const { camera } = useThree();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };



    window.addEventListener('resize', handleResize);
  }, [screenWidth])

  // Set the initial camera position and zoom level
  camera.position.set(9, 0, 16);


  camera.updateProjectionMatrix();

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={screenWidth > 860 ? true : false} enableRotate={screenWidth > 860 ? true : false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
      <GabeHead isRevealed={props.isRevealed} handleLeave={props.handleLeave} handleHover={props.handleHover} position={[0, 0, 0]} />
    </>

  )
}

export default Experience