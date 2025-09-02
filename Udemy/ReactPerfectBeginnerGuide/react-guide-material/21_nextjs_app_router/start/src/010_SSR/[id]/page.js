import { ENDPOINT } from '@/constants';
import Article from '@/components/article';

// http://localhost:4020/010_SSR/2
export default async function SSR({ params }) {
  console.log(params);

  const article = await fetch(`${ENDPOINT}/${params.id}`, {
    next: { revalidate: 10 },
  }).then(res => res.json());
  return (
    <>
      {/* <div className="page">SSR Page</div> */}
      <Article data={article} />
    </>
  );
}
