class Department {
  // private id: string;
  // name: string;
  //publicはデフォルト。JsにはPublicとPrivateのの概念はない。
  protected employees: string[] = [];
  static year = 2020;
  static crateEmployee(name: string) {
    return { name: name };
  }
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    console.log(Department.year);
  }
  describe(this: Department, year: number) {
    console.log(`Department(${this.id}) is ${this.name}. ${year} year. `);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("dep1", "Accounting");
const employee1 = Department.crateEmployee("Jack");
console.log(employee1, Department.year);

console.log(accounting);

accounting.describe(45);

accounting.addEmployee("Max");
accounting.addEmployee("Mike");
accounting.printEmployeeInformation();

//クラスの継承
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const ITAccounting = new ITDepartment("d1", ["Max"]);
console.log(ITAccounting);

class customerDepartment extends Department {
  private reports: string[] = [];
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("値が正しくありません。");
    }
    this.addReport(value);
  }
  constructor(id: string, reports: string[]) {
    super(id, "customer");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printResult() {
    console.log(this.reports);
  }
  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    } else {
      this.employees.push(name);
    }
  }
}
const customer = new customerDepartment("dep2", []);
console.log(customer);

customer.addReport("texttext....");
customer.mostRecentReport = "レポート";
console.log(customer.mostRecentReport);
customer.printResult();
console.log(customer);

customer.addEmployee("Max");
customer.addEmployee("mike");
customer.printEmployeeInformation();

//クラスDepartment内でのみアクセス可能
// accounting.employees[2] = "Anna";

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe(23);
