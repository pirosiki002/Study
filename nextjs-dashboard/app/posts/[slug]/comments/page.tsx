type SearchParamsValue = string | string[] | undefined;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    sort?: SearchParamsValue;
    id?: SearchParamsValue;
  }>;
}) {
  const { sort, id } = await searchParams;
  // http://localhost:3000/posts/exe-post/comments?id=3&sort=res
  return (
    <>
      {sort}
      {id}
    </>
  );
}
