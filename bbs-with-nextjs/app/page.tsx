import { PrismaClient } from '@prisma/client/extension';
import BBSCardList from './components/BBSCardList';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  });

  const bbsAllData = await response.json();
  console.log(bbsAllData);

  return (
    // added bg-white because bg == black
    <main>
      {/* ui Card https://ui.shadcn.com/docs/components/radix/card */}
      <BBSCardList />
    </main>
  );
}
