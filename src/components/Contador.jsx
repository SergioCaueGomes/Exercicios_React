import { useState } from "react";
import React from "react";

export default props => {
    const [numero ,setNumero] = useState(props.inicial)
    
    const inc = () => {
        
        if (numero >= props.limite) {
            return
        }
        setNumero(numero + props.passo)

    }
    const dec = () => {
        
        if (numero == 0) {
            return 
        }
        setNumero(numero - props.passo)
    }

    const limite = () => {

        if (numero >= props.limite || numero <= props.limite) {
            return
        }

    }

    return ( 
        <>
            
            <h2>{numero}</h2>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </>
    )
}