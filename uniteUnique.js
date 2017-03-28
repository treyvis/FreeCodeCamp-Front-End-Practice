function uniteUnique(arr) {
	var args = Array.from(arguments);
	uniqueValues = [];
	for (i in args){
		for (j in args[i]){
			if (uniqueValues.indexOf(args[i][j]) === -1){
				uniqueValues.push(args[i][j]);
			}
		}
	}
	return uniqueValues;
}