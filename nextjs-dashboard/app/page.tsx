import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';
import { Clock } from './clock';
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function Page() {

  // const user = await fetchUser("122");
  const user = await fetchUser("123");
  if (!user) {
    return notFound();
  }

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

async function fetchUser(id: string) {
  if (id === "123") {
    return { id: "123", name: "Taro" };
  } else {
    return null;
  }
}