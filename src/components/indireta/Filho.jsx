import React from 'react'

function Filho(props) {
    
    function gerarNumero(){
        return Math.random()
    }
    
return (
    <>
    <button onClick={function() {
        const num =gerarNumero()
        props.funcao('Valor Gerado.: ',num)
    }}>Executar</button>    
    </>
    )
}

export default Filho