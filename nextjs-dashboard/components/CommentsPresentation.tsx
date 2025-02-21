export default function CommentsPresentation({
  comments,
}: {
  comments: any[];
}) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  );
}
