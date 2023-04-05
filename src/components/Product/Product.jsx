import React from 'react';
import cn from "classnames";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Leggins from "../../Leggins";
import Bolk from "../../Bolk"
import {showCard} from "../../store/mainSlice";
import {useDispatch, useSelector} from "react-redux"
import {mainSelector, selectProduct} from "../../store/mainSlice";

const Product = (props) => {
    const dispatch = useDispatch()
    const {currentClothing} = useSelector(mainSelector)

    const isActive = currentClothing[props.name].isCurrent

    return (
        <div className={cn("test", {"staff-active": isActive})} onClick={() => dispatch(selectProduct(props.name))}>
            <div className="staff leggins" onClick={(e) => e.stopPropagation()} >
                <Canvas className="staff__canvas">

                    <OrbitControls enableZoom={false} maxPolarAngle={2} minPolarAngle={1}/>
                    <ambientLight intensity={0.01} />
                    <directionalLight color="#F6D7C5" position={[5, 5, 5]} />
                    <directionalLight color="#F6D7C5" position={[-5, -5, -5]} />
                    {(props.name === "pants") && <Leggins scale={[8,8,8]} position={[0,-8,0]}/>}
                    {(props.name === "bolk") && <Bolk scale={[8,8,8]} position={[0,-8,0]}/>}
                </Canvas>

            </div>
            <div className="staff__info">
                <p className="staff__name">GO</p>
                <div className="staff__order">
                    <p className="staff__price">400$</p>
                    <button className="staff__button" onClick={(e) => {
                        e.stopPropagation()
                        dispatch(showCard(props.name))
                    }}>Add</button>
                </div>
            </div>

        </div>
    );
};

export default Product;