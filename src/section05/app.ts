// type AddFn = (n1: number, n2: number) => number;

// let addzz: AddFn;

// addzz = (n1: number, n2: number) => {return  n1 + n2};

interface AddFn {
  (a: number, b: number): number;
}

let addzz: AddFn;

addzz = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(addzz(1, 2));

interface Named {
  readonly name: string;
  outputName?: string;
}

interface AnotherInterface {}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  readonly name: string = "name";
  greet(phrase: string): void {
    console.log(`Person ${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = {
  name: "test",
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

console.log(user1);
user1.greet("howdy");

let person1 = new Person();
person1.greet("joe");

console.log(person1);
