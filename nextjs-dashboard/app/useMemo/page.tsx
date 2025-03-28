import ClientPage from './page.client';

// useMemo（ユーズメモ）は、ReactというJavaScriptのライブラリで使われる、計算結果を「記憶」しておくための特別な道具だよ。useCallbackが関数自体を記憶するのに対して、useMemoは関数の実行結果を記憶するんだ。

export default function ExUseMemo() {
  return <ClientPage />;
}
