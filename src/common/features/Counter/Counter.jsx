import React, { useState } from 'react'
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'

const Counter = ({count, countHandlerMinus, countHandler}) => {

    const [counter, setCounter] = useState(count)
    const countHandlerMinusLocal = () => {
        if(counter > 1){
            setCounter(prev => prev  - 1 )
            countHandlerMinus(counter)
        }
    }

    const countHandlerPlusLocal = () => {
        setCounter(counter  + 1)
        countHandler(counter)
    }

    return (
        <div className="counter">
            <button className="counter__button" onClick={countHandlerMinusLocal}>
                <img src={minus} alt="minus"/>
            </button>
            <input type="text" readOnly className="counter__field" defaultValue="1" value={counter}  min="0"/>
            <button className="counter__button" onClick={countHandlerPlusLocal}><img src={plus} alt="minus"/></button>
        </div>
    )
}

export default Counter
