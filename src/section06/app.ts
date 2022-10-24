type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: `max`,
  privileges: [`creeate-server`],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable & Numeric2;



//function overloads

function addddddz(a: number, b: number): number;
function addddddz(a: string, b: string): string;
function addddddz(a: number, b: string): string;
function addddddz(a: string, b: number): string;
function addddddz(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === `string`) {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}


const result42 = addddddz(`naz`, `kdd`);
console.log(result42.split('test'));
const result45 = addddddz(1, 5);

const fetchUserData = JSON.parse("{}");

console.log(fetchUserData?.job?.title);

const userInputz = undefined;

const storedData = userInputz ?? 'default';
console.log(`storeddata = ${storedData}`);




type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
  console.log(`name = ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`name = ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`name = ${emp.startDate}`);
  }
}

printEmployee(e1);

class Car {
  drive() {
    console.log(`driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck`);
  }
  loadCargo(amount: number) {
    console.log(`loading cargo ${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//discriminating unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log(`moving with speed: ` + animal.flyingSpeed);
      break;
    case "horse":
      console.log(`moving with speed: ` + animal.runningSpeed);
      break;
  }
}

moveAnimal({ type: `bird`, flyingSpeed: 10 });
moveAnimal({ type: `horse`, runningSpeed: 65468 });

//type casting
//const paragraph = document.querySelector('p');
//const paragraph = <HTMLInputElement> document.getElementById('paragraph')!;
const paragraph = document.getElementById("paragraph")! as unknown as Bird;
paragraph.type = "bird";

interface ErrorContainer {
    [prop: string] : string
}

const errorBag: ErrorContainer = {
    email: 'not a valid email',
    1: `lskjdfljsdf`,
    userName: 'test'
};
console.log(errorBag);








