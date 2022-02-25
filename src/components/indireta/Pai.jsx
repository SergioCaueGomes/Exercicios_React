import React, {useState} from 'react'
import Filho from './Filho'

export default props => {
    const [texto, setTexto] = useState('')
    const [numero, setNumero] = useState(0)

    function setValores(texto, numero) {
        setTexto(texto)
        setNumero(numero)

    }
return (
    <>
        <h2>
            {texto} {numero}
        </h2>
        <Filho funcao={setValores}/>      
    </>
    )
}
