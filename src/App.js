import {useRef, useState} from 'react'
import "./App.css"
import {Canvas} from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import {useAnimations, useFBX} from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {OrbitControls, TrackballControls} from "@react-three/drei";
import Person from "./Person";
import Animate from "./Animate";
import Wrist from "./Wrist"
import cn from "classnames"
import Leggins from "../src/Leggins"
import Glowers from "../src/Glowers"
import Model from "./Try"
import Card from "./components/Card/Card"
import {useDispatch, useSelector} from "react-redux"
import {showCard, mainSelector} from "./store/mainSlice"
import Product from "./components/Product/Product";

function App() {
    const dispatch = useDispatch()
    const {isShowCard} = useSelector(mainSelector)
    const [isWrist, setIsWrist] = useState(false)

    const [isBolka, setIsBolka] = useState(false)
    const [isPants, setIsPants] = useState(false)




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
                       // isLeggins={isLeggins}
                       isPants={isPants}
                />
                {/*<mesh>*/}
                {/*    <boxGeometry />*/}
                {/*</mesh>*/}
            </Canvas>

            <div className="main">
                <Product name="pants"/>
                <Product name="bolk"/>
            </div>

            {isShowCard && <Card/>}

        </div>
    )
}

export default App
