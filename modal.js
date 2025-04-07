"use strict";

// SELECTING HTML ELEMENTS
const openModal = document.querySelectorAll(".open-modal");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

console.log(openModal);

// ADDING FUNCTIONALITY

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");

    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// LISTENING TO KEYBOAD EVENTS

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");

    console.log("I'm here");
  }
});

// Looping an Array
// const studentArr = ["Uduak", "noble", "Joshua", "Kufre"];

// console.log(studentArr);

// for (let i = 0; i < studentArr.length; i++) {
//   console.log(i);
// }
