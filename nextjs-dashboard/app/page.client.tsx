'use client';
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

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
  const { register, reset } = methods;

  // コンポーネントマウント時にフォームの初期値を設定
  useEffect(() => {
    reset({
      name: 'data',
    });
  }, [reset]); // ❌ never put `methods` as the deps

  return (
    <FormProvider {...methods}>
      {/* FormProvider でフォームの状態を子コンポーネントに提供 */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
  const { register } = useFormContext();

  return <input {...register('test')} placeholder="テスト入力" />;
}
