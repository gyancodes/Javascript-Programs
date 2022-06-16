const find_missing = function(input){
    let n = input.length + 1;
    
    let sum = 0;
    for(let i in input){
        sum += input[i];

    }
    return Math.foor((n * (n+1)) /2) - sum;

};
