import React from 'react';
import "./Person.css"
import {OrbitControls} from "@react-three/drei";
import Model from "../../Try";
import {Canvas} from "@react-three/fiber";

const Person = () => {
    return (
        <div className="person">
            <Canvas camera={{position:[1,0,5]}} style={
                {
                    position: "absolute",
                    width: "30vw",
                    top: "25vh",
                    left: "0px"
                    
                }
            }>

                <OrbitControls enableZoom={false} maxPolarAngle={1} minPolarAngle={1}/>
                <ambientLight intensity={0.01} />
                <directionalLight color="#F6D7C5" position={[5, 5, 5]} />
                <directionalLight color="#F6D7C5" position={[-5, -5, -5]} />
                <Model scale={[2,2,2]}
                       position={[0,-0.5,0]}
                />
                {/*<mesh>*/}
                {/*    <boxGeometry />*/}
                {/*</mesh>*/}
            </Canvas>
        </div>
    )
}

export default Person