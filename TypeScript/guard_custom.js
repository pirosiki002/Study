// a.型ガード関数の定義
function isBook(inf) {
    return inf.isbn !== undefined;
}
// 2. getInfo関数の定義 (サンプルとして)
function getInfo() {
    return Math.random() > 0.5 ? { isbn: "12345" } : { mcode: "M123" };
}
// b.型に応じて操作を分岐
var i = getInfo();
if (isBook(i)) {
    //ISBNコードを取得（Book型の操作）
    console.log(i.isbn);
}
else {
    //雑誌コードを取得（Magazine型の操作）
    console.log(i.mcode);
}
