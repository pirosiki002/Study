import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
// import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    // added bg-white because bg == black
    <main>
      {/* ui Card https://ui.shadcn.com/docs/components/radix/card */}
      {/* <Card /> */}
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
          <Link href={'/bbs-posts/1'}>Read more</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
