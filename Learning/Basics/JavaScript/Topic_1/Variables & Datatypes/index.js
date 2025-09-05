console.log('Variables & Datatypes');

// Variables are the containers to store data values.
// In JavaScript, we can declare variables using var, let, or const keywords.
// var is function-scoped or globally-scoped, we can re-declare and update it.
// let is block-scoped, we can update it but cannot re-declare it in the same scope.
// const is block-scoped, we cannot update or re-declare it. It must be initialized during declaration.
var name = 'Prince Bhatt';
let age = 22;
const isEmployed = true;
console.log(name, age, isEmployed);

// Data types in JavaScript can be categorized into two main types: Primitive and Non-Primitive (Reference) types.
// Primitive data types include:
// 1. String: Represents textual data enclosed in single quotes, double quotes, or backticks.
let city = 'Vidisha';
let greeting = 'Hello, World!';
let templateLiteral = `My name is ${name}`;
console.log(city, greeting, templateLiteral);

// 2. Number: Represents both integer and floating-point numbers.
let integerNum = 42;
let floatNum = 3.14;
console.log(integerNum, floatNum);

// 3. Boolean: Represents logical entities and can have two values: true or false.
let isStudent = false;
console.log(isStudent);

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedVar;
let un = undefined;
console.log(undefinedVar);
console.log(un);

// 5. Null: Represents the intentional absence of any object value.
let nullVar = null;
console.log(nullVar);

// 6. Symbol: Represents a unique identifier, often used as object property keys.
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); // false, as each symbol is unique

// Non-Primitive (Reference) data types include:
// 1. Object: Represents a collection of key-value pairs.
let person = {
  name: 'Prince Bhatt',
  age: 23,
  isEmployed: true,
};

console.log(person);

// 2. Array: Represents an ordered list of values.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 3. Function: Represents a block of code designed to perform a particular task.
function greet() {
  return 'Hello!';
}
console.log(greet());

// JavaScript is a dynamically typed language, meaning we don't need to specify the data type of a variable when declaring it. The type is determined at runtime based on the assigned value.
let dynamicVar = 'I am a string';
console.log(typeof dynamicVar);
dynamicVar = 100;
console.log(typeof dynamicVar);
dynamicVar = true;
console.log(typeof dynamicVar);
