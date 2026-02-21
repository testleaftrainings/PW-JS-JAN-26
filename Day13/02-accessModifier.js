"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSignUp = void 0;
var EmployeeSignUp = /** @class */ (function () {
    function EmployeeSignUp() {
        this.eName = "Hari"; // By default the accessmodifier is considered as public
        this.eid = "Emp123";
        this.ephno = 656745634;
        this.eSalary = 67866;
    }
    EmployeeSignUp.prototype.printDetails = function () {
        console.log("The emp details ".concat(this.eName, " ").concat(this.eid, " ").concat(this.ephno, " ").concat(this.eSalary));
    };
    EmployeeSignUp.prototype.readData = function () {
        return this.eSalary; //
    };
    Object.defineProperty(EmployeeSignUp.prototype, "writeData", {
        set: function (newSal) {
            this.eSalary = newSal;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeSignUp;
}());
exports.EmployeeSignUp = EmployeeSignUp;
// const emp = new EmployeeSignUp()
// emp.printDetails()
// console.log(emp.readData()) // Old Salary =67866
// emp.writeData=99999
// console.log(emp.readData); // New Salary = 99999
