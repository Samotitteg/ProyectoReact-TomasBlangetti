import React from 'react'
import carrito from '../components/Imagenes/carrito.png'

const cartwidget = () => {
  return (
    <div>
        <a href="#"><img src={carrito} className='logoFarm2' alt="CARRITO"/></a>
        <p>3</p>
    </div> 
  )
}

export default cartwidget