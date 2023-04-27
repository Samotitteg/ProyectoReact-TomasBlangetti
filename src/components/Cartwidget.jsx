import React, { useContext, useState } from 'react'
import Navbar from './Navbar/Navbar'
import ItemListConteiner from './ItemListConteiner'
import { Contexto } from './Contexto/Contexto'
import { Link } from 'react-router-dom'




const Cartwidget = () => {

  const { carro, Total, CantidadTotal, Vaciar } = useContext(Contexto)
  

  return (
    <div>
        <>
        <Navbar/>
        <ItemListConteiner saludo="CARRITO DE COMPRAS"/>
        <div>
        {carro.length > 0 && (
                
                <div>
                  <ul>
                    {carro.map((item) => (
                    <div>
                      <div key={item.id} className='tarjeta2'>
                        <div >
                        <img className='u4' src={item.imagen}/>
                        </div>
                        <div className='u'>
                        <h3>{item.nombre}</h3>
                        </div>
                        <div className='u'>
                        <p>{item.detalle}</p>
                        </div>
                        <div className='u'>
                        <p>Precio: ${item.precio}</p>
                        </div>
                        <div className='u'>
                        <span><u>Cantidad:</u> {item.cantidad} </span>
                        </div>
                        <div className='u5'>
                        <span><u>Total producto:</u>  $  {item.cantidad*item.precio} </span>
                        </div>
                        

                      </div>
                      
                    </div>
                      
                    ))}
                  </ul>
                  <div className='u6'>
                        <span><u>Cantidad Total de Productos:</u>  {CantidadTotal()} </span>
                  </div>
                  <div className='u6'>
                        <span><u>TOTAL GENERAL:</u>   $   {Total()} </span>
                  </div>
                  <div className='u7'>
                    <button type="button" class="btn btn-dark btn-sm" onClick={() => Vaciar()}>Vaciar Carrito</button>
                  </div>
                  <div className='u7'>
                  <Link to={'/tienda'}><button type="button" className='u5'>SEGUIR COMPRANDO</button></Link>
                  </div>
                </div>)
                  
                  }
        </div>
        </>
        
    </div> 
  )
}

export default Cartwidget