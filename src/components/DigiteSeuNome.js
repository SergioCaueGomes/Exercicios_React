import React, { useState } from 'react';

export function DigiteSeuNome(props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    let cadastrar = () => {
        console.log("Cadastrou")
    }
    return (

        <>
            <form>
                <label>Nome:</label><br/>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={event => setNome(event.target.value)}/><br></br>
                <br/><label>Email:</label><br/>
                <input type="email" placeholder='Digite seu email' value={email} onChange={event => setEmail(event.target.value)}/><br></br>
                <br></br><button onClick={() => cadastrar()}>Cadastrar</button>
            </form>
        </>

        // <>
        //     <h2>{nome}</h2>
        //     <h2>{email}</h2>
        //     <input type="text" placeholder="Digite seu nome" value={nome} onChange={event => setNome(event.target.value)}/>
        //     <input type="email" placeholder='Digite seu email' value={email} onChange={event => setEmail(event.target.value)}/>
        // </>
    );
}

export default DigiteSeuNome