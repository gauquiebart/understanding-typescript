function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log(`rendering template`);
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector(`h1`)!.textContent =
            hookEl.querySelector(`h1`)!.textContent + "  " + this.name;
        }
      }
    };
  };
}

@Logger("Logging")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person2 {
  name = `Max`;

  constructor() {
    console.log(`creating person object`);
  }
}

const person4 = new Person2();
console.log(person4);

function Log(target: any, propertyName: string | Symbol) {
  console.log(`property decorator`);
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(`Accessor decorator`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(`Method decorator`);
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log(`Argument decorator`);
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("price should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product(`book`, 19);
const p2 = new Product(`args`, 20);

console.log(p1, p2);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "The printer and thus by reference the this works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const buttonxx = document.querySelector("button")!;
buttonxx?.addEventListener(`click`, p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?. [propName] ?? []), `required`],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [... (registeredValidators[target.constructor.name]?. [propName] ?? []), `positive`],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  } else {
    let isValid = true;
    for (const prop in objValidatorConfig) {
      for (const validator of objValidatorConfig[prop]) {
        switch (validator) {
          case "required":
            isValid = isValid && !!obj[prop];
            break;
          case "positive":
            isValid = isValid && obj[prop] > 0;
            break;
        }
      }
    }
    return isValid;
  }
}

class Course {
  @Required
  title: string;

  @Required
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const createdCourse = new Course("title", 12);
console.log(validate(createdCourse));

const courseForm = document.querySelector(`form`)!;
courseForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const titleEl = document.getElementById(`title`) as HTMLInputElement;
  const priceEl = document.getElementById(`price`) as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert(`invalid input`);
    return;
  }
  console.log(createdCourse);
});
