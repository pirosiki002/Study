'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const ClientPage = () => {
  const currentUrl = usePathname();
  return (
    <>
      <p>current url = {currentUrl}</p>
      <Link href={'/urltest'}>move to urltest page</Link>
    </>
  );
};
