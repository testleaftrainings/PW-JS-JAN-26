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
var BaseBank = /** @class */ (function () {
    function BaseBank() {
    }
    BaseBank.prototype.openAccount = function () {
        console.log("Common step: KYC verification done");
    };
    BaseBank.prototype.withdrawLimit = function () {
        console.log("Common Step: Transaction Audit");
    };
    return BaseBank;
}()); // Non implemented // Method Signature
/* Note: You cannot create an object for an abstract class
Abstract class can have both implemented and non implemnet method (here should have an abstract keyword before the method signature)  */
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBI.prototype.interestRate = function () {
        return 7.5;
    };
    return SBI;
}(BaseBank));
var sbiobj = new SBI();
console.log(sbiobj.interestRate());
sbiobj.openAccount();
sbiobj.withdrawLimit();
/* **************************************************** */
var HDFC = /** @class */ (function (_super) {
    __extends(HDFC, _super);
    function HDFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HDFC.prototype.interestRate = function () {
        return 7.5;
    };
    return HDFC;
}(BaseBank));
/* **************************************************** */
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Axis.prototype.interestRate = function () {
        return 8.5;
    };
    return Axis;
}(BaseBank));
