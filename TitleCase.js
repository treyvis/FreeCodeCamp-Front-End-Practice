function titleCase(str) {
	var wordArray = str.split(" ");
	var upperCaseString = "";
	for (word in wordArray){
		upperCaseString += wordArray[word][0].toUpperCase() + 
			wordArray[word].substring(1).toLowerCase() + " ";
	}
	return upperCaseString.trim();
}