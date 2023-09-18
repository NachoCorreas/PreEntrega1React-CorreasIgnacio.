import React from 'react'
import icono from './assets/retroPicBasquet.jpg'
import "./Iconocss.css"
export default function Icono() {
  return (
    <div>
        <img className='icono' src={icono} alt='logo'/>
    </div>
  )
}
