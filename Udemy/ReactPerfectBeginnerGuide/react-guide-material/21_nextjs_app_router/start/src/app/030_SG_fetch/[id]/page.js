import { ENDPOINT } from '@/constants';
import Article from '../../../components/article';

// 静的生成用のパラメータを定義
export async function generateStaticParams() {
  // 実際のAPIから記事IDを取得
  const articles = await fetch(ENDPOINT).then(res => res.json());

  return articles.map(article => ({
    id: article.id.toString(),
  }));
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then(res =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
