'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { use } from 'react';

export const ClientPage = () => {
  const currentUrl = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const category = searchParams.get('category');
  return (
    <>
      <p>current url = {currentUrl}</p>
      <p>
        page={page} category={category}
      </p>
    </>
  );
};
