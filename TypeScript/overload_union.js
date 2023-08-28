function square(value) {
    if (value < 0) {
        return false;
    }
    else {
        return Math.sqrt(value);
    }
}
console.log(square(9)); // result:3
console.log(square(-9)); // result:false
