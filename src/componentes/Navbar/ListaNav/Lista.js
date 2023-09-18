
import "./style.css"
import React, { Component } from 'react';

class Lista extends Component {
  constructor() {
    super();
    this.state = {
      ImagenActual: null,
    };
  }

  ClickNav = (nomImg) => {
    this.setState({ ImagenActual: nomImg });
  }

  render() {
    const { ImagenActual } = this.state;

    return (
      <div className="lista">
        <button  onClick={() => this.ClickNav('zapatillas')}>Zapatillas</button>
        <button onClick={() => this.ClickNav('conjuntos')}>Conjuntos</button>
        <button onClick={() => this.ClickNav('accesorios')}>Accesorios</button>

        <div>
          {ImagenActual && (
            <img
            src={require(`./img/${ImagenActual}.png`)}
           
              alt={ImagenActual}
              style={{ maxWidth: '100px' }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Lista;
