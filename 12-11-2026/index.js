// Object

// let studentName = "Rahul";
// let studentAge = 21;
// let studentCourse = "B.Tech";
// let studentCity = "Bareilly";

// 1st way to create object
// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "B.Tech",
//   city: "Bareilly",
// };
// console.log(student);

// 2nd way to create object
// let student = new Object();
// student.name = "Rahul";
// student.age = 21;
// student.course = "B.Tech";
// console.log(student);

// 1st way to Access value of object
// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "B.Tech",
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// 2nd way to Access value of object
// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "B.Tech",
// };
// console.log(student["name"]);
// console.log(student["age"]);

// Adding New Properties
// let student = {
//   name: "Rahul",
//   age: 21,
// };
// console.log(student);
// student.course = "B.Tech";
// student.city = "Bareilly";
// console.log(student);

// Updating Existing Properties
// let student = {
//   name: "Rahul",
//   age: 21,
// };
// console.log(student.age);
// student.age = 22;
// console.log(student.age);

// Deleting Properties
// let student = {
//   name: "Rahul",
//   age: 21,
//   city: "Bareilly",
// };
// console.log(student);
// delete student.city;
// console.log(student);

// Nested Objects
// let student = {
//   name: "Rahul",
//   age: 21,
//   address: {
//     city: "Bareilly",
//     state: "Uttar Pradesh",
//     pincode: 243001,
//   },
// };
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.address.state);

// Creating Methods Inside Objects
// let calculator = {
//   add(a, b) {
//     return a + b;
//   },

//   multiply(a, b) {
//     return a * b;
//   },

//   div(a, b) {
//     return a / b;
//   },
// };
// console.log(calculator.add(10, 20));
// console.log(calculator.multiply(5, 4));

// this Keyword in Objects
// let student = {
//   name: "Rahul",
//   age: 21,

//   introduce() {
//     // console.log("My name is " + name);
//     console.log("My name is " + this.name);
//     console.log("My age is " + this.age);
//   },
// };
// student.introduce();

// Built-in Object Methods
// Object.keys()
// let student = {
//   name: "Rahul",
//   age: 21,
//   city: "Bareilly",
// };

// console.log(Object.keys(student));

// Object.values();
// let student = {
//   name: "Rahul",
//   age: 21,
//   city: "Bareilly",
// };

// console.log(Object.values(student));

// Object Destructuring
// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "B.Tech",
//   city: "Bareilly",
// };
// let name = student.name;
// let age = student.age;
// console.log(name);
// console.log(age);

// let { name, age } = student;
// console.log(name);
// console.log(age);

// Spread Syntax with Objects
// let student = {
//   name: "Rahul",
//   age: 21,
// };
// let newStudent = { ...student };
// console.log(newStudent);

// Shallow Copy
// let student = {
//   name: "Rahul",
//   address: {
//     city: "Bareilly",
//   },
// };
// let newStudent = { ...student };
// newStudent.name = "Amit";
// newStudent.address.city = "Delhi";
// console.log(student.name);
// console.log(student.address.city);

// Deep Copy
// let student = {
//   name: "Rahul",
//   address: {
//     city: "Bareilly",
//   },
// };
// let newStudent = structuredClone(student);
// newStudent.address.city = "Delhi";
// console.log(student.address.city);
// console.log(newStudent.address.city);

// Optional Chaining
// let student = {
//   name: "Rahul",
// };

// console.log(student.address.city);
// console.log(student.address?.city);

// Computed Properties
// let property = "name";
// let student = {
//   [property]: "Rahul",
//   age: 21,
// };
// console.log(student);

// JSON -> JavaScript Object Notation
// Name: Rahul;
// Age: 21;
// Course: B.Tech;

// {
//     "name": "Rahul",
//     "age": 21,
//     "course": "B.Tech"
// }

// JSON Data Type -> String, Number, Boolean, Array, Object, Null
// {
//     "student": {
//         "name": "Rahul",
//         "age": 21,
//         "course": "B.Tech",
//         "isStudent": true,
//         "skills": ["Java", "JavaScript", "React"],
//         "address": {
//             "city": "Bareilly",
//             "state": "Uttar Pradesh"
//         },
//         "phone": null
//     }
// }

// JSON.stringify();
// let student = {
//   name: "Rahul",
//   age: 21,
//   course: "B.Tech",
// };
// console.log(student);
// console.log(typeof student);
// let jsonData = JSON.stringify(student);

// console.log(jsonData);
// console.log(typeof jsonData);

// JSON.parse();
// let jsonData = '{"name":"Rahul","age":21,"course":"B.Tech"}';
// let student = JSON.parse(jsonData);

// console.log(student);
// console.log(typeof jsonData);
// console.log(student);
// console.log(typeof student);

// Best Practices for Data Manipulation
// 1. Use const for Unchanged References
// 2. Validate Data Before Using It
// 3. Handle JSON Errors Using try...catch'
// 4. Avoid Directly Modifying Original Objects
// 5. Use Meaningful Property Names
