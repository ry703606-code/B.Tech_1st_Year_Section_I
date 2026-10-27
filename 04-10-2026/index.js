// let age = 10;

// if (age >= 10) {
//     console.log("Age is greater than 10 year");
// }

// let marks = 72;
// if (marks > 90) {
//   console.log("Car");
// } else {
//   if (marks > 80) {
//     console.log("Bike");
//   } else {
//     if (marks > 70) {
//       console.log("abc");
//     }
//   }
// }

// if (marks > 90) {
//     console.log("a");
// }
// else if(marks > 80) {
//     console.log("b");
// }
// else {
//     console.log("c");
// }

// let day = 1;
// switch (day) {
//   case 1:
//     console.log("Monday1");
//     break;
//   case 2:
//     console.log("Monday2");
//     break;
//   case 3:
//     console.log("Monday3");
//     break;
//   case 4:
//     console.log("Monday4");
//     break;
//   case 5:
//     console.log("Monday5");
//     break;
//   default:
//     console.log("Default");
// }

// let age = 10;
// if (age >= 10) {
//     console.log("Age is greater than 10 year");
// }

// let age = 8;
// let result = age >= 10 ? "Abc" : "Xyz";
// console.log(result);

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// for (let i = 0; i < 10; i++){
//     console.log("Rohan");
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let arr = [2, 3, 4, 5];
// for (let val of arr) {
//   console.log(val);
// }

// let std = {
//   name: "Rohan",
//   id: "1",
// };

// for (let key in std) {
//   console.log(key);
// }

// if ("rohan") {
//   console.log("hii");
// }

// if (0) {
//     console.log("avc")
// }

// 2,3 -> black box/function -> 5

// function greet() {
//   console.log("Hii");
// }

// greet();
// greet();
// greet();
// greet();

// Function Declarations
// function add(a, b) {
//   console.log(a + b);
// }
// add(2, 3);
// add(5, 5);

// Function Expressions
// let add = function(a, b) {
//   console.log(a + b);
// }

// add(2, 3);

// parameters -> a,b
// function add(a, b) {
//   console.log(a + b);
// }

// argument -> 2,3/5,5
// add(2, 3);
// add(5, 5);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));
// console.log(add(5, 5));

// Default parameter
// function add(a = 5, b = 7) {
//   return a + b;
// }

// console.log(add());

// console.log(add(5, 5));

// Arrow function

// function add(a, b) {
//   return a + b;
// }

// let add = (a, b) => {
//   return a + b;
// };

// console.log(add(5, 5));

// Function Hoisting
// greet();

// function greet() {
//   console.log("Hii kaise hoo");
// }

// let name = "rohan";

// function greet() {
//   console.log("hii " + name);
// }

// greet();

// Scope chain
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     let b = 100;
//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }
//   inner();
// }

// outer();

// Closures
// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// counter();