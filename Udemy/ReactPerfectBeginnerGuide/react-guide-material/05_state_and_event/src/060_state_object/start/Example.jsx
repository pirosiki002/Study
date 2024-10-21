import { useState } from "react";

const Example = () => {
  const initialPersonObj = { name: "", age: "" };
  const personObj = { name: "Tom", age: 18 };
  // const personObj = { name: "", age: "" };

  const [prof, setProf] = useState(personObj);

  const nameChange = (e) => {
    // setProf({ ...prof, name: e.target.value });
    setProf({ name: e.target.value, age: prof.age });
    // setProf({ name: e.target.value });
  };
  const ageChange = (e) => {
    setProf({ ...prof, age: e.target.value });
  };

  const reset = () => {
    // setProf({ name: "", age: "" });
    setProf(initialPersonObj);
  };

  return (
    <>
      <h2>Name:{prof.name}</h2>
      <h2>Age:{prof.age}</h2>
      {/* <input onChange={nameChange}></input> */}
      <input type="text" value={prof.name} onChange={nameChange}></input>
      <input type="number" value={prof.age} onChange={ageChange}></input>
      <button
        // onClick={() => {
        //   setProf("");
        //   nameChange("");
        //   ageChange("");
        // }}
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
};

export default Example;
