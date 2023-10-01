"use strict";
const button = document.querySelector("button");
const add = (n1, n2) => {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
};
const clickHandler = (message) => {
    console.log("ClickHandler clicked!!!" + message);
};
button.addEventListener("click", clickHandler.bind(null, "Your welcome!"));
