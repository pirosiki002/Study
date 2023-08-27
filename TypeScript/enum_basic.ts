// a.列挙体を定義
enum Sex{
  MALE = 10,
  FEMALE,
  UNKNOWN
}

// b.MALEにアクセス
let m: Sex = Sex.MALE;
console.log(m);       // 結果：０
console.log(Sex[m]);  // 結果：MALE
