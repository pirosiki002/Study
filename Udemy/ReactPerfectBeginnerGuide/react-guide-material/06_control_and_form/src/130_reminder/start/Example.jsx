const Example = () => {
  const onDelete = (value) => {
    // do delete
  };

  // This code is making now!!!

  return (
    <>
      <h3>完成系と同じような機能を作成してください。</h3>
      <p>また、枠線で囲まれた部品をコンポーネントに分離してください。</p>
      <h2>Reminder</h2>
      {/* List */}
      <button onClick={onDelete(e.target.value)}>完了</button>
    </>
  );
};

export default Example;
