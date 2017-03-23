function largestOfFour(arr) {
  
  var largestNumbersArray = [];
  for (i in arr){
  	var largestNumber = arr[i][0];
  	for (j in arr[i]){
  		if (arr[i][j] > largestNumber){
  			largestNumber = arr[i][j];
  		}
  	}
  	largestNumbersArray.push(largestNumber);
  }

  return largestNumbersArray;
}