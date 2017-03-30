function truthCheck(collection, pre) {
	for(i in collection){
		if (!collection[i][pre]){
			return false;
		}
	}
  return true;
}