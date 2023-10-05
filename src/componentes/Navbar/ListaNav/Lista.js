
import "./style.css"
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
   
      <div className="containerLista" >
        <div className="lista">
        <NavLink to="/adidas" onClick={() => this.ClickNav('zapatillas')}>Adidas</NavLink>
        <NavLink to="/nike" onClick={() => this.ClickNav('conjuntos')}>Nike</NavLink>
        <NavLink to="/converse" onClick={() => this.ClickNav('accesorios')}>Converse</NavLink>
        <picture>{ImagenActual && (
            <img className="img"
            src={require(`./img/${ImagenActual}.png`)}
           
              alt={ImagenActual}

            />
          )}
        </picture>
        </div>
        
      </div>
     
    );
  }
}

export default Lista;
