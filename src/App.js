import React, {Component} from "react";
import './App.css';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      position: null,
    }

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];

      this.gerarFrase = this.gerarFrase.bind(this);

  }

  gerarFrase(){
     let num = Math.floor(Math.random() * this.frases.length);
     this.setState({position: num})
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" click={this.gerarFrase}/>
        <h3 className="textoFrase">{this.frases[this.state.position]}</h3>
      </div>
    );
  }

}

class Botao extends Component{

  render(){
    return(
      <button onClick={this.props.click}>{this.props.nome}</button>
    );
  }
}