'use client';
import React, { FC, useState } from 'react';

const style = {
  padding: '1rem',
};

const App: FC = () => {
  // ===== 学習用データ =====
  // ユーザーの所属ID（数値の配列）
  const ids: number[] = [1, 12, 3];

  // 公開範囲の対象ID（文字列の配列）
  // const permissionIds: string[] = ['1', '2', '5'];
  const permissionIds: string[] = ['2'];

  // ===== パターン1: 型を一致させない場合（問題あり） =====
  const checkWithoutTypeConversion = () => {
    // ❌ 型が一致していないため、includes()は常にfalseを返す
    // 注意: 実際のコードでは型エラーが発生する（学習用のため型アサーションを使用）
    // 「permissionIdsのうち、idsに含まれているものが1つでもあるか」
    const hasIncludedIds1 = permissionIds.some(
      (id) => (ids as any).includes(id) // number[]にstringを探す → 常にfalse
    );
    console.log('型不一致:', hasIncludedIds1); // 常にfalse（型が違うため見つからない）
  };

  // ===== パターン2: toString().includes()を使う場合（問題あり） =====
  const checkWithToString = () => {
    // ❌ toString()は配列全体を文字列に変換するため、正しく動作しない
    // ids.toString() → "1,2,3" という文字列になる
    // 「permissionIdsのうち、idsに含まれているものが1つでもあるか」
    const hasIncludedIds2 = permissionIds.some((id) =>
      ids.toString().includes(id)
    );

    permissionIds.map((id) => {
      {
        console.log('ids.toString()', ids.toString());
      }
    });

    const idsAsString = ids.map(String);

    console.log('idsAsString', idsAsString);

    console.log('toString使用:', hasIncludedIds2);
    // 問題: "1,2,3".includes("2") → true だが、"1,2,3".includes("12") → もtrueになってしまう
    // 例: id = "12" の場合、"1,2,3".includes("12") → true（誤検出）
  };

  // ===== パターン3: 正しい方法（型を一致させる） =====
  const checkWithTypeConversion = () => {
    // ✅ 各要素を文字列に変換してから比較
    // 「permissionIdsのうち、idsAsStringに含まれているものが1つでもあるか」
    const idsAsString = ids.map(String);
    const hasIncludedIds3 = permissionIds.some((id) =>
      idsAsString.includes(id)
    );
    console.log('型変換後:', hasIncludedIds3); // 正しく動作
    return hasIncludedIds3;
  };

  // ===== デモ実行 =====
  React.useEffect(() => {
    console.log('=== some()とincludes()の学習 ===');
    console.log('ids:', ids);
    console.log('permissionIds:', permissionIds);

    checkWithoutTypeConversion();
    checkWithToString();
    checkWithTypeConversion();
  }, []);

  return (
    <div style={style}>
      <h1>some()とincludes()の学習</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>基本の動作確認</h2>
        <div>
          <h3>1. includes()の基本</h3>
          <pre>{`
// 配列に要素が含まれているかチェック
[1, 2, 3].includes(2)        // true
[1, 2, 3].includes(4)        // false
['a', 'b'].includes('a')     // true
['a', 'b'].includes(1)       // false（型が違う）
          `}</pre>
        </div>

        <div>
          <h3>2. some()の基本</h3>
          <pre>{`
// 配列の要素のうち、条件を満たすものが1つでもあるかチェック
[1, 2, 3].some(x => x > 2)   // true（3が条件を満たす）
[1, 2, 3].some(x => x > 5)   // false（すべて条件を満たさない）
          `}</pre>
        </div>

        <div>
          <h3>3. 組み合わせた使用例</h3>
          <pre>{`
// 「permissionIdsのうち、idsAsStringに含まれているものが1つでもあるか」
permissionIds.some(
  id => idsAsString.includes(id)
)
          `}</pre>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>なぜtoString().includes()が問題なのか</h2>
        <div>
          <h3>問題点1: 配列全体が文字列になる</h3>
          <pre>{`
[1, 2, 3].toString()  // "1,2,3"
"1,2,3".includes("2") // true ✅ 正しい
"1,2,3".includes("12") // true ❌ 誤検出！
          `}</pre>
        </div>

        <div>
          <h3>問題点2: 境界の問題</h3>
          <pre>{`
// 例: ids = [1, 12, 3]
[1, 12, 3].toString()  // "1,12,3"
"1,12,3".includes("1")  // true（1と12の両方にマッチしてしまう）
"1,12,3".includes("2")  // true（12に含まれるため誤検出）
          `}</pre>
        </div>

        <div>
          <h3>✅ 正しい方法: map()で各要素を変換</h3>
          <pre>{`
[1, 2, 3].map(String)  // ["1", "2", "3"]
["1", "2", "3"].includes("2")  // true ✅
["1", "2", "3"].includes("12") // false ✅ 正しく判定
          `}</pre>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>型の不一致が問題になる理由</h2>
        <div>
          <pre>{`
// number[]とstring[]を比較
const numbers = [1, 2, 3];
const strings = ['1', '2', '3'];

numbers.includes('1')  // false ❌ 型が違うため
numbers.includes(1)   // true ✅ 型が一致

// 解決策: 型を統一する
numbers.map(String).includes('1')  // true ✅
          `}</pre>
        </div>
      </section>

      <a href="./dndkit" style={{ display: 'block', marginTop: '2rem' }}>
        to the DnDkit
      </a>
    </div>
  );
};

export default App;
