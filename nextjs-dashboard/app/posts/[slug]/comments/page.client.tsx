'use client';
import { useSearchParams } from 'next/navigation';

const ClientPage = () => {
  const searchParams = useSearchParams();

  // クエリパラメータの存在を確認
  const hasSearch = searchParams.has('search');
  console.log('hasSearch:', hasSearch);

  // クエリパラメータのすべての値を取得
  const allSearchValues = searchParams.getAll('search');
  console.log('allSearchValues:', allSearchValues);

  // すべてのクエリパラメータの名前と値を取得
  Array.from(searchParams.entries()).forEach(([key, value]) => {
    console.log(`key: ${key}, value: ${value}`);
  });

  // クエリパラメータを文字列に変換
  const searchString = searchParams.toString();
  console.log('searchString:', searchString);

  return (
    <>
      <p>ClientPage</p>
      <p>hasSearch: {hasSearch.toString()}</p>
      <p>allSearchValues: {JSON.stringify(allSearchValues)}</p>
      <p>searchString: {searchString}</p>
    </>
  );
};
export default ClientPage;
