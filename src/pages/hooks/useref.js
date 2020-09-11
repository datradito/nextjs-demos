import React, { useState, useEffect, useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    //focus input element
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default Ref;

// const inputRef = useRef(null);
// useEffect(() => {
//   //focus input element
//   inputRef.current.focus();
// }, []);

// ref={inputRef}
