function convertToRoman(num) {
	var numeral = "";
	numeral = romanNumeralMap(num % 10 - num % 1) + numeral;
	numeral = romanNumeralMap(num % 100 - num % 10) + numeral;
	numeral = romanNumeralMap(num % 1000 - num % 100) + numeral;
	numeral = romanNumeralMap(num % 10000 - num % 1000) + numeral;
	return numeral;
}

function romanNumeralMap(num) {
	var numeral = "";
	switch(num){
		case 1: numeral = "I"; break;
		case 2: numeral = "II"; break;
		case 3: numeral = "III"; break;
		case 4: numeral = "IV"; break;
		case 5: numeral = "V"; break;
		case 6: numeral = "VI"; break;
		case 7: numeral = "VII"; break;
		case 8: numeral = "VIII"; break;
		case 9: numeral = "IX"; break;
		case 10: numeral = "X"; break;
		case 20: numeral = "XX"; break;
		case 30: numeral = "XXX"; break;
		case 40: numeral = "XL"; break;
		case 50: numeral = "L"; break;
		case 60: numeral = "LX"; break;
		case 70: numeral = "LXX"; break;
		case 80: numeral = "LXXX"; break;
		case 90: numeral = "XC"; break;
		case 100: numeral = "C"; break;
		case 200: numeral = "CC"; break;
		case 300: numeral = "CCC"; break;
		case 400: numeral = "CD"; break;
		case 500: numeral = "D"; break;
		case 600: numeral = "DC"; break;
		case 700: numeral = "DCC"; break;
		case 800: numeral = "DCCC"; break;
		case 900: numeral = "CM"; break;
		case 1000: numeral = "M"; break;
	}
	return numeral;
}
