import React from "react"
import { useLocation } from "react-router-dom"

export default function ViewProduct(props){
    const location = useLocation()
    const product = location.state.product
    return(
        <div className="div-container">
            <div>
                <h1>{product.name}</h1>
                <p><strong>Id : </strong>{product.id}</p>
                <p><strong>Price : </strong>${product.price}</p>
                <p><strong>Category : </strong>{product.category}</p>
            </div>
        </div>
    )
}