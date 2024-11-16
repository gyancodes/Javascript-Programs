// Global Scope
var globalVar = "I am a global variable";

function myFunction() {
    // Function Scope
    var functionVar = "I am a function variable";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible

    if (true) {
        // Block Scope
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible
    }

    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

myFunction();

// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
console.log(globalVar); // Accessible