import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useContext } from 'react'
import { Datos } from '../Contexto/Contexto'


const Tienda = () => {
    const { product } = useContext(Datos)
    
  return (
    <>
    <Navbar/>

    <div className='saludo'>Tienda</div>
    
    <div className='items'>
        {product.map ( (i)=> {
            return(
            <div>
                <img className='imagen' src={i.imagen} alt={i.nombre} />
                <h2>{i.nombre}</h2>
                <h5>{i.detalle}</h5>
                <h3>{i.precio}</h3>
            </div>
            )   
        })}
    </div>
    
    </>
  )
}

export default Tienda