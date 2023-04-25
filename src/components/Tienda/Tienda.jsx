import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Contexto } from '../Contexto/Contexto';
import Navbar from '../Navbar/Navbar';
import ItemListConteiner from '../ItemListConteiner';
import eliminar from '../Imagenes/eliminar.jpg';

import {getDocs, getFirestore, collection} from 'firebase/firestore'



const Tienda = () => {
  const { Agregar, Quitar } = useContext(Contexto);

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
            <Link className='u2' to={`/item/${item.id}`}>Ver detalle</Link>

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