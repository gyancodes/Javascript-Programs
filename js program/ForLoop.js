// for(let i=1;i<10;i++){
//     console.log("Hello World");
// }

// for(let i=1; i<5;i++){
//     console.log("Hello World",i);
// }

// for(let i=1;i<=5;i++){
//     if(i % 2 !==0) console.log(i);
// }

// for(let i=5;i>=1;i--){
//     if(i % 2 !==0) console.log(i);
// }

;

// for(let i=5;i<51; i =i+5){
//     console.log(i)
// }

// for(let i=50; i>4; i =i-5){
//     console.log(i);
// }

// for(let i = 0; i <10 ; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// for (let i = 0; i < 10^10; i++) {
//     console.log(i);
    
// }

function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };
  
  // x gets the value "Honda"
  const x = mycar.make;
  
  // the make property is changed by the function
  myFunc(mycar);
  // y gets the value "Toyota"
  const y = mycar.make;
  