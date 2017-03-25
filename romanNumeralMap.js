function convertToRoman(num) {
	var numeral = "";
	var integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
	for (i = 0; i <= integer.length; i++){
		while(num % integer[i] < num){
			numeral += romans[i];
			num -= integer[i];
		}
	}
	return numeral;
}

