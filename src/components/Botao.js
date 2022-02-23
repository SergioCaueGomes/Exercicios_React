import React from "react";
import Botao from './Botao.css'

export default props => {
    function cadastrar() {
        console.log('Cadastrou');
    }
    function atualizar() {
        console.log('Atualizou');
    }
    function deletar() {
        console.log('Deletou');
    }
    return (
        <>
        <button className="btn" onClick={cadastrar}>Cadastrar</button>
        <button className="btn" onClick={atualizar}>Atualizar</button>
        <button className="btn" onClick={deletar}>Deletar</button>
        </>
    )
}