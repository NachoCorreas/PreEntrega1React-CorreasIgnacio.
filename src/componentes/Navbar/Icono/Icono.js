import React from 'react'
import icono from './assets/retroPicBasquet.jpg'
import "./Iconocss.css"
import { NavLink } from 'react-router-dom'
export default function Icono() {
  return (
    <div>
      <NavLink to="/"><img className='icono' src={icono} alt='logo'/> </NavLink>
    </div>
  )
}
