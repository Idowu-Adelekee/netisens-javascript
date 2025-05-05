"use strict";

// console.log("Hello world");

// // THE 'this' KEYWORD

// console.log(this);

// const webStudent = {
//   name: "uduak",
//   age: "26",

//   webStudentFun() {
//     console.log("I'm inside an object");

//     console.log(this);
//   },
// };

// const designStudent = {
//   name: "Idara",
//   age: "24",
//   // gender: "female",
// };

// designStudent.gender = "Female";

// designStudent.webStudentObj = webStudent.webStudentFun;

// console.log(designStudent);
// designStudent.designStudentFun;

// // const webStudentFun = function () {
// //   console.log(`We are student`);

// //   console.log(this);
// // };

// // webStudentFun();

// const studentArr = (name, age) => {
//   console.log(this);
// };

// studentArr();

// In an event handler, the this keyword will be set to the element attached with that handler.

// document.querySelector(".button").addEventListener("click", function () {
//   console.log("You click me");
//   console.log(this);
// });

// different ways a function can be called
// As a method, this keyword point to the object.
// In a regular function called, the this keyword is set to undefined.
// Calling arrow function
// If a function is called by event listener the this keyword is always === the element attached to the event.
// Calling a function with "new, bind, call and apply"

// const aktc = {
//   airline: "18 seaters",
//   plateNumber: "182930",
//   busNo: 300,

//   buyBus() {
//     console.log(this);
//     console.log(this.busNo++);
//   },
// };

// aktc.buyBus();
// aktc.buyBus();
// aktc.buyBus();

// document
//   .querySelector(".button")
//   .addEventListener("click", aktc.buyBus.bind(aktc));

// OOP

// The constructor function
// The Classes
// The object.create();

// const noble = new Person("Noble", "Omoniyi");
// console.log(noble);

// console.log(uduak);

// const emptyObj = {};
// console.log(emptyObj);

// 4 sequential things happens when we call a function with the "new" keyword.
// 1. New {} is created
// 2. this = {};
// 3. {} linked to a prototype
// 4. function automatically return the {};

const Person = function (firstName, lastName, birthYear) {
  // console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  // Wrong way of doing this
  // this.caclAge = function () {
  //   console.log(2025 - this.birthYear);
  // };
};

Person.prototype.caclAge = function () {
  console.log(2025 - this.birthYear);
};

const thomas = new Person("Thomas", "williams", 2001);

const uduak = new Person("Uduak", "Ufot", 1996);
// const michael = new Person("Michael");

console.log(thomas);
console.log(uduak);

console.log(uduak.__proto__);
thomas.caclAge();
const arr = [2, 3, 4];
console.log(arr.splice("-1"));
console.log(arr);
// console.log(michael);

// Assignment
// Create a constructor function with the name "Animal", call it with the "new" keyword. The Animal constructor function should recieve two(2) argument: the name and the specie. For example ("Tiger", "Cat"), ("Crocodile", "Reptile");
