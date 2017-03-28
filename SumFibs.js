function sumFibs(num) {
	var fibs = [1,1];
	var nextFib = fibs[fibs.length - 2] + fibs[fibs.length - 1];

	while (nextFib <= num){
		fibs.push(nextFib);
		nextFib = fibs[fibs.length - 2] + fibs[fibs.length - 1];
	}
	
	var fibsOddSum = 0;
	for (i in fibs){
		if(fibs[i] % 2 !== 0){
			fibsOddSum += fibs[i];
		}
	}

	return fibsOddSum;
}