import React, { useState } from "react";

const StateOne = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      {console.log(count)}
    </>
  );
};

export default StateOne;

//No llamar dentro de loops o funciones nesteadas
//Solo llamar al hook dentro de una funcion de React, no dentro de cualquier funcion js
