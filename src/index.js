import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyPage from './components/Navbar/MyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import Tienda from './components/Tienda/Tienda';
import Cartwidget from './components/Cartwidget';
import Login from './components/Login/Login';
import Contexto from './components/Contexto/Contexto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contexto>
    <BrowserRouter>
      <Routes>
        
        <Route exact path='/' element={<MyPage />}/>
        <Route exact path='/nosotros' element={<Nosotros />}/>
        <Route exact path='/tienda' element={<Tienda />}/>
        <Route exact path='/contacto' element={<Contacto />}/>
        <Route exact path='/carrito' element={<Cartwidget />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/carrito' element={<Cartwidget />}/>




      </Routes>
    </BrowserRouter>
    </Contexto>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
