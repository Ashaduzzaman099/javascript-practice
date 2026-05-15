// Print "Hello, World!" to the console
console.log("Hello World");

// Assign Variable that change the value
let num1 = 23;
let name = "Ashik";
let isActive = true;
// Assign Variable that not change the value
const number2 = 20;

// Array
const array1 = [3, 4, 6, 10, 1, 2, 7];
array1.map((list) =>{
    console.log(list);
})
// Object
let UserDetails = {
    name : "Ashik",
    age : 26,
    email : "ashik@gmail.com"
}

// Using forEach to iterate over the array and print each fruit
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruits.map((fruit) => {
    console.log(fruit);
})

// Shorter way to write a function using arrow function syntax
let a = 45;
let b = 5;
let addition = (a, b) => a+b;
console.log("Total: "+ addition(a, b));


