import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    console.log("paso x effect");
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [count]);
  return (
    <>
      <h2>Hook Timer - {timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
      <button onClick={() => setCount(count + 1)}>count+ {count} </button>
    </>
  );
};

export default Timer;
// <button onClick={() => clearInterval(intervalRef)}> Clear Timer</button>
//<button onClick={() => clearInterval(interval)}> Clear Timer</button>
//intervalRef.current
//interval
