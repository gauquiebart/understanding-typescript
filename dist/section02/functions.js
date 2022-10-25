"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function add3(n1, n2) {
    return n1.toString() + n2.toString();
}
function printResultee(num) {
    console.log(`Result: ` + num);
}
var resultee = printResultee(add2(5, 12));
console.log(resultee);
let someValue;
console.log(someValue); // logs: undefined in js
let someValue2;
console.log(someValue); // logs: undefined in js
if (someValue === undefined) {
    //console.log(`somevalue is undefined`); // logs ... 
}
//if(someValue2 === undefined) {  // can work in typescript .. does get a warning
//  console.log(`somevalue2 is undefined`); // logs ...
//}
//let combineValues: Function;
let combineValues;
combineValues = add2;
//combineValues = printResultee; // works if type of combineValues: Function
//combineValues = 5; //(if combineValues is defined as Function
console.log(combineValues(2, 3)); // gives a warning, does work if warning ignored, and throws a js error @ runtime
//function types: types that describe a function: parameters and return type
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map