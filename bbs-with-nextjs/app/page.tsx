// import { PrismaClient } from '@prisma/client/extension';
import BBSCardList from './components/BBSCardList';
import { BBSData } from '@/app/types/types';

async function getBBSAllData() {
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  // console.log(bbsAllData);

  return (
    // added bg-white because bg == black
    <main>
      {/* ui Card https://ui.shadcn.com/docs/components/radix/card */}
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
