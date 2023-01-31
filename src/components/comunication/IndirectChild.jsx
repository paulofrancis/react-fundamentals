import React from "react";

export default props => {
    
    const [min, max] = [20, 50]
    const randomAge = () => parseInt(Math.random() * (min)) + max
    const randomNed = () => Math.random() > 0.5

    return (
        <div>
            <div>Child</div>
            <button onClick={_ => props.whenClick('Francisco', randomAge, randomNed)}>
                Input Information
            </button>
        </div>
    )
}