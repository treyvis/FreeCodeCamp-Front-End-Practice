function sym(args) {
	var argsArray = Array.from(arguments);
	var symDif = function(acc, val, index, arr){
		var difArray = [];
		for(i in acc){
			if(val.indexOf(acc[i]) === -1 && difArray.indexOf(acc[i]) === -1){
				difArray.push(acc[i]);
			}
		}
		for(i in val){
			if(acc.indexOf(val[i]) === -1 && difArray.indexOf(val[i]) === -1){
				difArray.push(val[i]);
			}
		}
		return difArray;
	};
	return argsArray.reduce(symDif);
}

