/*
@gyancodes
@The Scope Chain & Lexical Environment
@Date: 09/01/2024

*/

function a(){
    // console.log(b);
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

// var b = 10;
a();