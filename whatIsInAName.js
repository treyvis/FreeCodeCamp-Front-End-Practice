function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  for (i in collection){
  	var hasAllProps = true;
  	for (sourceKey in sourceKeys){
  		if (!collection[i].hasOwnProperty(sourceKeys[sourceKey]) ||
  			collection[i][sourceKeys[sourceKey]] !== source[sourceKeys[sourceKey]]){
  			hasAllProps = false;
  		}
  	}
  	if (hasAllProps === true){
  		arr.push(collection[i]);
  	}
  }
  return arr;
}
