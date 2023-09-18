"use strict";
let logged;
const sendAnalytics = (data) => {
    console.log(data);
    logged = true;
    logged = "Max";
    console.log(logged);
};
sendAnalytics("The data");
