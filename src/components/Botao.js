import React from "react";
import Botao from './Botao.css'

export default props => {
    function cadastrar() {
        console.log('Cadastrou');
    }
    return (
        <>
        <button className="btn" onClick={cadastrar}>Cadastrar</button>
        <button className="btn" onClick={cadastrar}>Cadastrar</button>
        <button className="btn" onClick={cadastrar}>Cadastrar</button>
        </>
    )
}