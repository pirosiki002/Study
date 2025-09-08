// POINT [SG]フェッチしたデータで静的なページを作成
import { ENDPOINT } from '@/constants';
import ArticleList from '../../components/articleList';

export const metadata = {
  title: 'ページ一覧',
  description: '記事ページの一覧を表示します',
};

export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then(res => res.json());
  console.log('generateStaticParams data', data);
  // return data.map(record => ({ id: record.id }));
  return data;
}
export default async function Detail({ params }) {
  const articles = await fetch(ENDPOINT, { cache: 'no-store' }).then(res =>
    res.json()
  );

  // console.log('Page関数で取得したデータ:', articles);

  if (!articles) {
    return <div>データがありません。</div>;
  }

  return (
    <>
      <h3>フェッチ&SG</h3>
      <ArticleList basePath="/030_SG_fetch" list={articles} />
    </>
  );
}
