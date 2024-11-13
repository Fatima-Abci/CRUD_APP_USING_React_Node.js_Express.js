import React from "react"

export default function Input(props){
    return(
        <input
            placeholder={props.placeholder}
            text={props.text}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            className="input"
        >
        </input>
    )
}