function dropElements(arr, func) {
	while(arr[0] !== undefined){
		if (func(arr[0])){
			return arr;
		} else {
			arr.shift();
		}
	}
	return arr;
}