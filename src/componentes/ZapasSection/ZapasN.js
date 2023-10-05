import React, { useEffect, useState } from 'react';
import CardsZapas from './CardsZapas';


export default function ZapasN() {
  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const zapasNike= [{
            id: 1,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjZLpaoMD57ex0o13ZcdPFthedb4br9UdQA&usqp=CAU",
            nombre: "NIKE MALONE 1998 ",
            precio: 68000,
            talle : 44
        },
        {
            id: 2,
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2ycicgpxf9UEnp65AYNAzFXSetDM5xHlWULJP9hwq5Xwm4IiVzGDmPqfePGUb5HCthI&usqp=CAU",
            nombre: "NIKE HIGH JUMP CLASSIC VINTAGE",
            precio: 77000,
            talle : 46
        },
        {
            id: 3,
            foto: "https://cdn-images.farfetch-contents.com/16/65/74/03/16657403_32619235_1000.jpg",
            nombre: "NIKE LOW VINTAGE LIGTHBLUE",
            precio: 62000,
            talle: 41
        },
        {
            id: 4,
            foto: "https://http2.mlstatic.com/D_NQ_NP_716166-MLC69617912675_052023-O.webp",
            nombre: "NIKE JUMP 3 CLASSIC",
            precio: 85000,
            talle: 42
        },
        {
            id: 5,
            foto: "https://cdn.bleacherreport.net/images_root/slides/photos/000/463/717/NikeAirMoreUptempo_original.png?1287990176",
            nombre: "NIKE TEMPO 1 OLD SCHOOL",
            precio: 110000,
            talle: 45
        },
        {
            id: 6,
            foto: "https://static.wixstatic.com/media/cc9c78_4844a128329946f1b515700737c723c8~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/cc9c78_4844a128329946f1b515700737c723c8~mv2.jpg",
            nombre: "NIKE AIR JORDAN 1",
            precio: 125000,
            talle: 43
        
        }];
        
        // Resolvemos la Promise con un solo arreglo que contiene los tres arrays
        resolve([...zapasNike, ]);
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
