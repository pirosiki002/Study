import { Suspense } from 'react';
import { NuqsDemo } from './nuqs-demo.client';

export default function NuqsDemoPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">nuqs 動作確認デモ</h1>
      <p className="text-gray-600">
        下の操作をするとURLのクエリパラメータが変わります。ブラウザのアドレスバーを確認してください。
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <NuqsDemo />
      </Suspense>
    </main>
  );
}
