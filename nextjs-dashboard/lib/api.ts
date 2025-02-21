export async function getPost(postId: string) {
  return {
    id: postId,
    title: 'Sample Post',
    content: 'This is a post.',
    userId: 'user123',
  };
}

export async function getUserProfile(userId: string) {
  return { id: userId, name: 'John Doe' };
}

export async function getComments(postId: string) {
  return [
    { id: 'c1', text: 'Nice post!' },
    { id: 'c2', text: 'Thanks for sharing.' },
  ];
}
