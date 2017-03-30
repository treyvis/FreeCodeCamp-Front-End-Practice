function checkCashRegister(price, cash, cid) {
  var change = [];
  var changeDue = cash - price;
  var currencyValue = [0.01,0.05,0.10,0.25,1,5,10,20,100];
  var totalCash = 0;
  for (i in cid){
    totalCash += cid[i][1];
  }
  if (changeDue > totalCash){
    return "Insufficient Funds";
  } else if (changeDue === totalCash){
    return "Closed";
  } else {
    for (i = cid.length - 1; i >= 0; i--){
      var currencyType = [cid[i][0],0];
      while(changeDue % currencyValue[i] < changeDue && cid[i][1] > 0){
        cid[i][1] -= currencyValue[i];
        currencyType[1] += currencyValue[i];
        changeDue -= currencyValue[i];
      }
      if (currencyType[1] !== 0){
        change.push(currencyType);
      }
    }
    if(changeDue < 0.01 && changeDue > 0){
      if (change[change.length - 1][0] === "PENNY"){
        change[change.length - 1][1] += 0.01;
        changeDue -= 0.01;
      } else {
        change.push(["PENNY",0.01]);
        changeDue -= 0.01;
      }
    }
    if (changeDue > 0) {
      return "Insufficient Funds";
    }
  }
  return change;
}
