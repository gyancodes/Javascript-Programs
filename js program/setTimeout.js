function x() {
  var i = 1;
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    },i * 1000);
  }
  
  console.log("Hello World");
}

x();

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();
