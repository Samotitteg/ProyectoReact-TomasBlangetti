import React, { createContext, useEffect, useState } from 'react'


export const Datos = createContext()

const Contexto = ({children}) => {

    const [product, setproduct] = useState([])

    useEffect(() => {
     fetch('productos.json')
     .then((res) => setproduct(res.product))
    
      
    }, [])
    


  return (
    <Datos.Provider value={{product}}>
        {children}
    </Datos.Provider>
  )
}

export default Contexto