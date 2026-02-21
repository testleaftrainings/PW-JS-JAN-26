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
Object.defineProperty(exports, "__esModule", { value: true });
var _02_accessModifier_1 = require("./02-accessModifier");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HR.prototype.empUpdate = function () {
        console.log(this.ephno); // protected access modifier gets exposed through derived class        
    };
    return HR;
}(_02_accessModifier_1.EmployeeSignUp));
var emphr = new HR();
emphr.empUpdate();
emphr.printDetails();
console.log(emphr.readData()); // Old Salary =67866
emphr.writeData = 99999;
console.log(emphr.readData()); // New Salary = 99999
