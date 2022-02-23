import logo from './logo.svg';
import './App.css'
import Primeiro from './components/primeiro'
import CompPadrao, { Component1, Component2 } from './components/Multi.js'
import Estilos from './components/Estilos';
import MinMax from './components/MinMax';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <Primeiro></Primeiro>
      <h2>Primeiro Componente pasta app.</h2>
      <MinMax min="2" max="10" />
      <MinMax min={4} max={15} />
      <Titulo principal="Olá" secundario="tudo bem" />
      <Botao />
      <Contador inicial={100} passo={10} limite={1000} />
      <Contador inicial={0} passo={5} limite={200} />
    </div>
  );
}

export default App;

