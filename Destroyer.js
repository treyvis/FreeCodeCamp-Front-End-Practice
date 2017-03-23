function destroyer(arr) {
	var args = Array.from(arguments);
	var filteredArray = args[0];
	for (i = 1; i < args.length; i++){
		filteredArray = filteredArray.filter(function (value){
			if (value === args[i]) return false;
			return true;
		});
	}
	return filteredArray;
}