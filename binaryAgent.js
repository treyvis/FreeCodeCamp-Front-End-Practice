function binaryAgent(str) {
	var binaryArray = str.split(" ");
	var binaryString = "";
	for (i in binaryArray){
		var characterCode = 0;
		for (j in binaryArray[i]){
			characterCode += parseInt(binaryArray[i][j]) * Math.pow(2, binaryArray[i].length - 1 - j);
		}
		binaryString += String.fromCharCode(characterCode);
	}
	return binaryString;
}