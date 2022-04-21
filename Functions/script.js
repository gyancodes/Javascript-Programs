function addTwoNum(num1,num2){
    sum = num1 + num2;
    console.log(sum)
}
addTwoNum(5,6)
console.log(typeof(addTwoNum))


function wish(name){
    user = "Hello, You have logged in " + name
    console.log(user)
}
wish("Gyan")


function sum(x,y){
    sum = x + y
    return(x+y)
    
}
sum(19,20)
console.log(sum)




const userLoggedIn = 20;

if(userLoggedIn == 20){
    function verify(name){
       user = "You are logged in " + name
       console.log(user)
    }
verify("Gyan")
}
if(userLoggedIn != 20){
    console.log("You are not logged in")
}


verify("Prince")

const userName = "Gyan";
function showMessage(){
    const message = "Hi, " + userName;
    alert(message)
}
showMessage(); 