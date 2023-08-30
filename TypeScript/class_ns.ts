// // a. Declare MainApp namespace
// namespace MainApp{
//   export class Hoge{}
//   export function foo(){}
// }

// // b. call namespace
// let mah = new MainApp.Hoge();
// MainApp.foo();


// MainAppという名前空間を定義します。
namespace MainApp {
  // Hogeクラスをエクスポート（公開）します。
  export class Hoge {
    constructor() {
      console.log("Hoge instance created");
    }
  }

  // foo関数をエクスポート（公開）します。
  export function foo() {
    console.log("foo function called");
  }
}

// 名前空間MainAppの中のHogeクラスをインスタンス化します。
let myHogeInstance = new MainApp.Hoge();  // コンソールに"Hoge instance created"と表示される

// 名前空間MainAppの中のfoo関数を呼び出します。
MainApp.foo();  // コンソールに"foo function called"と表示される
