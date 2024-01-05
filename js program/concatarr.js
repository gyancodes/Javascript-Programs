var arr =["Tata","Tesla","Ferrari","Lamborghini","Ducati"];

var arr2 = arr.concat("BMW")

console.log(arr2)



window.DOMTokenList.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

window.HTMLCanvasElement.prototype.getContext = function () {
    
}