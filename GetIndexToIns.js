function getIndexToIns(arr, num) {
	arr.sort(function(a, b){return a-b});
	console.log(arr);
	for (number in arr){
		if (num <= arr[number]) return parseInt(number);
	}
	return arr.length;
}