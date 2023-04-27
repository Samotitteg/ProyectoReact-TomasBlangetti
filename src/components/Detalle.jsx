import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Contexto } from './Contexto/Contexto';
import eliminar from './Imagenes/eliminar.jpg'
import Navbar from './Navbar/Navbar';

import { Link } from 'react-router-dom';
import ItemListConteiner from './ItemListConteiner';




const Detalle = () => {

  const {itemId} =useParams()

  const { mostrar, Total, CantidadTotal, Vaciar } = useContext(Contexto)
  

  return (
    <div>
        <>
        <Navbar/>
        <ItemListConteiner saludo="CARRITO DE COMPRAS"/>
        <div>
        {mostrar.length > 0 && (
                
                <div>
                  <ul>
                    {mostrar.map((itemId) => (
                    <div>
                      <div key={itemId.id} className='tarjeta2'>
                        <div >
                        <img className='u4' src={itemId.imagen}/>
                        </div>
                        <div className='u'>
                        <h3>{itemId.nombre}</h3>
                        </div>
                        <div className='u'>
                        <p>{itemId.detalle}</p>
                        </div>
                        <div className='u'>
                        <p>Precio: ${itemId.precio}</p>
                        </div>
                        <div className='u'>
                        <span><u>Cantidad:</u> {itemId.cantidad} </span>
                        </div>
                        <div className='u5'>
                        <span><u>Total producto:</u>  $  {itemId.cantidad*itemId.precio} </span>
                        </div>
                        

                      </div>
                      
                    </div>
                      
                    ))}
                  </ul>
                  </div>  
                  
                 ) }
        </div>
        </>
        
    </div> 
  )
}

export default Detalle