import React from "react"

export default function WithParam(props) {
    // props are read only!!! 
    return (
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.subtitle }</h3>
        </div>
    )
}