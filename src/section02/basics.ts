function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 ** n2;
    if (showResult) {
        console.log('showing result: ' + phrase + ' ' + result);
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = `Result is `;

let number3: number; // assign a type if none initialized @ variable definition
number3 = 12121.09;
//number3 = '3'; // error ... 

let number4; // is any
number4 = 12121.09; // valid
number4 = '3'; // also valid 


const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

