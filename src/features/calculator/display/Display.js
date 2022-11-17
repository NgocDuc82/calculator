import React from 'react';
import './Display.scss'

import { useSelector } from 'react-redux'
const Display = () => {
    const value = useSelector(state => state.calculatorSlice)
    const valueString = value.display.join('')
    console.log(value.history);
    return (
        <div className="screen">

            <div className={valueString === '' ? "result light" : "result dark"}>{value.result} </div>
            <div className="oparation">{valueString}</div>

        </div>
    );
}

export default Display;
