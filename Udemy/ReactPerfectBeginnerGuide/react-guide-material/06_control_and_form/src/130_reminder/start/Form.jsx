const Form = ({ input, setInput, addList }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addList();
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">追加</button>
      </form>
    </>
  );
};
export default Form;
