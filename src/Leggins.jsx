/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 leggins.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/leggins.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pants.geometry} material={materials['Material.005']} />
    </group>
  )
}

export default Model

useGLTF.preload('/leggins.glb')
