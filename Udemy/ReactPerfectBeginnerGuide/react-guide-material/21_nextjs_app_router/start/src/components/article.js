export default function Article({ data }) {
  if (!data) {
    return <div>記事が見つかりません。</div>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <p>
        <small>作成日: {data.createdAt}</small>
      </p>
    </div>
  );
}
