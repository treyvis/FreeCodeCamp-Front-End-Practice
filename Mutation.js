function mutation(arr) {
	for (i = 0; i < arr[1].length; i++){
		if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
			return false;
		}
	}
	return true;
}