import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { BBSData } from '@/app/types/types';

interface BBSDataProps {
  bbsData: BBSData;
}

export default function BBSCard({ bbsData }: BBSDataProps) {
  // const { bbsData } = props;
  const { id, title, content, createdAt, username } = bbsData;
  return (
    // <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
