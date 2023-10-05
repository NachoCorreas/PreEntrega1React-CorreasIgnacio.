import React, { useEffect, useState } from 'react';
import CardsZapas from './CardsZapas';


export default function ZapasC() {
  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const zapasConverce = [{
            id: 1,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdA7Zhg7AAsU6KKvWGeHefrvBNv0MNl50hgw&usqp=CAU",
            nombre: "Converse Retro 80s ",
            precio: 74000,
            talle : 44
        },
        {
            id: 2,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuws1Xc_YdofzU6aYhbtx5LUKxJncmEjRTg&usqp=CAU",
            nombre: "LOW NBA 90s CLASSIC VINTAGE",
            precio: 97000,
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
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYffIbTF49vNi-X3ZND-DMArn3wd5Z3OlWYg&usqp=CAU",
            nombre: "LOW CONVERSE REPLIC LARRY BIRD",
            precio: 95000,
            talle: 42
        },
        {
            id: 5,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhhSXATaLNu5SogxjFTv-Muji5ek1NE6lYg&usqp=CAU",
            nombre: "Converse CONS -NY",
            precio: 150000,
            talle: 45
        },
        {
            id: 6,
            foto: "https://tafmx.vtexassets.com/arquivos/ids/403552/A03483C-1.jpg?v=638204768216800000",
            nombre: "LARRY BIRD JUMP",
            precio: 150000,
            talle: 43
        
        }]
        
        
        // Resolvemos la Promise con un solo arreglo que contiene los tres arrays
        resolve([...zapasConverce, ]);
      }, 500);
    });
  };

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    // Llamada a la función fetchProducts y actualización del estado
    fetchProducts().then((result) => setProductos(result));
  }, []);

  return (
    <div>
      {/* Renderiza los productos si existen */}
      {productos &&
        productos.map((producto) => (
          <CardsZapas key={producto.id} {...producto} />
        ))}
    </div>
  );
}
