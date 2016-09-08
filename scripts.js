function addIt(num){
  num = num + 2;
  return num;
}

function squareIt(num){
  num = num * num;
  return num;
}

function tripleIt(num){
  num = num * 3;
  return num;
}

var numResult = addIt(squareIt(tripleIt(2)));

console.log(numResult);
