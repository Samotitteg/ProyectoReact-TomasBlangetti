import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Contexto } from '../Contexto/Contexto';
import Navbar from '../Navbar/Navbar';
import ItemListConteiner from '../ItemListConteiner';
import eliminar from '../Imagenes/eliminar.jpg'
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
          <div key={item.id} className='tarjeta'>

            <h3 className='u'>{item.nombre}</h3>
            <p className='u'>{item.detalle}</p>
            <p className='u'>Precio: ${item.precio}</p>
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