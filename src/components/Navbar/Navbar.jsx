import React from 'react'
import caduceo from '../Imagenes/caduceo.png'
import login from '../Imagenes/login.png'
import help from '../Imagenes/help.jpg'
import './Navbar.css'
import Cartwidget from '../Cartwidget'



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
                    <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                    <a class="nav-link" href="#">NOSOTROS</a>
                    <a class="nav-link" href="#">TIENDA</a>
                    <a class="nav-link" href="#">CONTACTO</a>
                </div>
            </div>
            <div>
                <a href="#"><img src={login} className='logoFarm' alt="LOGIN"/></a>
            </div>
            <div>
                <a href="#"><img src={help} className='logoFarm' alt="AYUDA"/></a>
            </div>
            <div>
                <Cartwidget/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar