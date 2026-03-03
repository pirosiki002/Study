import BBSCardList from './components/BBSCardList';
// import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    // added bg-white because bg == black
    <main>
      {/* ui Card https://ui.shadcn.com/docs/components/radix/card */}
      <BBSCardList />
    </main>
  );
}
