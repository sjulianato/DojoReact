import React, { Component } from 'react';
import logo from './logo.svg';
import Resultado from './Resultado';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.buscar('audifonos');
    this.state = {
      resultados: []
    }
  }
  cambioInput(elemento){

    console.log('Valor:', elemento.target.value);
  }
  buscar(busqueda){
    fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + busqueda)
    .then(function(resultado) {
      return resultado.json()
    } ).then((json) => {
      this.setState({
        resultados: json.results
      })
    })
      console.log('Después del fetch');
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Búsqueda" onChange={this.cambioInput.bind(this)}></input>
        {this.state.resultados.map(function(resultado){
            return <Resultado resultado={resultado}></Resultado>;
        })}
      </div>
    );
  }
}

export default App;
