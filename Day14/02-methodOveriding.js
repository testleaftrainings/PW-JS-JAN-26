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
var BaseBank = /** @class */ (function () {
    function BaseBank() {
    }
    BaseBank.prototype.interestRate = function () {
        console.log("Interest rate is 5%");
    };
    return BaseBank;
}());
var SBIBank = /** @class */ (function (_super) {
    __extends(SBIBank, _super);
    function SBIBank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBIBank.prototype.interestRate = function () {
        console.log("Interest rate is 5%");
    };
    return SBIBank;
}(BaseBank));
var bankobj = new SBIBank();
bankobj.interestRate();
