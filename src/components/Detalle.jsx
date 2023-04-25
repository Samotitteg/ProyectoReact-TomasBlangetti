import React, { useContext} from 'react';
import { useParams } from 'react-router';
import { Contexto } from './Contexto/Contexto';
import eliminar from './Imagenes/eliminar.jpg'
import Navbar from './Navbar/Navbar';
import ItemListConteiner from './ItemListConteiner';



const Detalle = ({itempas}) => {

  const { itemId } = useParams()

  const { Agregar, Quitar } = useContext(Contexto)

  

  const Selecionar = itempas.find(item => item.id==itemId)


  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo='PRODUCTOS'/>
    <div style={{  justifyContent: 'center', padding: '50px', gap: '20px' }}>
    
      <h2>{Selecionar.nombre}</h2>
      <p>Precio: {Selecionar.precio}</p>
      <p>Detalle: {Selecionar.detalle}</p>
      <button className='add' onClick={() => Agregar(Selecionar, 1)}>Agregar al carrito</button>
      <button onClick={() => Quitar(Selecionar.id)}><img src={eliminar} className='elim'/></button>
    </div>
    </>
  );
}

export default Detalle