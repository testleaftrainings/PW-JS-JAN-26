var ElementActions = /** @class */ (function () {
    function ElementActions() {
    }
    //common implementation
    ElementActions.prototype.click = function (element, forceClick) {
        //Case 1 one argument passed then else block will be implemented
        //Case 2 2 arguments passed the if block will be implement 
        if (forceClick) {
            console.log("Forcivly clicking the element ".concat(element));
        }
        else {
            console.log("Normal clicking of the lement ".concat(element));
        }
    };
    return ElementActions;
}());
var actions = new ElementActions();
//actions.click("#LoginButton") // //Case 1 one argument passed then else block will be implemented
actions.click("#LoginButton", true); ////Case 2 2 arguments passed the if block will be implement  
