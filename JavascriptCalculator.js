/*
Accept input
	numbers
	operators
	equals
*/

var formula = "";
var input = "";
var operators = ["+","-","*","/"];

function numberInput(number) {
	if (typeof number === "number" &&
		number >= 0 &&
		number < 10) {

		if (number === 0 &&
			input === "") {
			return;
		}

		input += number;
	}
}

function operatorInput(operator) {
	if (typeof operator === "string" && operators.indexOf(operator) !== -1){

		console.log("Valid Operator");
		if (input !== ""){
			formula += input + operator;
			input = "";
		} else if (formula !== "" && operators.indexOf(formula[formula.length - 1]) === -1){
			formula += operator;
		}
	}
}

function dotInput(){
	if (input.indexOf(".") === -1){
		if (input === ""){
			input += "0.";
		} else {
			input += ".";
		}
	}
}

function equal(){
	formula += input;
	if (operators.indexOf(formula[formula.length -1]) !== -1){
		formula = formula.slice(0, formula.length - 1);
	}
	formula = eval(formula);
	input = "";
}

function clear(){

}

function clearAll(){
	
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


