import { useState } from "react";
import React from "react";

export default props => {
    const [numero ,setNumero] = useState(props.inicial)
    
    

    const inc = () => {
        setNumero(numero + props.limite)

        if (numero >= props.limite || numero == 0) {
            return
        }
    }
    const dec = () => {
        
        if (numero == 0 || numero >= props.limite) {
            return
        }
        setNumero(numero - props.limite)
    }
    return ( 
        <>
            
            <h2>{numero}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </>
    )
}