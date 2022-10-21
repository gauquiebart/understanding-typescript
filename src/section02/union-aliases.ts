type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; /* literal type combined with union types*/

function combine(input1: Combinable,
                 input2: Combinable,
                 resultConversion: ConversionDescriptor): Combinable {
    //if don't we set Combinable as a return type of this function, it infers that the result must be number | string. It does
    //not automatically infer Combinable
    let result;
    if (typeof input1 === `number` && typeof input2 === `number` || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
// if(resultConversion === `as-number`) {
//     return +result;
// } else {
//     return result.toString();
// }
    return result;
}


console.log(combine(1, 2, `as-number`));
console.log(combine('1', '2', `as-text`));
console.log(combine(1, '2', `as-number`));
console.log(combine('1', 2, `as-text`));

const resulty = combine(1, 2, `as-number`);


type User = { name: string, age: number };
const u1: User = {name: `Max`, age: 30};

console.log(u1);

function greet(user: User){
    console.log(`Hi, I'm ${user.name}, and i'm ${user.age} years old`);
}

greet(u1);

greet({name: 'jef', age: 20});


