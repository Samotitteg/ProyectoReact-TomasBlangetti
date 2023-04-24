import React, { useContext, useState } from 'react'
import caduceo from '../Imagenes/caduceo.png'
import login from '../Imagenes/login.png'
import help from '../Imagenes/help.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import carrito from '../Imagenes/carrito.png'
import { Contexto } from '../Contexto/Contexto'


const Navbar = () => {

    const { carro, Total, CantidadTotal, Vaciar } = useContext(Contexto)

  const [caja, setcaja] = useState(false)

  const PicaCarro = () => {
    setcaja(true)
  }

  const NoPicaCarro = () => {
    setcaja(false)
  }


  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand"><img src={caduceo} className='logoFarm' alt='caduceo'/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to={'/'}>INICIO</Link>                    
                    <Link to={'/nosotros'}>NOSOTROS</Link>                    
                    <Link to={'/tienda'}>TIENDA</Link>                    
                    <Link to={'/contacto'}>CONTACTO</Link>                   
                </div>
            </div>
            <div>
                <Link to={'/login'}><img src={login} className='logoFarm' alt="LOGIN"/></Link>
            </div>
            <div>
                <Link to={'/contacto'}><img src={help} className='logoFarm' alt="AYUDA"/></Link>
            </div>
            <div onMouseEnter={PicaCarro}
                onMouseLeave={NoPicaCarro}>
                
                <Link to={'/carrito'}><img src={carrito} className='logoFarm2' alt="CARRITO"/></Link>
                {carro.length > 0 && (
                <span
                  className='globo'>
                  {CantidadTotal()}
                </span>
              )  }
                
              {caja && (
                <div className="Desplegable">
                  <ul>
                    {carro.map((item) => (
                      <li key={item.id}>
                        <span>{item.nombre} | <span className='valor'>x{item.cantidad}</span> <b>${item.precio*item.cantidad}</b></span>
                      </li>
                    ))}
                  </ul>
                  { 
                  carro.length > 0 &&
                  <div>
                    <ul>
                      <span><u>Productos totales:</u> {CantidadTotal()} </span>
                    </ul>
                    <ul>
                    <span><u>Total a pagar:</u> ${Total()} </span>
                    <button type="button" class="btn btn-dark btn-sm" onClick={() => Vaciar()}>Vaciar</button>
                    </ul>
                  </div>
                  }                                        
                  {carro.length <1 &&
                  <div>
                    <span>No Has Agregado Productos</span>
                  </div>
                  }                                        
                </div>           

                
              )} 
            </div>
        </div>
    </nav>
  )
}

export default Navbar