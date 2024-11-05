const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // const animalList = [];
  // for (const animal of animals) {
  //   animalList.push(<li>{animal}</li>);
  // }

  // const helloAnimals = animals.map((animal) => <li key={1}>Hello{animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      {/* <ul>{animalList}</ul> */}
      {/* <ul>{helloAnimals}</ul> */}
      {animals.map((animal) => {
        return <li key={1}>hello, {animal}</li>;
      })}
    </>
  );
};

export default Example;
