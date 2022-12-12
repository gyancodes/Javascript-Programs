function hello() {
    console.log("Welcome");
}
hello()


let obj = {
    car: "Ferrari",
    make: 2022,
    func: function myCar(model) {
        console.log("The car model is " + model);
    }
}

document.addEventListener("click", function click() {
    console.log("Clicked");

    let conf = confirm("Are you sure?");
    console.log(conf)

});

let arr = [34,21,22];
console.log(arr)


let mobj = {
    a:this,
    myfunc : function (number){
        console.log(this);
    }
}
mobj.myfunc();
console.log(mobj.a);



setTimeout(() => {
    console.log("callback")

}, 3000);

console.log("callback invoked")