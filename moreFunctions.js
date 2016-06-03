var obj = function(){

  var i = 0;

  var add = function(j){
    console.log('adding', j);
    i += j;
    return i;
  };

  var subtract = function(j){
    console.log('subtracting', j);
    i -= j;
    return i;
  };

  var multiply = function(j){
    console.log('multiplying', j);
    i *= j;
    return i;
  };

  var print = function(){
    console.log('i',i);
  };

  return {add:add, subtract:subtract, multiply:multiply, print:print};
};

var x = obj();

x.add(x.multiply(x.subtract(4)));

x.print();
