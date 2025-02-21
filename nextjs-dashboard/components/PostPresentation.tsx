export default function PostPresentation({
  post,
  children,
}: {
  post: any;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {children}
    </div>
  );
}
