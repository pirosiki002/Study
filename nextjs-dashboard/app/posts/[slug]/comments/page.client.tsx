'use client';
import { useSearchParams } from 'next/navigation';

const ClientPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  // http://localhost:3000/posts/exe-post/comments?search=my-project
  return <>ClientPage search={search}</>;
};
export default ClientPage;
