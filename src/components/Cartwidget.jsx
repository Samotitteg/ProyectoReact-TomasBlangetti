import React from 'react'
import Navbar from './Navbar/Navbar'
import ItemListConteiner from './ItemListConteiner'




const cartwidget = () => {
  return (
    <div>
        <>
        <Navbar/>
        <ItemListConteiner saludo="CARRITO DE COMPRAS"/>
        </>
        
    </div> 
  )
}

export default cartwidget