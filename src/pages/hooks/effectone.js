import React, { useState, useEffect } from "react";

const EffectOne = () => {
  const [count, setCount] = useState(0);

  //Lo ejecuto en cada render
  useEffect(() => {
    document.title = `Click button ${count} times`;
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </>
  );
};

export default EffectOne;

//useEffect es un hook de ciclo de vida
//se pueden realizar side effects en los func components
