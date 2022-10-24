"use strict";
function combine(input1, input2, resultConversion) {
    //if don't we set Combinable as a return type of this function, it infers that the result must be number | string. It does
    //not automatically infer Combinable
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === `as-number`) {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
console.log(combine(1, 2, "as-number"));
console.log(combine('1', '2', "as-text"));
console.log(combine(1, '2', "as-number"));
console.log(combine('1', 2, "as-text"));
var resulty = combine(1, 2, "as-number");
var u1 = { name: "Max", age: 30 };
console.log(u1);
function greet(user) {
    console.log("Hi, I'm ".concat(user.name, ", and i'm ").concat(user.age, " years old"));
}
greet(u1);
greet({ name: 'jef', age: 20 });
//# sourceMappingURL=union-aliases.js.map