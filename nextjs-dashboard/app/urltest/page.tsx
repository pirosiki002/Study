import { Suspense } from 'react';
import { ClientPage } from './page.client';

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ClientPage />
    </Suspense>
  );
}
