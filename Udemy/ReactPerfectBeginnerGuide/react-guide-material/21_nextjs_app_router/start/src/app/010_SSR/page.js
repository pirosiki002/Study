import './lib';
import ClientComp from './components/ClientComp';
import { ENDPOINT } from '@/constants';
import ArticleList from '@/components/articleList';

// http://localhost:4020/010_SSR/1
export default async function SSR() {
  const articles = await fetch(ENDPOINT, { next: { revalidate: 10 } }).then(
    res => res.json()
  );
  return (
    <>
      <div className="page">SSR Page</div>
      <ClientComp />
      <ArticleList list={articles} basePath="/010_SSR" />
    </>
  );
}
