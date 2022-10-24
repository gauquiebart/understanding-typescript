abstract class Department {
  //private id : string;
  //private name: string;
  protected employees: string[] = [];
  private static field = 34;

  constructor(private readonly id: string, public name: string) {
    //    this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, `IT`);
  }
  describe(this: ITDepartment) {
    console.log(`department : ${this.admins}.`);
  }
}

class AccountingDepartment extends Department {
  get mostRecentReport() {
    return this.reports[0];
  }

  constructor(id: string, private reports: string[] = []) {
    super(id, `Accounting`);
  }

  describe(this: Department) {
    console.log(`department : ${this.name}.`);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
}

let itdepartment = new ITDepartment(`id`, [`beheave`]);
console.log(itdepartment);

itdepartment.describe();
itdepartment.addEmployee("abc");
itdepartment.addEmployee("def");

itdepartment.printEmployeeInformation();

console.log(Department.createEmployee(`Max`));

//department1.employees[2] = 'dddd'; // does not work because employees is private

itdepartment.printEmployeeInformation();

let accountingDepartment = new AccountingDepartment(`id3`);
accountingDepartment.addEmployee(`jules`);

accountingDepartment.addReport("report something went rwong");
console.log(accountingDepartment);
console.log(accountingDepartment.mostRecentReport);

const accountingCopy = { describe: itdepartment.describe };
//accountingCopy.describe(); (DOES NOT WORK BECAUSE accountingcopy does not have a name property, and thus not abiding to Department 'type')

const accountingCopy2 = {
  name: `AnAME`,
  describe: itdepartment.describe,
  employees: [],
  addEmployee: itdepartment.addEmployee,
  printEmployeeInformation: itdepartment.printEmployeeInformation,
};
//accountingCopy2.describe(); // does not work because employees is private ...

console.log(Math.pow(2, 4));
