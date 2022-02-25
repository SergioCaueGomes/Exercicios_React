import React from 'react'
import Membro from './Membro'

function Familia(props) {



return (
    <>
       <h2>[Inicio] Membro da Familia</h2>
            {props.children}
       <h2>[Fim] Membro da Familia</h2>
    </>
    )
}

export default Familia