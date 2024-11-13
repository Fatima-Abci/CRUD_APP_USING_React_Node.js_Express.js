import React from "react"

export default function Button(props){
    return(
        <button
            className={`btn ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}