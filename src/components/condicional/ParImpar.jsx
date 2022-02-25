import React, {useState} from 'react'
import Propriedades from '../propriedades/Propriedades'

// function ParImpar({num = 0}) {

// return (
//     <>
//         <h2>O numero é.: </h2>
//         {num % 2 == 0
//         ? <h3>par</h3>
//         : <h3>impar</h3>
//         }
//     </>
//     )
// }

// export default ParImpar

function ParImpar(props) {

    let numero = 0
    numero = props.num ? props.num : 0

    return (
        <>
            <h2>O numero é.: </h2>
            {props.num % 2 == 0
            ? <h3>par</h3>
            : <h3>impar</h3>
            }
        </>
        )
    }
    
    export default ParImpar