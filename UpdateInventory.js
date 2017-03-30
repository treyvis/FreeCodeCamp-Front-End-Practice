function updateInventory(curInv, newInv) {
    // All inventory must be accounted for or you're fired!

    var curInvIndex = [];
    for (i in curInv){
    	curInvIndex.push(curInv[i][1]);
    }

    for (i in newInv){
    	if (curInvIndex.indexOf(newInv[i][1]) !== -1){
    		curInv[curInvIndex.indexOf(newInv[i][1])][0] += newInv[i][0];
    	} else {
    		curInv.push(newInv[i]);
    	}
    }
    //Sort with compare function
    curInv.sort(function(arr1,arr2){
    	if (arr1[1] < arr2[1]){
    		return -1;
    	}
    	if (arr1[1] > arr2[1]){
    		return 1;
    	}
    	return 0;
    });
    return curInv;
}