import React from 'react'
import Navbar from '../Navbar/Navbar'
import caduceo from '../Imagenes/caduceo.png'
import ItemListConteiner from '../ItemListConteiner'

const Nosotros = () => {
  return (
    <>
    <Navbar/>
    <div className='saludo'>
        

        <ItemListConteiner saludo="NOSOTROS"/>
       

        <img src={caduceo} className='logoFarm' alt='caduceo'/>
    </div>
    </>
  )
}

export default Nosotros