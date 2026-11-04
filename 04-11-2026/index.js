// function printHi() {
//   console.log("Hii kaise hoo?");
// }

// printHi();

// let x = function () {
//   console.log("Hii kaise hoo?");
// };

// x();

// function sum(x, y) {
//   console.log(x + y);
// }

// sum(2, 3);
// sum(4, 6);
// sum(9, 8);

// function sum(x, y) {
//   return x + y;
// }

// let z = sum(2, 3);
// console.log(z);

// function sum(x, y = 10) {
//   return x + y;
// }

// let z1 = sum(2, 3);
// let z2 = sum(2);
// console.log(z1);
// console.log(z2);

// let y = () => {
//   console.log("Hii");
// };

// y();

// function outer() {
//   let a = 10;

//   function inner() {
//     let b = 20;
//     console.log(a);
//     console.log(b);
//   }

//   inner();

//   console.log(a);
// }

// outer();

// function outer() {
//   let a = 10;

//   return function () {
//     a++;
//     console.log(a);
//   };
// }

// let fn = outer();

// fn();
// fn();
// fn();

// function greet(greetFn) {
//     greetFn();
// }

// function hello() {
//   console.log("Hello");
// }

// greet(hello);

// (function () {
//   console.log("Hello world");
// })();

// let a, b, c;
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

// [a,b, ...c] = arr1;
// console.log(a);
// console.log(b);
// console.log(c);

// const car = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// const car_more = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const mycar = { ...car, ...car_more };
// console.log(mycar);

// const student = {
//   name: "Raj",
//   age: 22,

//   display: function () {
//     console.log(this.name);
//     console.log(this.age);
//   },
// };

// student.display();

// const student = {
//   name: "Raj",
// };

// function introduce(city, course) {
//   console.log("My name is " + this.name);
//   console.log("I live in " + city);
//   console.log("I study " + course);
// }

// introduce.call(student, "Bareilly", "B.Tech");

// const student = {
//   name: "Raj",
// };

// function introduce(city, course) {
//   console.log("My name is " + this.name);
//   console.log("I live in " + city);
//   console.log("I study " + course);
// }

// introduce.apply(student, ["Bareilly", "B.Tech"]);

// const student = {
//   name: "Raj",
// };

// function introduce(city, course) {
//   console.log("My name is " + this.name);
//   console.log("I live in " + city);
//   console.log("I study " + course);
// }

// const newFunction = introduce.bind(student, "Bareilly", "B.Tech");

// newFunction();