// ============= 1. const vs let use =============
let x = "Zihad";
x = "Zihad Chowdhury" //changing the value
x = "Zihad Chowdhury Zim" //changing the value again
console.log(x); //return will be the last assigned value

const y = "Rahat";
// y = "Rahat Chowdhury" => //TypeError: Assignment to constant variable. As constant variable can't be changed.
console.log(y);

// ========== 2. arrow function with two variables ============

// declaring the function as "multiply" 
const multiply = (num1, num2) => (num1 + 2) * (num2 + 2);

// calling the "multiply" function 
const xyz = multiply(2, 3);

// return console 
console.log(xyz); //return will be 20

// ========== 3. arrow function with single variable ===========

// declaring the function as "division" 
const division = x => x / 5; //single parameter divided by 5

// calling the "division" function 
const xByFive = division(25);
// return console 
console.log(xByFive); //return will be 5

// ========== 4. arrow function with three variables ===========

const multiplyThreeVars = (a, b, c) => a * b * c; // three parameter function named "multiplyThreeVars"
const abc = multiplyThreeVars(2, 3, 5); // put the funtion into another variable called "abc"
console.log(abc); //return will be 30

// ========== 5. multi-line arrow function ============

const multiArrow = (m, n) => {
    const num1 = m + 2;
    const num2 = n + 2;
    return num1 * num2;
};

const mn = multiArrow(2, 3);
console.log(mn); //return will be 30

// ============= 6. uses of template string ==============
// dynamic use of a variable in a template string 
const myName = "Zihad Chowdhury";
const str = `name: ${myName}:, address: Savar, Dhaka; age: 27; batch: 4;`;

console.log(str);

// dynamic use of variable and object properties in a template string 
const product = {
    brand: "Nokia",
    model: 4.2,
    color: "black",
    price: 13000,
    os: "android",
    version: 11,
    year: 2020.
};

const str2 = `My name is ${myName}. I bought a ${product.brand} ${product.os} phone in ${product.year}. The phone's price is ${product.price} and color is ${product.color}.`

console.log(str2);

// ============== 7. uses of spread operator ================
const arr = [20, 13, 85, 41, 32, 100, 999]

console.log(arr); // return => numbers inside an array
console.log(...arr); // return => only numbers/elements
console.log(Math.max(...arr)); // maximum number of the array
console.log(Math.min(...arr)); // minimum number of the array

const arr2 = ["Zihad", "Chowdhury", "Zim", "Rahat", "Zisan"];

console.log(arr2); // return => strings inside an array
console.log(...arr2); // return => only names/elements 

// =============== 8. uses of map =================
// uses of map

// =============== 9. uses of forEach =============
// uses of forEach

// =============== 10. uses of filter =============

// =============== 11. uses of find ===============
// uses of find 

// destructuring 
// default value
// nested object
// optional chaining