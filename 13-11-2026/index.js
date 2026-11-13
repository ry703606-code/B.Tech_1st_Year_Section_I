// let student1Name = "Rahul";
// let student1Age = 20;
// let student1Course = "MERN";

// let student2Name = "Aman";
// let student2Age = 21;
// let student2Course = "Java";

// let student3Name = "Priya";
// let student3Age = 19;
// let student3Course = "Python";

// console.log(student1Name);
// console.log(student2Name);
// console.log(student3Name);

// Using Object
// let student1 = {
//     name: "Rahul",
//     age: 20,
//     course: "MERN"
// };

// let student2 = {
//     name: "Aman",
//     age: 21,
//     course: "Java"
// };
// console.log(student1.name);
// console.log(student2.name);

// Class and Object
// class Student {
//     constructor(name, age, course) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Course: ${this.course}`);
//     }
// }
// let student1 = new Student("Rahul", 20, "MERN");
// let student2 = new Student("Aman", 21, "Java");
// student1.displayDetails();
// student2.displayDetails();

// Constructor Functions
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const student1 = new Student("Aman", 20);
// const student2 = new Student("Rahul", 21);
// console.log(student1.name);
// console.log(student2.name);

// Prototype-Based Programming
// const person = {
//   greet() {
//     console.log("Hello!");
//   },
// };
// const student = Object.create(person);
// student.name = "Raj";
// student.greet();

// Prototype Chain
// const animal = {
//   eat() {
//     console.log("Eating...");
//   },
// };
// const dog = Object.create(animal);
// dog.bark = function () {
//   console.log("Barking...");
// };
// dog.bark();
// dog.eat();

// ES6 Classes / Constructors
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   study() {
//     console.log(this.name + " is studying");
//   }
// }
// const student1 = new Student("Rohan", 21);
// console.log(student1.name);
// student1.study();

// Instance Members and Static Members
// class Student {
//   static college = "R.R Institute";
//   static showCollege() {
//     console.log("Welcome to " + Student.college);
//   }
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   study() {
//     console.log(this.name + " is studying");
//   }
// }
// let student1 = new Student("Rahul", 21);
// let student2 = new Student("Amit", 22);
// console.log(student1.name);
// console.log(student2.name);
// console.log(student1.age);
// console.log(student2.age);
// student1.study();
// student2.study();
// Student.showCollege();

// Getters and Setters / Private Class Fields
// class BankAccount {
//     #balance = 10000;
//     getBalance() {
//         return this.#balance;
//     }
//     deposit(amount) {
//         this.#balance += amount;
//     }
// }
// const account = new BankAccount();
// account.deposit(2000);
// console.log(account.getBalance());
// console.log(account.#balance);

// Inheritance
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   showDetails() {
//     console.log(this.name, this.salary);
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, team) {
//     super(name, salary);
//     this.team = team;
//   }
//   manageTeam() {
//     console.log("Managing team:", this.team);
//   }
// }
// const manager = new Manager("Raj", 50000, 10);
// manager.showDetails();
// manager.manageTeam();

// Polymorphism
// class Animal {
//   sound() {
//     console.log("Animal makes a sound");
//   }
// }
// class Dog extends Animal {
//   sound() {
//     console.log("Dog barks");
//   }
// }
// class Cat extends Animal {
//   sound() {
//     console.log("Cat meows");
//   }
// }
// const dog = new Dog();
// const cat = new Cat();
// dog.sound();
// cat.sound();

// Encapsulation
// class BankAccount {
//     #balance = 10000;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }
// const account = new BankAccount();
// account.deposit(2000);
// console.log(account.getBalance());
// console.log(account.#balance);

// Abstraction
// class Car {
//   start() {
//     this.#startEngine();
//     console.log("Car started");
//   }
//   #startEngine() {
//     console.log("Engine is starting...");
//   }
// }
// const car = new Car();
// car.start();

// ES Modules — import and export
// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }
// import { add, subtract } from "./math.js";
// console.log(add(10, 20));
// console.log(subtract(20, 10));

// Design Principles for Scalable JavaScript Applications
// 1.DRY – Don't Repeat Yourself
// 2.SRP – Single Responsibility Principle
// 3.Reusability
