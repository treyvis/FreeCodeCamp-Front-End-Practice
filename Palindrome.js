function palindrome(str) {
	var alphaNumeric = /^[a-z0-9]+$/i;
	var stringArray = [];

	for (i in str){
		if (alphaNumeric.test(str[i])){
			stringArray.push(str[i].toLowerCase());
		}
	}

	var reverseArray = stringArray;
	reverseArray.reverse();


	for (i in stringArray) {
		var j = stringArray.length - i - 1;

		console.log(stringArray[i]);
		console.log(stringArray[j]);

		if (stringArray[i] !== stringArray[j]) {
			return false;
		}
	}

	return true;
}
