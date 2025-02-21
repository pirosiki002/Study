import { getComments } from '@/lib/api';
import CommentsPresentation from '@/components/CommentsPresentation';

export default async function CommentsContainer({
  postId,
}: {
  postId: string;
}) {
  const comments = await getComments(postId);

  return <CommentsPresentation comments={comments} />;
}
