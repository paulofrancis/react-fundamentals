import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default props => {
    
    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function setParentInformation(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong> </span>
                <span>{nerd ? 'Yes' : 'No'}</span>
            </div>
            <IndirectChild whenClick={setParentInformation}></IndirectChild>
        </div>
    )
}