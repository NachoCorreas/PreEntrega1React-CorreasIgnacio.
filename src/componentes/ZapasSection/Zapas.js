import React, { useEffect, useState } from 'react';
import CardsZapas from './CardsZapas';
import "./zapas.css"

export default function Zapas() {
  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const zapasAdidas = [{
            id: 1,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGdQP7dlGmriEzvuIJz1a5s0DX2RhSddymWW-HLGNlAFoCDWd5XSH_jpz5QDwkiVHObk&usqp=CAU",
            nombre: "Adidas Forum 1998 ",
            precio: 64000,
            talle : 44
        },
        {
            id: 2,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ODhCxKd1VMWKDelXH97F4WCZ05AKUc4mZ_XlaOi7jYCvC7S2hqzrjeGBl2KkLvEeKOM&usqp=CAU",
            nombre: "HOOPS 3.0 MID CLASSIC VINTAGE",
            precio: 47000,
            talle : 46
        },
        {
            id: 3,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1M5mB6pQ47wvfRgTdFxIfcvykNvxeVPJFx7SDJKDlTnqu0ATdGF3ONKQjw65n9YY6Gs&usqp=CAU",
            nombre: "HOOPS 3.0 MID CLASSIC VINTAGE WHITE",
            precio: 45000,
            talle: 41
        },
        {
            id: 4,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwMmU13hqgIO3i8HsmXSxMq91BONH4jGEBj5ekmjLToxF6QjLKzYXbp-0cvAGmbBV2Jo&usqp=CAU",
            nombre: "Adidas Patrick Ewing - Patrick Ewing",
            precio: 95000,
            talle: 42
        },
        {
            id: 5,
            foto: "https://media.revistagq.com/photos/5ca5e762e4ce217cdeaffe00/master/w_350,h_190,c_limit/zapatillas_historicas_baloncesto__63115845.jpg",
            nombre: "Adidas Patrick Ewing-NY",
            precio: 120000,
            talle: 45
        },
        {
            id: 6,
            foto: "https://media.revistagq.com/photos/62015b8090b22fe93c96dee8/master/w_160%2Cc_limit/adidas-crazy-1-kobe-gy3808-yellow-sunshine.jpeg",
            nombre: "Adidas The Kobe - Kobe Bryant",
            precio: 140000,
            talle: 43
        
        }];
        
        // Resolvemos la Promise con un solo arreglo que contiene el array de prod
        resolve([...zapasAdidas, ]);
      }, 500);
    });
  };

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    // Llamada a la función fetchProducts y actualización del estado
    fetchProducts().then((result) => setProductos(result));
  }, []);

  return (
    <div >
      {/* Renderiza los productos si existen */}
      {productos &&
        productos.map((producto) => (
          <CardsZapas key={producto.id} {...producto} />
        ))}
    </div>
  );
}


