import React, { useState } from "react";

const StateTree = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </form>
      <h3>Your first name is - {name.firstname}</h3>
      <h3>Your last name is - {name.lastname}</h3>
      {console.log(name)}
    </>
  );
};

export default StateTree;

//...name
