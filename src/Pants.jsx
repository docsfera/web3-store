/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pants.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pants.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BaseMesh_Female.geometry} material={nodes.BaseMesh_Female.material} />
      <mesh geometry={nodes.Mesh.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('/pants.glb')
