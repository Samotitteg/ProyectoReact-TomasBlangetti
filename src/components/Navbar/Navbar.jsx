import React from 'react'
import caduceo from '../Imagenes/caduceo.png'
import login from '../Imagenes/login.png'
import help from '../Imagenes/help.jpg'
import './Navbar.css'

import { Link } from 'react-router-dom'
import carrito from '../Imagenes/carrito.png'



const Navbar = () => {
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
            <div>
                <Link to={'/carrito'}><img src={carrito} className='logoFarm2' alt="CARRITO"/></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar