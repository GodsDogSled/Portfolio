/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/GabeHead.glb
*/
import { useRef, useState, useMemo } from "react";
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Color } from 'three'
import { Text } from '@react-three/drei'

const GabeHead = (mousePos) => {
  const ref = useRef()


  const [clicked, click] = useState(false)
  const [customDelta, setCustomDelta] = useState(0.003);
  const [hovered, setHovered] = useState(false)
  const black = useMemo(() => new Color('#313333'), [])
  const lime = useMemo(() => new Color('#E2E1E1'), [])

  useFrame((state, delta) => {
    (ref.current.rotation.y += customDelta)
    ref.current.material.color.lerp(hovered ? black : lime, .5)
  })

  useFrame(({ mouse, viewport }) => {


  })


  const { nodes, materials } = useGLTF('./models/GabeHead.glb')
  return (
    <group dispose={null}>

      <mesh geometry={nodes.Scene_05.geometry} material={materials.texture} position={[0.579, -0.419, -0.677]} rotation={[0.131, 0.062, -0.072]} scale={0.039}

        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >

      </mesh>
    </group>
  )
}

export default GabeHead

useGLTF.preload('./models/GabeHead.glb')
