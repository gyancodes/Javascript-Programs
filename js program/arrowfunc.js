const myfunc = (number) => {
    console.log("The number is"+ this)
}
myfunc()



let myobj = {
    a: this,
    myfunc : (number) =>{
        console.log("The number is"+ this)
    }
}
myobj.myfunc()
console.log(myobj.a)