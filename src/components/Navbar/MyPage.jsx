import React from 'react'
import ItemListConteiner from '../ItemListConteiner'
import Navbar from './Navbar'


const MyPage = () => {
  return (
    <>
    <Navbar />

    <ItemListConteiner saludo="Bienvenido a un lugar donde tu salud cuenta!!!" />
    </>
  )
}

export default MyPage