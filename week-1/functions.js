//This is simple function example that takes two numbers.

function Findsum(a, b){
    return a + b;
}


let value = Findsum(2,5);
let value2 = Findsum(3,4);


console.log(value);
console.log(value2);







//This is a function callback example. Where you can call a function inside another function.
function sum(num1, num2, callfunc){
    let result = num1 + num2;
    callfunc(result);
}


function displaySum(data){
    console.log("The sum is: " + data);
}

function sumDisplay(data){
    console.log("The sum is: " + data);
}

let ans = sum(12,5, displaySum);