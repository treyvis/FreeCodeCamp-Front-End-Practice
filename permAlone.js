function permAlone(str) {
	//regex test
	var regexRepeat = /(.){1}\1/;
	var noRepeatPermCount = 0;
	//heap's swap
	var heapSwap = function (arr, index1, index2){
		var placeHolder = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = placeHolder;
	};
	//heap's generate
	var heapsGenerate = function (arr, n) {
		n = n || arr.length;
		if (n === 1){
			//console.log(arr);
			var stringArray = "";
			for (var i in arr){
				stringArray += arr[i];
			}
			//console.log(stringArray);
			if (!regexRepeat.test(stringArray)){
				noRepeatPermCount++;
			}
		} else {
			for (var i = 1; i <= n; i++){
				heapsGenerate(arr, n - 1);
				if (n % 2){
					var j = 1;
				} else {
					var j = i;
				}
				heapSwap(arr, j - 1, n - 1);
			}
		}
	};

	var permArray = Array.from(str);
	heapsGenerate(permArray);
	return noRepeatPermCount;
}