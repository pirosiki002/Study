export const dynamic = 'force-dynamic';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>配列パラメータの動作確認</h1>

      {/* 現在のパラメータ表示 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>現在のURLパラメータ:</h3>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          {JSON.stringify(params, null, 2)}
        </pre>
      </div>

      {/* テスト用リンク */}
      <div style={{ marginBottom: '20px' }}>
        <h3>テスト用リンク:</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href="/?color=red"
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            1つだけ (?color=red)
          </a>
          <a
            href="/?color=red&color=blue"
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            2つ (?color=red&color=blue)
          </a>
          <a
            href="/?color=red&color=blue&color=green"
            style={{
              padding: '8px 16px',
              backgroundColor: '#ffc107',
              color: 'black',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            3つ (?color=red&color=blue&color=green)
          </a>
          <a
            href="/"
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            クリア
          </a>
        </div>
      </div>

      {/* 型と値の確認 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>パラメータの詳細:</h3>
        {Object.entries(params).map(([key, value]) => (
          <div
            key={key}
            style={{
              marginBottom: '10px',
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
            }}
          >
            <div>
              <strong>{key}:</strong>
            </div>
            <div
              style={{ color: Array.isArray(value) ? '#e83e8c' : '#28a745' }}
            >
              型: {Array.isArray(value) ? '配列' : '文字列'} ({typeof value})
            </div>
            <div style={{ color: '#6c757d' }}>値: {JSON.stringify(value)}</div>
            {Array.isArray(value) && (
              <div style={{ color: '#fd7e14' }}>配列の長さ: {value.length}</div>
            )}
          </div>
        ))}
      </div>

      {/* 動作のポイント */}
      <div
        style={{
          backgroundColor: '#e7f3ff',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #b3d9ff',
        }}
      >
        <h3>💡 動作のポイント:</h3>
        <ul>
          <li>
            <strong>1つだけ:</strong> <code>?color=red</code> →{' '}
            <code>color: &quot;red&quot;</code> (string)
          </li>
          <li>
            <strong>2つ以上:</strong> <code>?color=red&color=blue</code> →{' '}
            <code>color: [&quot;red&quot;, &quot;blue&quot;]</code> (array)
          </li>
        </ul>
      </div>
    </div>
  );
}
