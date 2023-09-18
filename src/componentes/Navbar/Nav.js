import React from 'react'
import "./style.css"
import Lista from '../ListaNav/Lista'
import Titulo from '../Titulo/Titulo'
import Icono from '../Icono/Icono'
export default function Nav() {
  return (
    <div className='navbar'>
      <Titulo/>
      <Icono/>
      <Lista/>
    </div>
  )
}
