'use server';
import { z } from 'zod';
import { formSchema } from '../bbs-posts/create/page';
import { prisma } from '@/lib/prismaClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// ver Next14 server action
export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  revalidatePath('/');
  redirect('/');
};
