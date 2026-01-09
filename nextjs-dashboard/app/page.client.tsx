'use client';
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { getJSON, postJSON } from '@/src/services/api';

/**
 * useFormContext のサンプルページ
 *
 * useFormContext は React Context API を使用して、
 * フォームの状態とメソッドを子コンポーネントに共有するためのフックです。
 *
 * 主な用途：
 * - 深いネストしたコンポーネントでフォームの状態にアクセス
 * - フォームの状態を複数のコンポーネント間で共有
 * - プロップドリリングを避ける
 */
export default function ClientPage() {
  // フォームの状態とメソッドを管理するフック
  const methods = useForm();

  // フォーム送信時の処理
  const onSubmit = (data: any) => console.log(data);

  // フォームの登録とリセット機能を取得
  const { register, reset, watch } = methods;

  // フォーム全体の値を監視（引数なしでwatch）
  const allWatchedValues = watch();

  // デバッグ用：親コンポーネントの値を表示
  console.log('ClientPage - allWatchedValues:', allWatchedValues);

  // コンポーネントマウント時にフォームの初期値を設定
  useEffect(() => {
    reset({
      name: 'data',
    });
  }, [reset]); // ❌ never put `methods` as the deps

  // axios動作チェック
  useEffect(() => {
    getJSON().catch(error => console.error('GET Error:', error));
    postJSON().catch(error => console.error('POST Error:', error));
  }, []);

  return (
    <FormProvider {...methods}>
      {/* FormProvider でフォームの状態を子コンポーネントに提供 */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* 
          ❌ 通常のhandleSubmitでは動作しない
          <form onSubmit={handleSubmit}>  // これはNG
          
          ✅ react-hook-formのmethods.handleSubmitを使用
          <form onSubmit={methods.handleSubmit(onSubmit)}>  // これが正しい
          
          理由：
          - methods.handleSubmitはバリデーションを実行
          - フォームの状態を適切に管理
          - エラーハンドリングを提供
        */}
        <NestedInput />
        <input {...register('name')} placeholder="名前を入力" />
        <input type="submit" value="送信" />
      </form>
    </FormProvider>
  );
}

/**
 * ネストしたコンポーネント
 *
 * useFormContext を使用して、親コンポーネントのフォーム状態にアクセス
 * プロップドリリングなしでフォームの register メソッドを使用可能
 */
function NestedInput() {
  // useFormContext でフォームの状態とメソッドを取得
  const { register, watch, formState, getValues, getFieldState } =
    useFormContext();

  // フィールドの値を監視（リアルタイムで取得）
  // const testValue = watch('test');
  // const nameValue = watch('name');

  // フォーム全体の値を監視（引数なしでwatch）
  const allWatchedValues = watch();

  // デバッグ用：子コンポーネントの値を表示
  console.log('NestedInput - allWatchedValues:', allWatchedValues);

  // フォームの状態情報を取得
  const { errors, isDirty, isValid } = formState;

  // 全フィールドの値を取得
  const allValues = getValues();

  // 特定のフィールドの状態を取得
  const testFieldState = getFieldState('test');
  const nameFieldState = getFieldState('name');

  return (
    <div>
      <input {...register('test')} placeholder="テスト入力" />

      {/* フィールドの値を表示 */}
      <div style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
        <h4>フィールドパスと値の情報:</h4>

        {/* 個別フィールドの情報 */}
        <div style={{ marginBottom: '10px' }}>
          <p>
            <strong>test フィールド:</strong>
          </p>
          <p> - 値: {allWatchedValues.test || '(空)'}</p>
          <p> - 変更済み: {testFieldState.isDirty ? 'はい' : 'いいえ'}</p>
          <p> - エラー: {testFieldState.error?.message || 'なし'}</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <p>
            <strong>name フィールド:</strong>
          </p>
          <p> - 値: {allWatchedValues.name || '(空)'}</p>
          <p> - 変更済み: {nameFieldState.isDirty ? 'はい' : 'いいえ'}</p>
          <p> - エラー: {nameFieldState.error?.message || 'なし'}</p>
        </div>

        {/* 全フィールドの一覧 */}
        <div style={{ marginBottom: '10px' }}>
          <p>
            <strong>全フィールドの値 (getValues):</strong>
          </p>
          <pre
            style={{ fontSize: '12px', background: '#f5f5f5', padding: '5px' }}
          >
            {JSON.stringify(allValues, null, 2)}
          </pre>
        </div>

        {/* watch()で監視した全フィールドの値 */}
        <div style={{ marginBottom: '10px' }}>
          <p>
            <strong>全フィールドの値 (watch()):</strong>
          </p>
          <pre
            style={{ fontSize: '12px', background: '#e8f5e8', padding: '5px' }}
          >
            {JSON.stringify(allWatchedValues, null, 2)}
          </pre>
        </div>

        {/* フォーム全体の状態 */}
        <div>
          <p>
            <strong>フォーム全体の状態:</strong>
          </p>
          <p> - 変更済み: {isDirty ? 'はい' : 'いいえ'}</p>
          <p> - 有効: {isValid ? 'はい' : 'いいえ'}</p>
        </div>
      </div>
    </div>
  );
}
