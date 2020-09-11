import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("");

  //Lo ejecuto en cada render
  useEffect(() => {
    console.log("useEffect - actualizando titulo");
    document.title = `Click button ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setCount2(count2 + 1)}>count2 {count2}</button>
    </>
  );
};

export default Effect2;

//actualizar effect condicionalmente , [count]
