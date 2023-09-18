"use strict";
const button = document.querySelector("button");
const clickHandler = (message) => {
    console.log("ClickHandler clicked!!!" + message);
};
button.addEventListener("click", clickHandler.bind(null, "Your welcome!"));
