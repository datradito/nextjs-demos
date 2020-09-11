import React, { useState } from "react";

const StateFour = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Sumar un numero</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      {console.log(items)}
    </>
  );
};

export default StateFour;

//useState retorna dos elementos, el valor actual y la funcion setter
//se puede pasar una funcion al setter con el prevstate
