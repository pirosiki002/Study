import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];

  // const Hello = (arg) => {
  //   return `${arg}"Function"`;
  // };
  const Hello = (arg) => `${arg}"Function!!!!"`;
  const jsx = <h3>Hello JSX part 2</h3>;

  return (
    <div className={title.toLocaleLowerCase()}>
      <h3>Hello {title}!!!</h3>
      <h3>{arry}</h3>
      <h3>{Hello("argment")}</h3>
      <h3>{/* not monitored on display */}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}
    </div>
  );
};
export default Expression;
