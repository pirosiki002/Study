'use client';
import { usePathname } from 'next/navigation';

export const ClientPage = () => {
  const currentUrl = usePathname();
  return (
    <>
      <p>current url = {currentUrl}</p>
    </>
  );
};
