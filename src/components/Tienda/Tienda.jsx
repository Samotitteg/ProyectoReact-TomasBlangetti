import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Contexto } from '../Contexto/Contexto';
import Navbar from '../Navbar/Navbar';

import eliminar from '../Imagenes/eliminar.jpg';

import {getDocs, getFirestore, collection} from 'firebase/firestore'
import ItemListConteiner from '../ItemListConteiner';






const Tienda = () => {
  const { Agregar, Quitar, Existencia2} = useContext(Contexto);

  const [Items, setItems] = useState([])

  useEffect(() => {
    const base = getFirestore()
    const coleccion = collection(base, 'Items')

    getDocs(coleccion).then((res) => {
      if(res === 0){
        return ("No hay productos")
      }    
    setItems(res.docs.map((prod) => ({id: prod.id, ...prod.data()})))
    
    })
    
    

  }, [])

  
  
  
  return (
    <>
   
    <Navbar/>
    <ItemListConteiner saludo="TIENDA"/>
   
    
    <div>
      <div className='tienda1'>
        { Items.map((item) => (
          <div key={item.id} className='tarjeta'>
            <div className='u'>
            <img className='u3' src={item.imagen}/>
            </div>
            <div className='u'>
            <h3>{item.nombre}</h3>
            <p>{item.detalle}</p>
            <p>Precio: ${item.precio}</p>
            </div>
            <Link className='u2' to={`/${item.nombre}/${item.id}`}><button type="button" className='u5' onClick={() => Existencia2(item)}>VER DETALLE</button></Link>

            <div className='botones'>
                <button className='add' onClick={() => Agregar(item, 1)}>
                    Agregar al carrito
                </button>
                <button onClick={() => Quitar(item.id)}><img src={eliminar} className='elim'/></button>
            </div>
          </div> 
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Tienda;
