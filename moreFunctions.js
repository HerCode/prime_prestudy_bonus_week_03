var obj = function(){

  var i = 0;

  var add = function(j){
    i += j;
    return this;
  };

  var subtract = function(j){
    i -= j;
    return this;
  };

  var multiply = function(j){
    i *= j;
    return this;
  };

  var print = function(){
    console.log(i);
  };

  return {add:add, subtract:subtract, multiply:multiply, print:print};
};

var x = obj();

x.add(17).subtract(7).multiply(4).print();
//*console.log(x);

var obj2 = function(){

 	var i = 6;

  var add = function(j){
    i += j;
    return this;
  };

  var subtract = function(j){
    i -= j;
    return this;
  };

  var multiply = function(j){
    i *= j;
    return this;
  };

  var print = function(){
    console.log(i);
  };

  return {add:add, subtract:subtract, multiply:multiply, print:print};
};

var x = obj2();

x.add(17).subtract(7).multiply(4).print();
//*console.log(x);

var obj3 = function(){

 	var i = 8;

  var add = function(j){
    i += j;
    return this;
  };

  var subtract = function(j){
    i -= j;
    return this;
  };

  var multiply = function(j){
    i *= j;
    return this;
  };

  var print = function(){
    console.log(i);
  };

  return {add:add, subtract:subtract, multiply:multiply, print:print};
};

var x = obj3();

x.add(17).subtract(7).multiply(4).print();
console.log(x);
