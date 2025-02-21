import PostContainer from '@/components/PostContainer';
import CommentsContainer from '@/components/CommentsContainer';

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;

  return (
    <>
      <PostContainer postId={postId} />
      <CommentsContainer postId={postId} />
    </>
  );
}
