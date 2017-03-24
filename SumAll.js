function sumAll(arr) {
	var sum = 0;
	for (i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++){
		sum += i;
	}
	return sum;
}