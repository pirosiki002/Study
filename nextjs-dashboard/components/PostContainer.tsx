import { getPost } from '@/lib/api';
import PostPresentation from './PostPresentation';
import UserProfileContainer from './UserProfileContainer';

export default async function PostContainer({ postId }: { postId: string }) {
  const post = await getPost(postId);

  //   console.log(post);

  return (
    <>
      <PostPresentation post={post}>
        <UserProfileContainer userId={post.userId} />
      </PostPresentation>
    </>
  );
}
