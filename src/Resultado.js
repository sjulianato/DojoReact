import React, {Component} from 'react';

class Resultado extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Item'>
        <div className="Título">{this.resultado.title}</div>
        <div className="Imagen">{this.resultado.thumbnail}</div>
        <div className="Precio">{this.resultado.price}</div>
        <div className="Link">{this.resultado.permalink}</div>
      </div>
    );
  }
}
export default Resultado;
