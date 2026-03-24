import BBSCard from './BBSCard';
import { BBSData } from '@/app/types/types';

interface BBSDataProps {
  bbsAllData: BBSData;
}

// export default function BBSCardList({ bbsAllData }: BBSDataProps) {
export default function BBSCardList(props: BBSDataProps) {
  const { bbsAllData } = props;
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
      <BBSCard />
    </div>
  );
}
