// // Objects

// let car = {
//     name: 'Tata',
//     price: '10 Lac'

// }

// for(let key in car){
//     console.log(key, car[key]);
// }

// // Arrays

// let cars = ["Tata", "Mahindra", "Tesla"]
// for(let index in cars){
//     console.log(index, cars[index])

// }


const myObject = {
    js: "Javascript",
    cpp: "C++",
    ks: "Kotlin",
    er: "Erlang"
}

for (const key in myObject) {
//    console.log(myObject[key]);
   
}
 



// const car = ["Ferrari", "Toyota", "BMW", "Tata"]

// for (const key in car) {
//    console.log(car[key]);
   
// }


const lang = ["Java", "Javascript", "Kotlin", "C++", "Ruby","Typescript"];

// lang.forEach((lang) => {
//     console.log(lang)
// })

function printMe(item, index,arr){
    console.log(item, index, arr)
}

lang.forEach(printMe)