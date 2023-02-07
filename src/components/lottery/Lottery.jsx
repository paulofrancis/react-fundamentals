import React, { useState } from "react";
import './Loterry.css'

export default props => {
    
    function generateIfNotExistsInArray(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ?
            generateIfNotExistsInArray(min, max, array) :
            random;
    }

    function generateNumbers(quantity) {
        const numbers = Array(quantity)
        .fill(0)
        .reduce((nums) => {
            const newNumber = generateIfNotExistsInArray(1, 60, nums)
            return [...nums, newNumber];
        }, [])
        .sort((n1, n2) => n1 - n2);

        return numbers;
    }
    
    const [quantity, setQuantity] = useState(props.quantity || 6)
    const numbersInit = Array(quantity).fill(0)
    const [numbers, setNumbers] = useState(numbersInit)

    return (
        <div className="loterry">
            <h2>Loterry</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantity of numbers</label>
                <input 
                type="number" 
                min={6}
                max={15}
                value={quantity} 
                onChange={e => {
                    setQuantity(+e.target.value)
                    setNumbers(generateNumbers(+e.target.value))
                }} />
            </div>
            <button onClick={_ => setNumbers(generateNumbers(quantity))}>
                Generate Numbers
            </button>
        </div>
    )
}