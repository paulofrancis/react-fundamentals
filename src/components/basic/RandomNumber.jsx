import React from "react";

export default function RandomNumber(props){
    
    const {min, max} = props;
    const randomNumber = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Random Number Gen</h2>
            <p>Min: { min }</p>
            <p>Max: { max }</p>
            <p>Your random number is: <strong>{ randomNumber }</strong></p>
        </div>
    )
}