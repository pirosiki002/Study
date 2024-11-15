import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";

            const isMatch = animalStr.indexOf(filterVal) !== -1;
            console.log(animalStr.indexOf(filterVal));
            return isMatch;
          })
          // .map((animal) => (
          //   <li key={animal}>{animal}</li>
          // ))}
          // if文
          // .map((animal) => {
          //   if (animal === "Dog") {
          //     return <li key={animal}>{animal + "★"}</li>;
          //   } else {
          //     return <li key={animal}>{animal}</li>;
          //   }
          // })}
          // 三項演算子?
          // .map((animal) => {
          //   return (
          //     <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>
          //   );
          // })}
          .map((animal) => {
            // return <li key={animal}>{animal + (animal === "Dog" && "★")}</li>;
            // const animalStr = animal ?? "nullかundefinedです。";
            return (
              <li key={animal}>
                {animal ?? "null, undefined"}
                {animal === "Dog" && "★"}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
