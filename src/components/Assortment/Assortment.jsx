import React from 'react';
import "./Assortment.css"
import Product from "../Product/Product";
import cn from "classnames"

const Assortment = ({isShowAssortment}) => {

    console.log(isShowAssortment)

    return (
        <div className={cn("assortment", {"assortment-show": isShowAssortment})}>
            <Product name="pants"/>
            <Product name="bolk"/>
        </div>
    )
}

export default Assortment;