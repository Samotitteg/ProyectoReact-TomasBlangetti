import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Contexto } from './Contexto/Contexto';
import eliminar from './Imagenes/eliminar.jpg'
import Navbar from './Navbar/Navbar';
import ItemListConteiner from './ItemListConteiner';


const Detalle = () => {

  const { itemId } = useParams()

  const { Agregar, Quitar } = useContext(Contexto)

  const products = [
    {id: 1,
     nombre: "Vicky",
     detalle:"Concentrado Mineral",
     imagen: "vicky.jpg",
     precio: "8500"},
     {id: 2,
     nombre: "La Roche",
     detalle:"Concentrado Mineral",
     imagen: "laroche.jpg",
     precio: "2500"},
     {id: 3,
     nombre: "Posay",
     detalle:"Cicatrizante",
     imagen: "posay.jpg",
     precio: "6160"},
     {id: 4,
     nombre: "Isdin",
     detalle:"Crema para diabeticos",
     imagen: "isdin.jpg",
     precio: "10860"},
     {id: 5,
     nombre: "Curitas",
     detalle:"Apositos autoadhesicvos",
     imagen: "curita.jpg",
     precio: "300"},
     {id: 6,
     nombre: "Ratisalil",
     detalle:"Crema Corporal",
     imagen: "ratis.jpg",
     precio: "2300"},
     {id: 7,
     nombre: "Capilatis",
     detalle:"Shampoo anyipiojos",
     imagen: "capilatis.jpg",
     precio: "1300"}
];

  const Selecionar = products.find(product => product.id == itemId)


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