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
  // ...
  return (
    <>
      <p>{sort}</p>
      <p>{id}</p>
    </>
  );
}
