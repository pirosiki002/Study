'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  // URL -> `/dashboard?search=my-project`
  console.log(search); // 'my-project'

  // ...]
  return <p>{search}</p>;
}
