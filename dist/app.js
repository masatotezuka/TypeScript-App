"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstractクラスはインスタンス化できない
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        //publicはデフォルト。JsにはPublicとPrivateのの概念はない。
        this.employees = [];
        // this.id = id;
        // this.name = name;
        console.log(Department.year);
    }
    Department.crateEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.year = 2020;
    return Department;
}());
var employee1 = Department.crateEmployee("Jack");
console.log(employee1, Department.year);
//クラスの継承
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT部門-ID:" + this.id);
    };
    return ITDepartment;
}(Department));
var ITAccounting = new ITDepartment("d1", ["Max"]);
ITAccounting.describe();
console.log(ITAccounting);
var customerDepartment = /** @class */ (function (_super) {
    __extends(customerDepartment, _super);
    function customerDepartment(id, reports) {
        var _this = _super.call(this, id, "customer") || this;
        _this.reports = [];
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(customerDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("レポートが見つかりません。");
        },
        set: function (value) {
            if (!value) {
                throw new Error("値が正しくありません。");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    customerDepartment.prototype.describe = function () {
        console.log("CS部門-ID:" + this.id);
    };
    customerDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    customerDepartment.prototype.printResult = function () {
        console.log(this.reports);
    };
    customerDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        else {
            this.employees.push(name);
        }
    };
    return customerDepartment;
}(Department));
var customer = new customerDepartment("dep2", []);
customer.describe();
