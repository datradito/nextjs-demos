import React, { useState } from "react";

const StateTwo = () => {
  const initCount = 0;
  const [count, setCount] = useState(initCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        +1pre
      </button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      {console.log(count)}
    </>
  );
};

export default StateTwo;

//previus state
<button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>;
