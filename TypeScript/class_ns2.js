var Wings;
(function (Wings) {
    var MainApp;
    (function (MainApp) {
        var Hoge = /** @class */ (function () {
            function Hoge() {
                console.log("Hoge instance created");
            }
            return Hoge;
        }());
        MainApp.Hoge = Hoge;
        function foo() {
            console.log("foo function called");
        }
        MainApp.foo = foo;
    })(MainApp = Wings.MainApp || (Wings.MainApp = {}));
})(Wings || (Wings = {}));
var wmah = new Wings.MainApp.Hoge();
Wings.MainApp.foo();
