function addTogether() {
	if (arguments.length === 2){
		if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") return undefined;
		return arguments[0] + arguments[1];
	} else if (typeof arguments[0] === "number"){
		var firstArg = arguments[0];
		return function (){
			if (typeof arguments[0] !== "number") return undefined;
			return arguments[0] + firstArg;
		};
	}
	return undefined;
}