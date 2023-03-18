import React from 'react'

const ItemListConteiner = (props) => {
  return (
    <div className='saludo'>
        <p className='saludoP'>FARMACOS BIENESTAR</p>
        {props.saludo}
    </div>
  )
}

export default ItemListConteiner