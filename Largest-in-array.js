function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    var largest = arr[i][0];
    for (var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > largest){
      largest = arr[i][j];
      }
    }
    newArr.push(largest);
  }
  return newArr;
}