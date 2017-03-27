function translatePigLatin(str) {
	var vowels = ["a","e","i","o","u","y"];
	if (vowels.indexOf(str[0]) !== -1 && str[0] !== 'y'){
		return str + "way";
	}
	for(index in str){
		if(!(index == 0 && str[index] === "y")){
			if(vowels.indexOf(str[index]) !== -1){
				return str.slice(index) + str.substring(0,index) + "ay";
			}
		}
	}
	return str;
}