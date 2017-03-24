function diffArray(arr1, arr2) {
	var newArr = [];
	var filtered1 = arr1.filter(function(value){
		if (arr2.indexOf(value) === -1){
			return true;
		}
		return false;
	});
	var filtered2 = arr2.filter(function(value){
		if (arr1.indexOf(value) === -1){
			return true;
		}
		return false;
	});
	return newArr.concat(filtered1,filtered2);
}