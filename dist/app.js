"use strict";
// type AddFn = (n1: number, n2: number) => number;
var addzz;
addzz = function (n1, n2) {
    return n1 + n2;
};
console.log(addzz(1, 2));
var Person = /** @class */ (function () {
    function Person() {
        this.name = "name";
    }
    Person.prototype.greet = function (phrase) {
        console.log("Person ".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user1;
user1 = {
    name: "test",
    greet: function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    },
};
console.log(user1);
user1.greet("howdy");
var person1 = new Person();
person1.greet("joe");
console.log(person1);
//# sourceMappingURL=app.js.map