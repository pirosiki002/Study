import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const Home = () => {
  // フォームの初期値
  const { control, handleSubmit } = useForm({
    defaultValues: {
      names: [{ value: '' }],
    },
  });

  // namesフィールドを配列で管理
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'names',
  });

  console.log('fields', fields);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          {console.log('field.id=', field.id, 'index=', index)}
          {/* 配列のインデックスでアクセス */}
          <input
            {...control.register(`names.${index}.value`)}
            placeholder={`Name #${index + 1}`}
          />
          <button type="button" onClick={() => remove(index)}>
            削除
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ value: '' })}>
        追加
      </button>
      <button type="submit">送信</button>
    </form>
  );
};

export default Home;
