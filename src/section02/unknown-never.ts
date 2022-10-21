let userInput: unknown;
//let userInput: any; // no type checking, assignment to a string variable works ... , not with unknown
let userName: string;


userInput = 5;
userInput = `Max`;
//userName = userInput; // does not work

if (typeof userInput === `string`) {
    userName = userInput;
}

//unknown is the better choice over any if we don't know the type... it enforces an extra check if we do something specific for a type


function generateError(message: string, code: number): never { // this function is intended to never return any value
    throw {message: message, errorCode: code};
}

const resulteeee = generateError(`an error occured`, 500);
console.log(resulteeee);