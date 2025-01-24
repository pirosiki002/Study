import AnimalItem from "./AnimalItem";
const AnimalList = ({ animals }) => {
  // const animals = props.animals;
  if (animals.length === 0) {
    return <h3>Animals could not find</h3>;
  }

  return (
    <>
      <ul>
        {animals.map((animal) => {
          return <AnimalItem animal={animal} key={animal} />;
        })}
      </ul>
    </>
  );
};
export default AnimalList;
