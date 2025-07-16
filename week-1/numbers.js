// Function to demonstrate parseInt

function parseIntExample(str) {
    console.log("Original String: " + str);
    console.log("Parsed Integer: " + parseInt(str));
    console.log("");
}
parseIntExample("123abc");

// Simple demonstrate of parseInteger

console.log(parseInt("123abc"));
console.log(parseInt("123.24"));
console.log(parseInt("abc123"));

// Function to demonstrate parseFloat
function parseFloatExample(str) {
    console.log("Original String: " + str);
    console.log("Parsed Float: " + parseFloat(str));
    console.log("");
}
parseFloatExample("123.45abc");

// Simple demonstrate of parseFloat
console.log(parseFloat("123.45abc"));
console.log(parseFloat("123.45"));
console.log(parseFloat("abc123.45"));


const array = [1, 2, 3, 4, 5];
array.push(6);
console.log("Array after push: " + array);
array.pop();
console.log("Array after pop: " + array);
array.unshift(0);
console.log("Array after unshift: " + array);
array.shift();
console.log("Array after shift: " + array);


// concatenate two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);
console.log("Concatenated Array: " + concatenatedArray);

// forEach loop to iterate over an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("Number: " + number);
    
});
