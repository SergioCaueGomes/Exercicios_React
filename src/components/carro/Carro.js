import React, { useState } from 'react'
import './Carro.css'

function Carro(props) {

    let itemClasses = 'item '
    itemClasses += props.verde ? 'verde' : ''
    itemClasses += props.amarelo ? 'amarelo' : ''
    itemClasses += props.vermelho ? 'vermelho' : ''

    return (
        <> 
        <li className={itemClasses}>
            <div className="modelo">Modelo: {props.modelo}</div>
            <div className="marca">Marca: {props.marca}</div>
            <div className="cor">Cor: {props.cor}</div>
            <div className="ano">Ano: {props.ano}</div>
            <div className="portas">Portas: {props.portas}</div>
            <div className="combustivel">Combustivel: {props.combustivel}</div>
            <div className="cambio">Cambio: {props.cambio}</div>
            <div className="tam_aro">Tamanho Aro: {props.tam_aro}</div>
            <div className="potencia">Potrncia: {props.potencia}</div>
            <div className="preco">Preço: {props.preco}</div>
        </li>
        </>
    )
}

export default Carro