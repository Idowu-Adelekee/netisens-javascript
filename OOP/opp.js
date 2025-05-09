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

// const Person = function (firstName, lastName, birthYear) {
//   // console.log(this);
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;

//   // Wrong way of doing this
//   // this.caclAge = function () {
//   //   console.log(2025 - this.birthYear);
//   // };
// };

// Person.prototype.caclAge = function () {
//   console.log(2025 - this.birthYear);
// };

// const thomas = new Person("Thomas", "williams", 2001);

// const uduak = new Person("Uduak", "Ufot", 1996);

// console.log(thomas);
// console.log(uduak);

// console.log(uduak.__proto__);
// thomas.caclAge();
// const arr = [2, 3, 4];
// console.log(arr.splice("-1"));
// console.log(arr);
// // console.log(michael);

// Assignment
// Create a constructor function with the name "Animal", call it with the "new" keyword. The Animal constructor function should recieve two(2) argument: the name and the specie. For example ("Tiger", "Cat"), ("Crocodile", "Reptile");

// console.log("You are welcome");

// USING FUNCTION CONSTRUCTOR

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// const uduak = new Person("Uduak", 2003);
// const noble = new Person("Noble", 1999);

// uduak.calcAg

// console.log(noble);
// console.log(uduak);

// 1 empty object is created
// 2. the this keyword will be === {}
// 3. the function will called the empty

// USING ES6 CLASSES
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }
// }

// const ifeanyi = new PersonCl("Ifeanyi", 1960);
// const samuel = new PersonCl("Sameul", 2006);

// console.log(ifeanyi);
// console.log(samuel);

// ifeanyi.calcAge();

// console.log(ifeanyi.isPrototypeOf(PersonCl));

// console.log(ifeanyi.__proto__.__proto__);

// console.log(ifeanyi.isPrototypeOf(PersonCl.prototype));

// EXAMPLE OF INHERITANCE WITH ARRAY

// const numbers = [2, 3, 4];
// console.log(numbers);

// numbers.forEach(function (number) {
//   console.log(number);
// });

// console.log(ifeanyi.prototype === Person);

// console.log(PersonCl.isPrototypeOf(ifeanyi));

// Assignment
//Using ES6 classes, create an  "AnimalCL" object call it with the "new" keyword. The Animal constructor function should recieve two(2) argument: the name and the specie. For example ("Tiger", "Cat"), ("Crocodile", "Reptile");

// USING OBJECT.CREATE
// const netisens = {
//   department: ["web dev", "ui/ux design", "data analysi"],
//   foundedIn: 2018,

//   calcAge() {
//     console.log(2025 - this.foundedIn);
//   },
// };

// const Newdepartment = Object.create(netisens);

// console.log(Newdepartment);
// Newdepartment.calcAge();

// INHERITANCE BETWEEN TWO INSTANCES
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

// const samuel = new PersonCl("Samuel", 2000);

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.firstName} and I am a ${this.course} student`
    );
  }

  //Polymorhism: This function overide the caclAge() of the Parentcl class.
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const uduak = new StudentCl("Uduak", 2003, "Web dev");

console.log(uduak);

uduak.calcAge();

// const you = {
//   firstName: "Uduak",
// };

// console.log(you);

const netisensFunc = function () {
  console.log(`Hello Netisens`);
};

console.dir(netisensFunc);
