// Function to get the length of a string
function getLenth(str) {
   console.log("Original String: " + str);
   console.log("Length: "+str.length);
   console.log("");
}
getLenth("Hello, World!");

// Function to find the index of a character in a string
function indexOF(str, char) {
   console.log("Original String: " + str);
   console.log("Index of '" + char + "': " + str.indexOf(char));
   console.log("");
}
indexOF("Hello, World!", "o");

// Last index of a character in a string
function lastindexOF(str, char) {
   console.log("Original String: " + str);
   console.log("Index of '" + char + "': " + str.lastIndexOf(char));
   console.log("");
}
lastindexOF("Hello, World!", "o");

// Function to get slice of a string
function slice(str, start, end) {
   console.log("Original String: " + str);
   console.log("Slice String: "+ str.slice(start, end));
   console.log("");
}   
slice("Karan Chaudhari", 0, 5);

// Function to get substring of a string
function substring(str, start, length) {
   console.log("Original String: " + str);
   console.log("Substring: "+ str.substr(start,length));
   console.log("");
}
substring("Karan Chaudhari", 2, 5);

//Function to replace a character in a string
function replace(str, oldChar, newChar) {
   console.log("Original String: " + str);
   console.log("Replaced String: "+ str.replace(oldChar, newChar));
   console.log("");
}
replace("Karan Chaudhari", "K", "V");

// Function to split a string into an array
function Strsplit(str, separator) {
   console.log("Original String: " + str);
   console.log("Split String: " + str.split(separator));
   console.log("");
}

Strsplit("www.google.com", ".");

// Function to trim whitespace from a string
function trim(str) {    
   console.log("Original String: " + str);
   console.log("Trimmed String: " + str.trim());
   console.log("");
}
trim("   Hello, World!   ");

// Function to convert a string to uppercase
function toUpperCase(str) {
   console.log("Original String: " + str);
   console.log("Uppercase String: " + str.toUpperCase());
   console.log("");
}  
toUpperCase("Hello, World!");

// Function to convert a string to lowercase
function toLowerCase(str) {     
   console.log("Original String: " + str);
   console.log("Lowercase String: " + str.toLowerCase());
   console.log("");
}   
toLowerCase("Hello, World!");