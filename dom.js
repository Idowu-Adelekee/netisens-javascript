"use strict";

console.log("hi");

// THE DEFINITION OF DOM
// Document Object Model:  Structured representation of HTML Document allows JavaScript to acccess html elements and styles to manipulate them.

// console.log(document.documentElement);

// Function

// const cuttingMachine = function (oranges, mangoes) {
//   const piecesOfOranges = oranges * 2;
//   const piecesOfMangoes = mangoes * 2;
// };

// // Higher order function
// const fruitJuice = function () {
//   const fruitJuiceProcess = cuttingMachine(2, 4);
//   return fruitJuiceProcess;
// };

// console.log(fruitJuice());

// console.log(document);
// console.log(document.documentElement);

// console.log(document.querySelector(".button1"));

// const houseWife = document.querySelector(".button1");

// console.log(houseWife);

// houseWife.textContent = "House wife";

// const headingDom = document.querySelector("#domheading");
// console.log(headingDom);
// headingDom.textContent = "WELCOME TO UYO";

// const headingDom2 = document.getElementById("domheading");

// console.log(headingDom2);

// const mainBackground = document.querySelector(".background");

// mainBackground.style.backgroundColor = "blue";

// headingDom2.style.color = "yellow";

// houseWife.classList.add("examplestyle");

// .background {
//   background-color: #000;
// }

const buttonBlueEl = document.querySelector(".button1");

const backgroundEl = document.querySelector(".background");

buttonBlueEl.addEventListener("click", function () {
  backgroundEl.style.backgroundColor = "pink";
});

const domHeading = document.querySelector("#domheading");

domHeading.addEventListener("mouseenter", function () {
  alert("You are hovering on the dom manipulation heading");
});
