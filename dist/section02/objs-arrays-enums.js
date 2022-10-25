"use strict";
// const person = {
//     name: 'Bart',
//     age: 27,
//     hobbies: [`Sports`, `Cooking`],
//     role: [2, `author`],
// };
//object type inferred by typescript
//const person: { name: string, age: number, hobbies: string[], role: (string | number)[] } -> containing a set of key-type pairs
// role:(string | number)[] : union types, string or number are allowed => inference now does not the way we want
// we want a tuple type, first one number, second element a string 
//const roleAsTuple: [number, string] = [2, `author`];
// you can make it any amount of types ... don't have to a tuple
//const roleAsTuple: [number, string, number] = [2, `author`, 3]; // works
//console.log(person); //works
//console.log(person.name); //works
//console.log(person.nickname); // does not work
//console.log(roleAsTuple);
//for (const hobby of person.hobbies) {
// console.log(hobby.toUpperCase()); //typescript inference infers that hobby is of type string
//}
const person2 = {
    name: 'Bart',
    age: 27
};
//object type inferred by typescript: object (no more info
//console.log(person2); //works
//console.log(person2.name); //does not work
const person3 = {
    name: 'Bart',
    age: 27
};
//object type inferred by typescript: object (no more info
//console.log(person3); //works
//console.log(person3.name); //works again
//=> better to use person ... and let typescript infer all this
let favouriteActivities = [];
favouriteActivities.push('abc');
//console.log(favouriteActivities);
let anyTypesArray = [];
//console.log(anyTypesArray);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: `Bart`,
    age: 27,
    hobbies: [`Sports`, `Cooking`],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.ADMIN) {
    console.log(`admin`);
}
//# sourceMappingURL=objs-arrays-enums.js.map