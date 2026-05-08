import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaClient';

export async function GET(req: Request) {
  const allBBSPosts = await prisma.post.findMany(); // findMany is not often use. probubly...
  return NextResponse.json(allBBSPosts);
}
// export async function POST(req: Request) {
//   const { username, title, content } = await req.json();
//   const post = await prisma.post.create({
//     data: {
//       username,
//       title,
//       content,
//     },
//   }); // findMany is not often use. probubly...
//   return NextResponse.json(post);
// }
