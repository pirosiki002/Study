const Hello = (props) => {
  // const name = "Tom";
  // props.name = "Bob";
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  return (
    <div>
      <h3>Hello {props.name}</h3>
      {/* <h3>Hello {name}</h3> */}
    </div>
  );
};

export default Hello;
