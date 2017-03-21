function reverseString(str) {
	if (typeof str !== "string") return;
	var stringArray = [];
	var reversedString = "";

	for (i in str){
		stringArray.push(str[i]);
	}
	for (i = stringArray.length - 1; i >= 0; i--){
		reversedString += stringArray[i];
	}

	return reversedString;
}