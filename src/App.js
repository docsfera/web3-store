import "./App.css"
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei"
import Model from "./Try"
import Card from "./components/Card/Card"
import {useSelector} from "react-redux"
import {useState} from "react"
import {mainSelector} from "./store/mainSlice"
import Product from "./components/Product/Product"
import Assortment from "./components/Assortment/Assortment";
import AssortmentGetter from "./components/AssortmentGetter/AssortmentGetter";
import Person from "./components/Person/Person";

function App() {
    const {isShowCard} = useSelector(mainSelector)

    const [isShowAssortment, setIsShowAssortment] = useState(false)
    const changeIsShowAssortment = () => setIsShowAssortment(!isShowAssortment)

    return (
        <div className="App">
            <Person/>

            <AssortmentGetter changeIsShowAssortment={changeIsShowAssortment}/>

            <Assortment isShowAssortment={isShowAssortment}/>
            {/*<div className="main">*/}
            {/*    <Product name="pants"/>*/}
            {/*    <Product name="bolk"/>*/}
            {/*</div>*/}

            {isShowCard && <Card/>}

        </div>
    )
}

export default App
