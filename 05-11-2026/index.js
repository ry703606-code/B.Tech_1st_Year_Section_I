// Java Array
// int[] arr = new int[10];

// let arr1 = [2, 3, 4, 5, 6, "Rohan", 9.5];
// console.log(arr1[5]);

// let arr2 = new Array(2, 3, 4, 65, 7, 82, 2);

// console.log(arr1);

// console.log(arr2);

// unshift(), push()
// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// arr1.push(100);
// console.log(arr1);

// arr1.unshift(500);
// console.log(arr1);

// shift(), pop()
// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

//  slice()
// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// console.log(arr1);

// let tempArr = arr1.slice(1, 6);
// console.log(tempArr);

// concat();
// let arr1 = ["Raj", 4, 5.6];
// let arr2 = ["Arun", 23, 789];

// let arr3 = arr1.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// includes();
// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// let ans = arr1.includes(10);

// console.log(ans);
// console.log(arr1.includes(10));
// console.log(arr1.includes(5));

// reverse()
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = arr1.reverse();

// console.log(arr2);

// sort()
// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// let arr2 = arr1.sort();

// console.log(arr2);

// indexOf(), lastIndexOf()
// let arr1 = [2, 3, 4, 5, 6, 5, 5, 1, 2, 4, 5];

// let n = arr1.indexOf(5);
// let m = arr1.lastIndexOf(5);

// console.log(n);
// console.log(m);

// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// let n = arr1.length;
// console.log(n);

// let arr1 = [2, 3, 4, 5, 6, 1, 2, 4, 5];
// let n = arr1.length;
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);

// for (let i = 0; i < n; i++) {
//   console.log(arr1[i]);
// }

// for (let i = n - 1; i >= 0; i--) {
//   console.log(arr1[i]);
// }

// forEach();
// let arr1 = [2, 3, 4];

// arr1.forEach((val) => {
//   console.log(val);
// });

// map()
// let arr1 = [2, 3, 4];

// let temArr = arr1.map((val) => {
//   return val * 2;
// });

// console.log(arr1);
// console.log(temArr);

// Filter
// let arr1 = [2, 3, 4];

// let arr2 = arr1.filter((num) => {
//   return num > 2;
// });

// console.log(arr1);
// console.log(arr2);

// Reduce
// let arr1 = [2, 3, 4];
// let arr2 = arr1.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(arr1);
// console.log(arr2);

// Linear Search
// let numbers = [10, 20, 30, 40, 50];
// let target = 30;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === target) {
//     console.log("Element found at index:", i);
//     break;
//   }
// }

// Binary Search
// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let target = 50;
// let start = 0;
// let end = numbers.length - 1;
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   if (numbers[mid] === target) {
//     console.log("Element found at index:", mid);
//     break;
//   } else if (numbers[mid] < target) {
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

// #. Multidimensional Arrays

// let students = [
//   ["Rahul", 85, 90],
//   ["Amit", 78, 88],
//   ["Priya", 92, 95],
// ];

// console.log(students);

// Accessing Elements
// console.log(students[0][0]);
// console.log(students[0][1]);
// console.log(students[1][0]);
// console.log(students[2][2]);

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

// Array Destructuring
// let numbers = [10, 20, 30];

// let [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);