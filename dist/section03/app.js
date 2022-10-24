"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked 111 ".concat(message));
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "msg"));
}
function sendAnalytics(data) {
    console.log(data);
}
//# sourceMappingURL=app.js.map