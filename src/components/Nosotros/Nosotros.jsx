import React from 'react'
import Navbar from '../Navbar/Navbar'
import caduceo from '../Imagenes/caduceo.png'

const Nosotros = () => {
  return (
    <>
    <Navbar/>
    <div className='saludo'>
        

        <p className='saludoP'> Nosotros </p>
       

        <img src={caduceo} className='logoFarm' alt='caduceo'/>
    </div>
    </>
  )
}

export default Nosotros