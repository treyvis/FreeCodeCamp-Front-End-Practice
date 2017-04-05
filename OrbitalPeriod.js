function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(val){
  	var orbitalPeriodObj = {};
  	orbitalPeriodObj.name = val.name;
  	orbitalPeriodObj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(val.avgAlt + earthRadius,3) / GM));
  	return orbitalPeriodObj;
  });
}