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
import ContextoProvider from './components/Contexto/Contexto';
import Detalle from './components/Detalle';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkkHgSRMv7LGhDWTvdv4SZRphRrOVtTsw",
  authDomain: "farma-shop.firebaseapp.com",
  projectId: "farma-shop",
  storageBucket: "farma-shop.appspot.com",
  messagingSenderId: "310610365902",
  appId: "1:310610365902:web:73f3abc2f71ec58f542f9f"
};


initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextoProvider>
    <BrowserRouter>
      <Routes>
        
        <Route exact path='/' element={<MyPage />}/>
        <Route exact path='/nosotros' element={<Nosotros />}/>
        <Route exact path='/tienda' element={<Tienda />}/>
        <Route exact path='/contacto' element={<Contacto />}/>
        <Route exact path='/carrito' element={<Cartwidget />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path="/item/:itemId" element={<Detalle />} />
        

      </Routes>
    </BrowserRouter>
    </ContextoProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
