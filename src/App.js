import {useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import {useAnimations, useFBX} from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {OrbitControls, TrackballControls} from "@react-three/drei";
import Person from "./Person";
import Animate from "./Animate";
import Wrist from "./Wrist"
import Leggins from "../src/Leggins"
import Glowers from "../src/Glowers"
import Model from "./Try"

function App() {

    const [isWrist, setIsWrist] = useState(false)
    const [isLeggins, setIsLeggins] = useState(false)
    const [isBolka, setIsBolka] = useState(false)
    const [isPants, setIsPants] = useState(false)
    console.log(isPants)

    return (
        <div className="App">
            <Canvas camera={{position:[1,0,5]}} style={
                {
                    position: "absolute",
                    width: "50vw",
                    top: "25vh"
                }
            }>

                <OrbitControls enableZoom={false} maxPolarAngle={1} minPolarAngle={1}/>
                <ambientLight intensity={0.01} />
                <directionalLight color="#F6D7C5" position={[5, 5, 5]} />
                <directionalLight color="#F6D7C5" position={[-5, -5, -5]} />
                <Model scale={[2,2,2]}
                       position={[0,-0.5,0]}
                       isBolka={isBolka}
                       isWrist={isWrist}
                       isLeggins={isLeggins}
                       isPants={isPants}
                />
                {/*<mesh>*/}
                {/*    <boxGeometry />*/}
                {/*</mesh>*/}
                {/*{isWrist*/}

                {/*<Wrist scale={[2,2,2]} position={[0,-0.5,0]} isWrist={isWrist} isLeggins={isLeggins}/>*/}

                {/*<Leggins scale={[2,2,2]} position={[0,-0.5,0]}/>*/}
                {/*    ? <Wrist scale={[2,2,2]} position={[0,-0.5,0]} isWrist={isWrist}/>*/}
                {/*    : <Animate scale={[200,200,200]} position={[0,-0.5,0]}/>}*/}
                {/*<primitive object={fbx}/>*/}
                {/*scale={[200,200,200]}*/}
            </Canvas>

            <div className="main">
                <div className="staff wrist" onClick={() => setIsWrist(!isWrist)}>
                    <Canvas>
                        {/*<OrbitControls enableZoom={false} maxAzimuthAngle={1} maxAzimuthAngle={1} target={[0,0,2.2]}/>*/}
                        {/*<TrackballControl />*/}
                        <ambientLight intensity={0.01} />
                        <directionalLight color="#F6D7C5" position={[5, 5, 5]} />
                        <directionalLight color="#F6D7C5" position={[-5, -5, -5]} />
                        <Glowers scale={[10,10,10]} position={[0, 0, 0]} rotation={[0,0,0]}/>
                    </Canvas>
                </div>





                <div className="staff leggins" onClick={() => setIsLeggins(!isLeggins)}>
                    <Canvas>

                        <OrbitControls enableZoom={false} maxPolarAngle={2} minPolarAngle={1}/>
                        <ambientLight intensity={0.01} />
                        <directionalLight color="#F6D7C5" position={[5, 5, 5]} />
                        <directionalLight color="#F6D7C5" position={[-5, -5, -5]} />
                        <Leggins scale={[8,8,8]} position={[0,-8,0]}/>
                    </Canvas>
                </div>
                <div className="staff fotbolka" onClick={() => setIsBolka(!isBolka)}></div>
                <div className="staff pants" onClick={() => setIsPants(!isPants)}></div>

            </div>

        </div>
    );
}

export default App;
