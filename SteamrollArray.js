function steamrollArray(arr) {
	var flatArr = [];
	for (i in arr){
		console.log("arr[i]: " + arr[i]);
		if (!Array.isArray(arr[i])){
			console.log("Is NOT Array. Push: " + arr[i]);
			flatArr.push(arr[i]);
		} else {
			console.log("Is Array. Calling. Array: " + arr[i]);
			flatArr = flatArr.concat(steamrollArray(arr[i]));
		}
		console.log("flatArr: " + flatArr);
	}
	return flatArr;
}