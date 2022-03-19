//abstractクラスはインスタンス化できない
abstract class Department {
  // private id: string;
  // name: string;
  //publicはデフォルト。JsにはPublicとPrivateのの概念はない。
  protected employees: string[] = [];
  static year = 2020;
  static crateEmployee(name: string) {
    return { name: name };
  }
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    console.log(Department.year);
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

const employee1 = Department.crateEmployee("Jack");
console.log(employee1, Department.year);

//クラスの継承
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe(): void {
    console.log("IT部門-ID:" + this.id);
  }
}

const ITAccounting = new ITDepartment("d1", ["Max"]);
ITAccounting.describe();
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
  describe(): void {
    console.log("CS部門-ID:" + this.id);
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

customer.describe();
