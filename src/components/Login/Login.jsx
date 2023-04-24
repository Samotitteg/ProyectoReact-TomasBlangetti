import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemListConteiner from '../ItemListConteiner'

const Login = () => {
  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo="LOGIN"/>
    <div className='contacto'>
        <form class="row g-3">
        <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4"/>  
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">INGRESAR</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login