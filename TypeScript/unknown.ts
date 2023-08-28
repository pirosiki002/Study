let notSure: unknown = 4;
notSure = "maybe a string";

// 下の行はエラーとなります: Object is of type 'unknown'.
// console.log(notSure.length);

// 型ガードを使用して型を確認
if (typeof notSure === "string") {
    console.log(notSure.length);  // ここでは安全に.lengthを使用できます
}
