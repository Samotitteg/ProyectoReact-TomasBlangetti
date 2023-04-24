import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Contexto } from '../Contexto/Contexto';
import Navbar from '../Navbar/Navbar';
import ItemListConteiner from '../ItemListConteiner';

const Tienda = () => {
  const { Agregar, Quitar } = useContext(Contexto);

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

  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo="TIENDA"/>
    <div>
      <div className='tienda1'>
        {products.map((item) => (
          <div key={item.id} style={{ 
            width: '300px', 
            height: '300px', 
            border: '1px solid grey', 
            padding: '10px',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            }}>

            <h3 style={{ textAlign: 'center' }}>{item.nombre}</h3>
            <p style={{ textAlign: 'center' }}>{item.detalle}</p>
            <p style={{ textAlign: 'center' }}>Precio: ${item.precio}</p>
            <Link style={{ textAlign: 'center' }} to={`/item/${item.id}`}>Ver detalle</Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button style={{ background: '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', marginRight: '1rem' }} onClick={() => Agregar(item, 1)}>
                    Agregar al carrito
                </button>
                <button style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '25px',
                    height: '25px'
                }} onClick={() => Quitar(item.id)}>X</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
    </>
  );
};

export default Tienda;

// import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import { useContext } from 'react'



// const Tienda = () => {
//     const { product } = useContext();
    
//   return (
//     <>
//     <Navbar/>

//     <div classnombre='saludo'>Tienda</div>
    
//     <>
//         {product.map ( (i)=> {
//             return(
//             <div>
//                 <img classnombre='imagen' src={i.imagen} alt={i.nombre} />
//                 <h2>{i.nombre}</h2>
//                 <h5>{i.detalle}</h5>
//                 <h3>{i.precio}</h3>
//             </div>
//             )   
//         })}
//     </>
    
//     </>
//   )
// }

// export default Tienda