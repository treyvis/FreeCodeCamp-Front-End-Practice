function truncateString(str, num) {
	if (str.length <= num){
		return str;
	} else if (num <= 3){
		return str.substring(0,num) + "...";
	} else {
		return str.substring(0,num - 3) + "...";
	}
	return str;
}
