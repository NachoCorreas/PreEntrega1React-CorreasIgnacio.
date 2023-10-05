import React, { useState } from 'react';

export default function Contador({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const incrementar = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='contador'>
      <div className='controles'>
        <button className='boton' onClick={decrementar}>
          {' '}
          -{' '}
        </button>
        <h4 className='numero'>{quantity}</h4>
        <button className='boton' onClick={incrementar}>
          {' '}
          +{' '}
        </button>
      </div>
      <div>
        <button
          className='boton'
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
