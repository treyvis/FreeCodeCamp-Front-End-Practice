function factorialize(num) {
	if (num <= 0) return;

	factorializeInt = 1;

	for (i = 1; i <= num; i++){
		factorializeInt *= i;
	}

	return factorializeInt;
}
