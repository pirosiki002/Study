'use server';

import { cookies } from 'next/headers';

export async function create(data: { theme?: string }) {
  const cookieStore = cookies();
  const allcookies = cookieStore.getAll();
  //   console.log(allcookies);
  // テーマの設定
  if (data.theme) {
    cookieStore.set('theme', data.theme);
    // cookieStore.delete('theme');
  }
  // 名前の設定
  cookieStore.set('name', 'piropiro');
  return { success: true };
}
