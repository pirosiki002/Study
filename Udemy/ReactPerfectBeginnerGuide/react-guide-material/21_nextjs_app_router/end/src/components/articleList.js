import Link from 'next/link';

export default function ArticleList({ basePath, list }) {
  return (
    <div>
      <h4>記事一覧</h4>
      <ul>
        {list.map(article => (
          <li key={article.id}>
            <Link href={`${basePath}/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
