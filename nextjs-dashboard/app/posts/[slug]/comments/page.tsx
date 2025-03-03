export default function Page({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}
