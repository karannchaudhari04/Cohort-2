// This is a simple JavaScript program to demonstrate basic syntax and operations
console.log("Hello World");

//This is variable declaration and initialization
let FirstName = "Karan";
let LastName = "Chaudhari";
let age = 20

// This is a conditional statement in JavaScript
if(age > 18){
    console.log("Hello "+ FirstName +" "+ LastName+" From a coder")
}
else{
    console.log(FirstName+" is teeneger")
}
let answer = 0;
let i = 0;

for(i=0; i<=1000; i++){
    answer = answer + i;
}
console.log(answer);


// This is a simple program to find even numbers and largest number in an array
let num = [1,2,3,4,5,6,7,8,9,0];

for(let i=0; i<=num.length; i++){
    if(num[i] %2 == 0 ){
    console.log(num[i]);
}
}


const largest = Math.max(...num);
console.log("Largest number of array is "+largest);

//This is simple object in JavaScript
let persons = [{
    FirstName: "Karan",
    age: 20,
    gender: "male",
},{
    FirstName: "Rahul",
    age: 20,
    gender: "male",
},{
    FirstName: "Saloni",
    age: 20,
    gender: "female",
},
{
    FirstName: "Jyoti",
    age: 20,
    gender: "female",
}];

for(let i=0; i<persons.length; i++){
    if(persons[i]["gender"] == "male")
    {
        console.log("Hello "+ persons[i]["FirstName"] + " from a coder");
    }
}