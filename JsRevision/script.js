// console.log("Hello World")
// console.log(a);
// var a = 10;

// let ans = 0

// for(let i = 0; i <= 100; i = i + 1){
//     ans = ans + i
// }

// console.log(ans);

// const ages = [21, 22, 23 ,24, 25]

// for(let i = 0; i < ages.length;  i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
        
//     }
// }


// const personArray = ["mohit", "aman", "priya"];
// const genderArray = ["male", "male", "female"];

// const numberOfUsers = personArray.length;

// for(let i = 0;  i < numberOfUsers; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
        
//     }
// }

// const allUsers = [{
//     firstName: "gyan",
//     gender:  "male"
// },{
//     firstName: "aditya",
//     gender: "male"


// },{ firstName: "volvo",
//     gender: "female"

// }]

// for(let i = 0; i < allUsers.length; i++){
//     if(allUsers[i].gender == "male"){
//         console.log(allUsers[i]["firstName"]);
        
//     }
// }

// Callbacks

function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result)
}

function displayResult(data){
    console.log("Result of the sum is :" + data);
}

function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

const ans = sum(1, 2, displayResult); //callbacks


setTimeout()