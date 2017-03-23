
function bouncer(arr) {
	return arr.filter(function (value){
		if (value) return true;
		return false;
	});
}