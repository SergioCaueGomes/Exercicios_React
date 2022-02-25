import React, { Component } from "react";

class CadastroNome extends Component {
    
    constructor (props) {
        super(props)
        this.state = { 
             nome:''
        }
    }

    render(){
        return (
            <>
            <h1>{this.state.nome}</h1>
            <input type="text" placeholder="Digite seu nome" value={this.state.nome} onChange ={(event) => this.setState({nome: event.target.value})} />
        </>
        )
    }
}

export default CadastroNome