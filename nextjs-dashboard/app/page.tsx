import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';
import { Clock } from './clock';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <div>
      <h1>Streaming SSR</h1>
      <Clock />
      <Suspense fallback={<>loading...</>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

async function LazyComponent() {
  await setTimeout(3000);
  return <p>Lazy Component</p>;
}
