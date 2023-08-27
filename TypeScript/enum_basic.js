// a.列挙体を定義
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 10] = "MALE";
    Sex[Sex["FEMALE"] = 11] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 12] = "UNKNOWN";
})(Sex || (Sex = {}));
// b.MALEにアクセス
var m = Sex.MALE;
console.log(m); // 結果：０
console.log(Sex[m]); // 結果：MALE
