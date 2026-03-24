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

export default function BBSCard(props: BBSDataProps) {
  const { bbsData } = props;
  return (
    // <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{bbsData.title}</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>{bbsData.content}</CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href={'/bbs-posts/1'} className="text-blue-500">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
