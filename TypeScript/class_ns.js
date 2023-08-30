// // a. Declare MainApp namespace
// namespace MainApp{
//   export class Hoge{}
//   export function foo(){}
// }
// // b. call namespace
// let mah = new MainApp.Hoge();
// MainApp.foo();
// MainAppという名前空間を定義します。
var MainApp;
(function (MainApp) {
    // Hogeクラスをエクスポート（公開）します。
    var Hoge = /** @class */ (function () {
        function Hoge() {
            console.log("Hoge instance created");
        }
        return Hoge;
    }());
    MainApp.Hoge = Hoge;
    // foo関数をエクスポート（公開）します。
    function foo() {
        console.log("foo function called");
    }
    MainApp.foo = foo;
})(MainApp || (MainApp = {}));
// 名前空間MainAppの中のHogeクラスをインスタンス化します。
var myHogeInstance = new MainApp.Hoge(); // コンソールに"Hoge instance created"と表示される
// 名前空間MainAppの中のfoo関数を呼び出します。
MainApp.foo(); // コンソールに"foo function called"と表示される
