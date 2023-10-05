import React from 'react'
import "./SectionP.css"
import fotoPortada from "./img/nikeAirShoes.jpg"


export default function SectionPrinc() {
  return (
    <div className='section'>
      <div className='titulo' >
        <h3>Retro Store Promos</h3>
        <span > Queremos Viajar al Pasado, Traerlo al Presente y que Sea el Futuro.
          Queremos que seas parte de esta revolucion, para los amantes del Basquet Ball Retro, este es tu UNIVERSO.
        </span>
      </div>
      <div className='Portada'>
        <img className='fotoPortada' src={fotoPortada} alt='foto portada' />
      </div>


    </div>
  )
}
