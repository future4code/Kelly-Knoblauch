import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etapa1 from './Etapas/Etapa1.js';
import Etapa2 from './Etapas/Etapa2.js';
import Etapa3 from './Etapas/Etapa3.js';
import Final from './Etapas/Final.js';










class App extends React.Component {
  state = {

    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        break
    }
  }


  irProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }



  render() {
    const etapas = this.state.etapa < 4 ?
      <div>
        {this.renderizarEtapa()}
        <br/>
        <button onClick={this.irProximaEtapa} >Próxima Etapa</button>
      </div> :
      <div>
        {this.renderizarEtapa()}
      </div>


    return (
      <div>
        {etapas}
      </div>
    );
}
}
export default App;