function telephoneCheck(str) {
	var tests = [];
	tests.push(/^(1-|1 ){0,1}[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/); //Dashes
	tests.push(/^(1 |1){0,1}[(][0-9]{3}[)|)][0-9]{3}[-][0-9]{4}$/); //ParenDash
	tests.push(/^(1 ){0,1}[(][0-9]{3}(\) ){1}[0-9]{3}[-][0-9]{4}$/); //ParenSpaceDasg
	tests.push(/^(1 ){0,1}[0-9]{3}[ ][0-9]{3}[ ][0-9]{4}$/); //Spaces
	tests.push(/^[1]{0,1}[0-9]{10}$/); //NoSpaces

	for (i in tests){
		if (tests[i].test(str)) return true;
	}

	return false;
}
