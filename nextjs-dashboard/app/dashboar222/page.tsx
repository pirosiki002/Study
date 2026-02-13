'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SearchContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  // URL -> `/dashboar222?search=my-project`
  console.log(search); // 'my-project'

  return <p>{search ?? '(none)'}</p>;
}

export default function SearchBar() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchContent />
    </Suspense>
  );
}
