import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="stepInput">Step: </label>
            <input type="number"
                id="stepInput"
                value={props.step}
                onChange={e => props.setStep(+e.target.value)} />
        </div>
    )
}