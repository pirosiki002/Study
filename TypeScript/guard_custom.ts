// 1. クラスの定義
interface Book {
  isbn: string;
  [key: string]: any; // 他の任意のプロパティを持つことができます。
}

interface Magazine {
  mcode: string;
  [key: string]: any; // 他の任意のプロパティを持つことができます。
}

// a.型ガード関数の定義
function isBook(inf: Book | Magazine): inf is Book {
  return (inf as Book).isbn !== undefined;
}

// 2. getInfo関数の定義 (サンプルとして)
function getInfo(): Book | Magazine {
  return Math.random() > 0.5 ? {isbn: "12345"} : {mcode: "M123"};
}

// b.型に応じて操作を分岐
let i = getInfo();
if (isBook(i)) {
  //ISBNコードを取得（Book型の操作）
  console.log(i.isbn);
} else {
  //雑誌コードを取得（Magazine型の操作）
  console.log(i.mcode);
}
