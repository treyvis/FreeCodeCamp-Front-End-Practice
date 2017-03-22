function findLongestWord(str) {
	var wordArray = str.split(" ");
	var longestString = 0;
	for (word in wordArray){
		if (wordArray[word].length > longestString){
			longestString = wordArray[word].length;
		}
	}
	return longestString;
}