import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
            <label className="navbar__logo">CRUD APPLICATION</label>
            <nav className="navbar__menu">
                <NavLink className="navbar__menu__item" to="/product/list">All Products</NavLink>
                <NavLink className="navbar__menu__item" to="/product/add">Add Product</NavLink>
            </nav>
        </div>
    )
}