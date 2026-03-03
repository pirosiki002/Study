import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function BBSCard() {
  return (
    // <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          omnis, accusantium velit sunt ipsa libero, magnam earum facilis
          assumenda temporibus veritatis in possimus? Tenetur maxime cumque
          nihil assumenda! Commodi, culpa!
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href={'/bbs-posts/1'} className="text-blue-500">
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
