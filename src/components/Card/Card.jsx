import React from 'react'
import "./Card.css"
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Leggins from "../../Leggins"
import Bolk from "../../Bolk"
import cn from "classnames"
import {useDispatch, useSelector} from "react-redux"
import {changeColor, mainSelector, hideCard} from "../../store/mainSlice"

const Card = () => {
    const dispatch = useDispatch()
    const {currentClothing, typeCurrentCard} = useSelector(mainSelector)

    const changeColorEvent = (color) => {
        dispatch(changeColor({type: typeCurrentCard, color}))
    }

    return (
        <div className="card">
            <div className="card__exit" onClick={() => dispatch(hideCard())}>X</div>
            <div className="card__canvas">
                <Canvas className="staff__canvas">
                    <OrbitControls enableZoom={false} maxPolarAngle={2} minPolarAngle={1}/>
                    <ambientLight intensity={0.01}/>
                    <directionalLight color="#F6D7C5" position={[5, 5, 5]}/>
                    <directionalLight color="#F6D7C5" position={[-5, -5, -5]}/>
                    {(typeCurrentCard === "pants") && <Leggins scale={[8, 8, 8]} position={[0, -8, 0]}/>}
                    {(typeCurrentCard === "bolk") && <Bolk scale={[8, 8, 8]} position={[0, -8, 0]}/>}
                </Canvas>
            </div>
            <div className="card__info">

                <p className="card__type">pants</p>
                <p className="card__name">GO</p>
                <div className="card__count">
                    <p className="card__qty">Qty</p>
                    <span className="card__span minus">-</span>
                    <input className="card__input" type="text" value="1"/>
                    <span className="card__span plus">+</span>
                </div>
                <div className="card__colors">
                    <div
                        className={cn("card__color card__color-1", {"active": currentClothing.pants.color === "red"})}
                        onClick={() => changeColorEvent("red")}>

                    </div>
                    <div
                        className={cn("card__color card__color-2", {"active": currentClothing.pants.color === "green"})}
                        onClick={() => changeColorEvent("green")}>

                    </div>
                    <div
                        className={cn("card__color card__color-3", {"active": currentClothing.pants.color === "blue"})}
                        onClick={() => changeColorEvent("blue")}>

                    </div>
                    <div
                        className={cn("card__color card__color-4", {"active": currentClothing.pants.color === "yellow"})}
                        onClick={() => changeColorEvent("yellow")}>

                    </div>
                    <div
                        className={cn("card__color card__color-5", {"active": currentClothing.pants.color === "black"})}
                        onClick={() => changeColorEvent("black")}>

                    </div>
                </div>
                <div className="card__sizes">
                    <div className="size">XS</div>
                    <div className="size">S</div>
                    <div className="size">M</div>
                    <div className="size">L</div>
                    <div className="size">XL</div>
                </div>

                <p className="card__price">500$</p>
            </div>

        </div>
    )
}

export default Card