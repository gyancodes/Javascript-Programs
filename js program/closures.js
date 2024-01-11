function z() {
  var b = 700;
  function x() {
    var a = 100;
    function y() {
      console.log(a, b);
    }
    //   return y;
    y();
  }
  x();
}
z();
// var z = x();
// console.log(z);
// z();



/**
Uses of closures:
1. Module design pattern
2. Currying
3. Function like once
4. Memoize
5. Maintaining state in async world
6. setTimeouts
7. Iterators 
 */