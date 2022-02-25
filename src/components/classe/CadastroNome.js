import React, { Component } from "react";

class CadastroNome extends Component {
    
    constructor (props) {
        super(props)
        this.state = { 
             nome:'',
             email:''
        }
    }

    // cadastrar(){
    //     console.log(this.state.nome, this.state.email)
    // }

    // render(){
    //     return (
    //         <>
    //         <form>
    //             <label>Nome</label><br>
    //             <br></br><input type="text" placeholder="Digite seu nome" value={this.state.nome} onChange ={(event) => this.setState({nome: event.target.value})} /><br></br>
    //             <label>Email</label><br>
    //             <br/><input type="email" placeholder="Digite seu email" value={this.state.email} onChange ={(event) => this.setState({email: event.target.value})} /><br></br>
    //         </form>
    //         <br></br>
    //         <button onClick={() => this.state.cadastrar()}>Cadastrar</button>
    //     </>
    //     )
    // }
    
     render(){
         return (
             <>
             <h1>{this.state.nome}</h1>
             <label>Nome: </label><input type="text" placeholder="Digite seu nome" value={this.state.nome} onChange ={(event) => this.setState({nome: event.target.value})} /><br/>
             <h1>{this.state.email}</h1>
             <label>Email: </label><input type="text" placeholder="Digite seu nome" value={this.state.email} onChange ={(event) => this.setState({email: event.target.value})} />
         </>
         )
    }
}

export default CadastroNome