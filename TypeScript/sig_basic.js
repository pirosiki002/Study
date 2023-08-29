// b. declare type Car val c
var c = {
    type: 'track',
    run: function () {
        console.log("".concat(this.type, " run"));
    }
};
c.run(); // result
