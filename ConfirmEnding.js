function confirmEnding(str, target) {
	if (str.substring(str.length - target.length) === target){
		return true;
	}
	return false;
}