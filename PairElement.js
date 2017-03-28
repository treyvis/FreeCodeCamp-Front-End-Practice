function pairElement(str) {
	var pairArray = [];
	var base = ["A","T","C","G"];
	var pair = ["T","A","G","C"];
	for (i in str){
		var basePair = [];
		basePair.push(str[i]);
		basePair.push(pair[base.indexOf(str[i])]);
		pairArray.push(basePair);
	}
	return pairArray;
}