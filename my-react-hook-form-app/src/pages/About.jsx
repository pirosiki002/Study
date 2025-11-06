import React from 'react';
import { useForm } from 'react-hook-form';

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    mode: 'onChange', // リアルタイムでバリデーション
  });

  const watchedPassword = watch('password');

  const onSubmit = data => {
    console.log('バリデーションフォームデータ:', data);
    alert('バリデーション成功！フォームが送信されました。');
    reset();
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>バリデーション練習</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* handleSubmitを使わないとバリデーションが聞かない（ボタンが押せてしまう） */}
        {/* <form onSubmit={onSubmit}> */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">ユーザー名:</label>
          <input
            id="username"
            type="text"
            {...register('username', {
              required: 'ユーザー名は必須です',
              minLength: {
                value: 3,
                message: 'ユーザー名は3文字以上で入力してください',
              },
              maxLength: {
                value: 20,
                message: 'ユーザー名は20文字以下で入力してください',
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: 'ユーザー名は英数字とアンダースコアのみ使用可能です',
              },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.username && (
            <span style={{ color: 'red' }}>{errors.username.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">パスワード:</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'パスワードは必須です',
              minLength: {
                value: 8,
                message: 'パスワードは8文字以上で入力してください',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'パスワードは大文字、小文字、数字を含む必要があります',
              },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.password && (
            <span style={{ color: 'red' }}>{errors.password.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmPassword">パスワード確認:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'パスワード確認は必須です',
              validate: value =>
                value === watchedPassword || 'パスワードが一致しません',
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.confirmPassword && (
            <span style={{ color: 'red' }}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">電話番号:</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              pattern: {
                value: /^[0-9-]+$/,
                message: '電話番号は数字とハイフンのみ使用可能です',
              },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.phone && (
            <span style={{ color: 'red' }}>{errors.phone.message}</span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              {...register('terms', {
                required: '利用規約に同意してください',
              })}
            />
            利用規約に同意する
          </label>
          {errors.terms && (
            <span style={{ color: 'red', display: 'block' }}>
              {errors.terms.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          style={{
            padding: '10px 20px',
            backgroundColor: isValid ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isValid ? 'pointer' : 'not-allowed',
          }}
        >
          送信
        </button>
      </form>

      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f8f9fa',
        }}
      >
        <h3>バリデーション機能:</h3>
        <ul>
          <li>ユーザー名: 3-20文字、英数字とアンダースコアのみ</li>
          <li>パスワード: 8文字以上、大文字・小文字・数字を含む</li>
          <li>パスワード確認: パスワードと一致するかチェック</li>
          <li>電話番号: 数字とハイフンのみ</li>
          <li>利用規約: チェックボックス必須</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
