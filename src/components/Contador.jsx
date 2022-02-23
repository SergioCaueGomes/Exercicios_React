import { useState } from "react";
import React from "react";

export default props => {
    const [numero ,setNumero] = useState(props.inicial)
    
    

    const inc = () => {
        setNumero(numero + props.passo)

        if (numero >= props.limite) {
            return
        }
    }
    const dec = () => {
        
        if (numero == 0) {
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