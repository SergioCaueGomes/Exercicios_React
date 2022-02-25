import logo from './logo.svg';
import './App.css'
import Propriedades from './components/propriedades/Propriedades';
// import Primeiro from './components/primeiro'
// import CompPadrao, { Component1, Component2 } from './components/Multi.js'
// import Estilos from './components/Estilos';
// import MinMax from './components/MinMax';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Produto from './components/produto/Produto';
// import Carro from './components/carro/Carro';
// import Pai from './components/direta/Pai';
// import Pai from  './components/indireta/Pai';
// import Familia from './components/children/Familia';
// import Membro from './components/children/Membro';
// import ParImpar from './components/condicional/ParImpar';
// import UsuarioLogado from './components/condicional/UsuarioLogado';
// import ListaProdutos from './components/lista/ListaProdutos';
// import CadastroNome from './components/classe/CadastroNome';
import DigiteSeuNome from "./components/DigiteSeuNome";



function App() {
  return (

    <div>

      <DigiteSeuNome />
      
      {/* <CadastroNome /> */}

      {/* <ListaProdutos /> */}

      {/* <UsuarioLogado usuario={{nome: 'Sergio', email: 'caue.sergio@gmail.com'}} />
      <UsuarioLogado usuario={{nome: 'Sergio'}} />
      <UsuarioLogado usuario={{email: 'caue.sergio@gmail.com'}} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} /> */}
    </div>


      // <div>
      //     <ParImpar num ={2} />
      //     <ParImpar num ={3} />
      // </div>

    // <div>
    //   <>
    //     <Familia>
    //       <Membro nome="Sergio" sobrenome="Gomes" />
    //     </Familia>
    //     <Familia>
    //       <Membro nome="Sergio" sobrenome="Oliveira" />
    //     </Familia>
    //   </>
    // </div>

    // Indireta
    // <div>
    //   <>
    //     <Pai/>
    //   </>
    // </div>


    // Direta
    // <div>
    //   <>
    //     <Pai/>
    //   </>
    // </div>

      // <div>
      //     <ul className='item_carro'>
      //       <Carro modelo="Batmovel" marca="industrias wayne" cor="Preto" ano="1939" portas="1" combustivel="Gasolina" cambio="Automatico" tam_aro="Maior que tem" potencia="90 mil cavalos" preco="Inestimavel" verde/>
      //       <Carro modelo="Mach 5" marca="Corvette 1979" cor="Branco com Faixa Vermelha" ano="1979" portas="2" combustivel="Gasolina" cambio="6 marchas" tam_aro="21" potencia="5.00 cv" preco="inestimavel" amarelo/>
      //       <Carro modelo="Murcielago LP640" marca="Lamborghini" cor="Preto" ano="" portas="2" combustivel="Gasolina" cambio="Manual 6 Marchas" tam_aro="18 - 19" potencia="640 CV" preco="R$ 919.125" vermelho/>
      //       <Carro modelo="Maverick GT 5.0 V8" marca="Ford" cor="Cinza Chumbo" ano="1974" portas="2" combustivel="Gasolina" cambio="Manual 4 Marchas" tam_aro="18" potencia="197cv" preco="R$ 290.000,00"/>
      //     </ul>
      // </div>

    // <div>
    //   <ul>
    //     <li>
    //       <Produto nome="teclado" marca="dell" valor="179,90" azul/>
    //       <Produto nome="monitor" marca="philips" valor="900,00" verde/>
    //       <Produto nome="Caneca" marca="QSD" valor="20,00" />
    //     </li>
    //   </ul>
    // </div>
    
    // <div className="App">
    //   {/* <Primeiro></Primeiro>
    //   <h2>Primeiro Componente pasta app.</h2>
    //   <MinMax min="2" max="10" />
    //   <MinMax min={4} max={15} />
    //   <Titulo principal="Olá" secundario="tudo bem" />
    //   <Botao />
    //   <Contador inicial={100} passo={10} limite={1000} />
    //   <Contador inicial={0} passo={5} limite={200} />
    //   <Propriedades />
    // </div> */}
  )
}

export default App;

