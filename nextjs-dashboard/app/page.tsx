import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';
import { Clock } from './clock';
import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';

// let redirected = false;

export default async function Page() {

  const team = await fetchTeam("3");
  // if (!team && !redirected) {
  if (!team) {
    // redirect("/otherpage");
    // redirected = true;
    console.log("redirected");
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

async function fetchTeam(id: string) {
  // 仮のチームデータ
  const teams = [
    { id: "1", name: "Team Alpha" },
    { id: "2", name: "Team Beta" }
  ];

  // id に一致するチームを検索
  return teams.find(team => team.id === id) || null;
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