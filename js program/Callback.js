
// Callback function is a function that is passed to another function as a parameter and the callback function is called inside the function.

// code for callback function

function doSomethingAsync(callback){
    setTimeout(function(){
        callback('done');
    }, 3000);

}

doSomethingAsync(function(result){
    console.log(result);
})