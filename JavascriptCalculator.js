/*
Accept input
	numbers
	operators
	equals
*/
function JavascriptCalculator() {
	var formula = "";
	var input = "";
	var operators = ["+","-","*","/"];

	this.numberInput = function (number) {
		if (typeof number === "number" &&
			number >= 0 &&
			number < 10) {

			if (number === 0 &&
				input === "") {
				return;
			}

			input += number;
		}
	};

	this.operatorInput = function (operator) {
		if (typeof operator === "string" && operators.indexOf(operator) !== -1){

			console.log("Valid Operator");
			if (input !== ""){
				formula += input + operator;
				input = "";
			} else if (formula !== "" && operators.indexOf(formula[formula.length - 1]) === -1){
				formula += operator;
			}
		}
	};

	this.dotInput = function (){
		if (input.indexOf(".") === -1){
			if (input === ""){
				input += "0.";
			} else {
				input += ".";
			}
		}
	};

	this.equal = function (){
		formula += input;
		if (operators.indexOf(formula[formula.length -1]) !== -1){
			formula = formula.slice(0, formula.length - 1);
		}
		formula = eval(formula);
		input = "";
	};

	this.clear = function (){
		if (input !== "") {
			input = "";
		} else if (formula !== "" && operators.indexOf(formula[formula.length - 1]) !== -1) {
			formula = formula.slice(0, formula.length - 1);
		} else {
			formula = "";
		}
	};

	this.clearAll = function (){
		input = "";
		formula = "";
	};
}

/*
numberInput(0);
operatorInput("-");
numberInput(-1);
numberInput(3);
numberInput(11);
numberInput(5);
operatorInput("+");
numberInput(3);
dotInput();
numberInput(5);
equal();
*/


