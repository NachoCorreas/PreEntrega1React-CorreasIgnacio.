import React from 'react';
import Contador from './Contador';
import "./CardsZapas.css";
export default function CardsZapas({ id, foto, nombre, precio, talle, productos }) {
  return (
    <div className='cardContainer'>
      <li className='card'>
        <img className='imgZapas' src={foto} alt={nombre} />
        <div>
          <strong>{nombre}</strong> - ${precio}
        </div>
        <footer>
          <small>talle: {talle}</small>
          <Contador stock={10} initial={1} onAdd={(quantity) => console.log(`Agregado al carrito: ${quantity} unidades`)} />
        </footer>
      </li>
    </div>
  );
}
