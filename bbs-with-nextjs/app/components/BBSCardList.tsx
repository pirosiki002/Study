import BBSCard from './BBSCard';
import { BBSData } from '@/app/types/types';

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

// export default function BBSCardList({ bbsAllData }: BBSDataProps) {
export default function BBSCardList(props: BBSAllDataProps) {
  // TODO: indivisual divide insert
  const { bbsAllData } = props;
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => {
        return <BBSCard key={bbsData.id} bbsData={bbsData} />;
      })}
    </div>
  );
}
