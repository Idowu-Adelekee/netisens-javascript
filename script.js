"use strict";
// Function
// Objects method
// Ternary Operator

// Desctructuring
// Spread operator

// DOM MANIPULATION

// const netisens = "good";
// netisens = "bad";

// let netisens = "good";
// netisens = "bad";
// console.log(netisens);

// Types of Funcions in JS
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions

//////////////////////////////////// Function Declaration
///////////////////////////////
// function netises1(Joe) {
//   // const netisensWeb = "Nice Students";

//   return Joe;
//   return "Bad Student";
//   console.log("God is Great");
//   console.log("Satan is bad");
// }

// console.log(netises1("Nice Students"));

/////////////////////////
//  Function Expression
//////////////////////////
// const netisens2 = function (a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// };

// const answer = netisens2(2, 4, 6);
// console.log(answer);

// // console.log(netisens2(2, 4, 6));

////////////////////////////
// Arrow Function
///////////////////////////
// const netisen3 = (a, b, c) => a + b + c;
// console.log(netisen3(10, 5, 5));

////////////////////
//  WORKING WITH A METHOD INSIDE OF AN OBJECT
////////////////////////////////
// const objectNetisens = {
//   foundedIn: 2020,
//   location: "Akwa Ibom",
//   classes: ["Web dev", "Product design", "Data analysis", "Cyber security"],

//   students(s1, s2, s3) {
//     console.log(s1, s2, s3);
//   },
// };

// console.log(objectNetisens.foundedIn);
// objectNetisens.students("Ifeanyi", "Noble", "Uduak");

////////////////////////
//  TERNARY OPERATOR
////////////////////////

// const bad = if (true) {
//   console.log("Netisens is the best Uyo");
// } else {
//   console.log("Netisens is not!");
// }

// if (true) {
//   console.log("Netisens is the best Uyo");
// } else {
//   console.log("Netisens is not!");
// }

// const isItTrue = false
//   ? console.log("Netisens is the best Uyo")
//   : console.log("Netisens is not!");

// // Use case 1;

// const badAllowance = 33000;
// const goodAllowance = 77000;
// // console.log(goodAllowance);

// const idowuExpenses = 50000;
// console.log(idowuExpenses);

// const howIsIdowu =
//   idowuExpenses > goodAllowance ? "Idowu is broke" : "Idowu is rich";

// console.log(howIsIdowu);

////////////////////////////////
// DESTRUCTURING AN ARRAY
/////////////////////////////////

// const webDevStudents = [
//   "Ifeanyi",
//   "Noble",
//   "Christian",
//   "Uduak",
//   "Omodot",
//   "Ben",
// ];

// // The dinosaur way of doing it

// const s1 = webDevStudents[0];
// const s2 = webDevStudents[1];
// const s3 = webDevStudents[2];

// console.log(s1);

// // The modern way of doing it
// // Destructuring
// const [st1, , st2, st3, st4] = webDevStudents;

// console.log(st1);
// console.log(webDevStudents);

// console.log(st2);

///////////// THE USE CASE
///////////////////////
// const students = ["Shalewa", "Joshua", "Uduak", "Idowu", "Christian"];

// const allBrilliantStudents = function (brilliant1, brilliant2) {
//   const brilliantStudentsName = `The first student is ${brilliant1} the second student ${brilliant2}`;
//   console.log(brilliantStudentsName);
// };

// const [brilliant1, average, brilliant2, aboveAve] = students;

// allBrilliantStudents(brilliant1, brilliant2);

////////////////////////////////
// DESTRUCTURING AN OBJECT
/////////////////////////////////
// const webDevObjects = {
//   st1: "Uduak",
//   st2: "Christian",
//   st3: "Noble",
// };

// //[]
// const { st1, st3 } = webDevObjects;

// console.log(st1, st3);

// const arr = [4, 9, 23, 44];

// The Old way of unpacking an array;
// const badArr = [1, 2, 3, arr[0], arr[1]];

// console.log(badArr);

// The modern way of unpacking an array using the spread(...) operator;

// const goodArr = [1, 2, 3, ...arr];

// console.log(goodArr);

// const [first, second, ...rest] = goodArr;

// console.log(first, second);
// console.log(rest);

// const me = [
//   "Idowu",
//   "Uyo",
//   1998,
//   "Web Developer & Desiger",
//   "Uniabuja",
//   "Osun state",
// ];

// const me2 = ["University of Abuja", "Osun Sate"];

// const [firstName, place, ...noble] = me;

// console.log(firstName, place);
// console.log(noble);

// Brief Example of working with DOM

// const pageBackground = document.querySelector(".background");
// const clickButton = document.querySelector(".button1");

// console.log(pageBackground);
// console.log(clickButton);

// clickButton.addEventListener("click", function () {
//   pageBackground.style.backgroundColor = "#BEA000";

//   console.log("button");
// });

// console.log(window);

"use strict";

console.log("hi");

// THE DEFINITION OF DOM
// Document Object Model:  Structured representation of HTML Document allows JavaScript to acccess html elements and styles to manipulate them.

// console.log(document.documentElement);

// Function
