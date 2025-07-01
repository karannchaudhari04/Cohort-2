//This is simple function example that takes two numbers.

function Findsum(a, b){
    return a + b;
}


let value = Findsum(2,5);
let value2 = Findsum(3,4);


console.log(value);
console.log(value2);







//This is a function callback example. Where you can call a function inside another function.
function arithmatic(num1, num2, callfunc){
    let result = callfunc(num1, num2);
    console.log("The result is: "+result);
}


function sum(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

let ans = arithmatic(12,15, sum);