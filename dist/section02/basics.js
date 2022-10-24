"use strict";
function add(n1, n2, showResult, phrase) {
    var result = Math.pow(n1, n2);
    if (showResult) {
        console.log('showing result: ' + phrase + ' ' + result);
    }
    return result;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is ";
var number3; // assign a type if none initialized @ variable definition
number3 = 12121.09;
//number3 = '3'; // error ... 
var number4; // is any
number4 = 12121.09; // valid
number4 = '3'; // also valid 
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
//# sourceMappingURL=basics.js.map