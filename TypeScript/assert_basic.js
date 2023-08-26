function show(result) {
    return "\u7D50\u679C\u306F".concat(result, "\u3067\u3059\u3002");
}
// a.数値型を渡すとエラー
//console.log(show(100));
// b.any型に変換
console.log(show(100));
// c.as構文でも置き換え可
console.log(show('100'));
