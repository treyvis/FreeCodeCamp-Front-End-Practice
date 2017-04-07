function JavascriptCalculator() {
	var formula = "";
	var input = "0";

	this.numberInput = function (number) {
		this.setInput(number);
	};

	this.operatorInput = function (operator) {
		this.setFormula(input + operator);
		this.setInput();
	};

	this.dotInput = function (){
		if (input.indexOf(".") === -1){
			if(input === "0") {
				this.setInput("0.");
			} else {
				this.setInput(".");
			}
		}
	};

	this.equal = function (){
		formula += input;
		this.setInput();
		this.setInput(eval(formula));
		this.setFormula();
	};

	this.clear = function (){
		if (input !== "0") {
			this.setInput();
		} else {
			this.setFormula();
		}
	};

	this.clearAll = function (){
		this.setInput();
		this.setFormula();
	};

	this.setInput = function (argument){
		if (argument === undefined){
			input = "0";
		} else if (input === "0"){
			input = argument;
		} else {
			input += argument;
		}
		$(".input").html(input);
	};

	this.setFormula = function (argument){
		if(argument === undefined){
			formula = "";
		} else {
			formula += argument;
		}
		$(".formula").html(formula);
	};
}

var calc;

$( document ).ready(function() {
    calc = new JavascriptCalculator();
    $(".well").click(function(){
    	console.log("Number Clicked");
	});
	$(".number").click(function(){
		console.log($(this).html());
		calc.numberInput($(this).html());
	});
	$(".dot").click(function(){
		calc.dotInput();
	});
	$(".operator").click(function(){
		calc.operatorInput($(this).html());
	});
	$(".equal").click(function(){
		calc.equal();
	});
	$(".clear").click(function(){
		calc.clear();
	});
	$(".clearAll").click(function(){
		calc.clearAll();
	});
	console.log("Calc ready");
});



