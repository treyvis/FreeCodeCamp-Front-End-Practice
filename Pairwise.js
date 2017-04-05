function pairwise(arr, arg) {
	var indexSum = 0;
	var skipIndex = [];
	for (var i = 0; i < arr.length - 1; i++){
		for (var j = i + 1; j < arr.length; j++ ){
			if (arr[i] + arr[j] === arg
				&& skipIndex.indexOf(i) === -1
				&& skipIndex.indexOf(j) === -1){
					indexSum += i + j;
					skipIndex.push(i);
					skipIndex.push(j);
			}
		}
	}
  return indexSum;
}