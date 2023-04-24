import React, { useState, createContext } from "react";

export const Contexto = createContext({
  carro: [],
  Vaciar: () => {},
  Existencia: () => {},
  Agregar: () => {},
  Quitar: () => {},
  CantidadTotal: () => {},
  Total: () => {}
});

const ContextoProvider = (props) => {

  const [carro, setcarro] = useState([]);

  const Vaciar = () => {
    setcarro([]);
  }

  const Existencia = (id) => {
    return carro.find((item) => item.id === id) ? true : false;
  }

  const Agregar = (item, cantidad) => {
    if (Existencia(item.id)) {
      setcarro(carro.map((carroItem) => {
        if (carroItem.id === item.id) {
          return { ...carroItem, cantidad: carroItem.cantidad + cantidad };
        }
        return carroItem;
      }));
    } else {
      setcarro([...carro, { ...item, cantidad }]);
    }
  };
  
  const Quitar = (id) => {
    const newcarro = carro.filter((item) => item.id !== id)
    setcarro(newcarro);
  };

  const CantidadTotal = () => {
    let cant = 0
    carro.forEach((e) => cant += e.cantidad)
    return cant
  };

  const Total = () => {
    let total = 0
    carro.forEach((e) => total += (e.cantidad*e.precio))
    return total        
  };

  return (
    <Contexto.Provider value={{ carro, Vaciar, Agregar, Quitar, CantidadTotal, Total }}>
      {props.children}
    </Contexto.Provider>
  );
};

export default ContextoProvider;
