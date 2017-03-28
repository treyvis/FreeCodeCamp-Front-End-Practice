function spinalCase(str) {
	var lowerToUpperRegEx = /[a-z][A-Z]/g;
	var subRegEx = lowerToUpperRegEx.exec(str);
	while (subRegEx){
		str = str.replace(subRegEx[0],subRegEx[0][0] + "-" + subRegEx[0][1]);
		subRegEx = lowerToUpperRegEx.exec(str);
	}
	return str.toLowerCase().trim().replace(/[ _]/g,"-");
}