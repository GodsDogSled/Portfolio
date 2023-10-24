/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/GabeHead.glb
*/
import { useRef, useState, useMemo } from "react";
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Color } from 'three'


const GabeHead = (props) => {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003);
  const [hovered, setHovered] = useState(false)
  const black = useMemo(() => new Color('black'), [])
  const white = useMemo(() => new Color('#E2E1E1'), [])

  useFrame((state, delta) => {
    (ref.current.rotation.y += customDelta);

    if (!props.isRevealed) {
      ref.current.material.color.lerp(hovered ? white : black, .5)
    }
  })

  if (props.isRevealed) {
    ref.current.material.color.lerp(white, 1.4);
    // setHovered(!hovered);
    // props.isRevealed = false;
  }


  const { nodes, materials } = useGLTF('./models/GabeHead.glb')
  return (
    <group dispose={null}>
      <mesh geometry={nodes.Scene_05.geometry} material={materials.texture} position={[0.579, 1.6, -0.977]} rotation={[0.131, 0.062, -0.072]} scale={0.039}
        ref={ref}
        onPointerOver={() => { setHovered(true); props.handleHover() }}
        onPointerOut={() => { setHovered(false); props.handleLeave() }}
        onClick={() => click(!clicked)}
      >
      </mesh>
    </group>
  )
}

export default GabeHead

useGLTF.preload('./models/GabeHead.glb')
