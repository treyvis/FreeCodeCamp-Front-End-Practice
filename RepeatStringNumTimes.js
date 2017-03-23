function repeatStringNumTimes(str, num) {
	var repeatedString = "";
	if (num < 0) return repeatedString;
	for (i = 0; i < num; i++){
		repeatedString += str;
	}
	return repeatedString;
}