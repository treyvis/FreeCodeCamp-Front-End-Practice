
function smallestCommons(arr) {
	var min = Math.min(arr[0],arr[1]);
	var max = Math.max(arr[0],arr[1]);
	var range = [];
	var smallestMultiple = max;
	var multipleCheck = function(numbersArray, multiple){
		for(i in numbersArray){
			if(multiple % numbersArray[i] !== 0){
				return false;
			}
		}
		return true;
	};

	for(i = min; i <= max; i++){
		range.push(i);
	}

	while(!multipleCheck(range,smallestMultiple)){
		smallestMultiple += max;
	}

	return smallestMultiple;
}