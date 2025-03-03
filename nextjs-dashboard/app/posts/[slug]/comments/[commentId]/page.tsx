export default function Page({
  params,
}: {
  params: { slug: string; commentId: string };
}) {
  return (
    <div>
      Post: {params.slug}, Comment: {params.commentId}
    </div>
  );
}
