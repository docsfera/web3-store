import React from 'react'
import "./AssortmentGetter.css"

const AssortmentGetter = ({changeIsShowAssortment}) => {
    return (
        <div className="assortment-getter" onClick={changeIsShowAssortment}>
            O
        </div>
    )
}

export default AssortmentGetter