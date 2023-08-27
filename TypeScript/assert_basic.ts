function show(result: string) {
  return `結果は${result}です。`;
}

// a.数値型を渡すとエラー
//console.log(show(100));

// b.any型に変換
console.log(show(<any>100));

// c.as構文でも置き換え可
console.log(show('100' as any));