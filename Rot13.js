function rot13(str) { // LBH QVQ VG!
	var decoded = "";
	for (var character in str){
		var charCode = str.charCodeAt(character);
		if (charCode > 64 && charCode < 91){
			if (charCode < 78){
				charCode += 13;
			} else {
				charCode -= 13;
			}
			decoded += String.fromCharCode(charCode);
		} else {
			decoded += str[character];
		}
	}  
	return decoded;
}