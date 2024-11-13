import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.js"

export default function RootLayout(){
    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}