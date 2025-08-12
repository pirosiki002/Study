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
        <h3>パターン1: 同じキーを複数回 (?tags=food&tags=japan)</h3>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '15px',
          }}
        >
          <a
            href="/?tags=food"
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            1つだけ (?tags=food)
          </a>
          <a
            href="/?tags=food&tags=japan"
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            2つ (?tags=food&tags=japan)
          </a>
        </div>

        <h3>パターン2: 配列記法 (?tags[]=food&tags[]=japan)</h3>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '15px',
          }}
        >
          <a
            href="/?tags[]=food"
            style={{
              padding: '8px 16px',
              backgroundColor: '#17a2b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            1つだけ (?tags[]=food)
          </a>
          <a
            href="/?tags[]=food&tags[]=japan"
            style={{
              padding: '8px 16px',
              backgroundColor: '#6f42c1',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            2つ (?tags[]=food&tags[]=japan)
          </a>
        </div>

        <h3>パターン3: カンマ区切り (?tags=food,japan)</h3>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '15px',
          }}
        >
          <a
            href="/?tags=food,japan"
            style={{
              padding: '8px 16px',
              backgroundColor: '#fd7e14',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            カンマ区切り (?tags=food,japan)
          </a>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
            <strong>パターン1:</strong> <code>?tags=food&tags=japan</code> →{' '}
            <code>tags: [&quot;food&quot;, &quot;japan&quot;]</code> (array)
          </li>
          <li>
            <strong>パターン2:</strong> <code>?tags[]=food&tags[]=japan</code> →{' '}
            <code>tags: [&quot;food&quot;, &quot;japan&quot;]</code> (array)
          </li>
          <li>
            <strong>パターン3:</strong> <code>?tags=food,japan</code> →{' '}
            <code>tags: &quot;food,japan&quot;</code> (string)
          </li>
        </ul>
        <p style={{ marginTop: '10px', fontSize: '14px' }}>
          <strong>注意:</strong>{' '}
          パターン2でも、1つだけの場合は文字列として受け取られる可能性があります。
        </p>
      </div>
    </div>
  );
}
