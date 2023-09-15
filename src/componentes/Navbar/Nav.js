import React from 'react'
import "./style.css"
import Lista from '../ListaNav/Lista'
import Titulo from '../Titulo/Titulo'
export default function Nav() {
  return (
    <div className='navbar'>
        <Titulo/>
      <Lista/>
    </div>
  )
}
