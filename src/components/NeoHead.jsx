/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/neoHead.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const NeoHead = (props) => {
  const { nodes, materials } = useGLTF('./models/neoHead.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.gçerçeve.geometry} material={nodes.gçerçeve.material} position={[-0.426, 0.635, 0.394]} scale={[1.041, 1, 1.5]} />
      <mesh geometry={nodes.göçerç.geometry} material={nodes.göçerç.material} position={[-0.333, 0.127, 0.604]} scale={[1.041, 1, 1]} />
      <mesh geometry={nodes.gcam.geometry} material={nodes.gcam.material} position={[-0.324, 0.375, 0.817]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[1.041, 1, 1]} />
      <mesh geometry={nodes.neo.geometry} material={materials.Material} position={[-0.324, 0.053, 0]} />
    </group>
  )
}

export default NeoHead
useGLTF.preload('./models/neoHead.glb')
