import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log('フォームデータ:', data);
    alert('フォームが送信されました！');
    reset();
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>基本フォーム</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">名前:</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: '名前は必須です' })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.name && (
            <span style={{ color: 'red' }}>{errors.name.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">メールアドレス:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'メールアドレスは必須です',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '有効なメールアドレスを入力してください',
              },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>{errors.email.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="age">年齢:</label>
          <input
            id="age"
            type="number"
            {...register('age', {
              min: { value: 0, message: '年齢は0以上で入力してください' },
              max: { value: 120, message: '年齢は120以下で入力してください' },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.age && (
            <span style={{ color: 'red' }}>{errors.age.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">メッセージ:</label>
          <textarea
            id="message"
            {...register('message')}
            rows="4"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Home;
