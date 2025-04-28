"use strict";

// const { setImmediate } = require("async");

// const watchOut = "Hey, eveyone. Watch out";

// console.log(watchOut);

// alert("This is an example");

// setTimeout(() => {
//   console.log("One second has passed");
//   setTimeout(() => {
//     console.log("Two seconds has passed");
//     setTimeout(() => {
//       console.log("Three seconds has passed");
//       setTimeout(() => {
//         console.log("Four seconds has passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.log(variable);

// const variableName = setTimeout(function () {
//   console.log("One second has passed");
// }, 1000);

// console.log(variableName);

// const studentsName = {
//   firstStudent: "Uduak",
//   secondStudent: "Joseph",
//   thirdStudent: "Noble",
// };
// console.log(studentsName);

// const countryCom = function (country) {
//   // console.log(country);
//   const comparison = `${country[0]} is bigger than ${country[1]}`;

//   console.log(comparison);
// };

// const countryArray = ["Nigeria", "Ghana"];
// countryCom(countryArray);

// NOTES

// Type of Request
//1. Get for Requesting Data
//2. Post for Sending Data and
//3. Put and Patch to modify the data

// AJAX
// Most important used of Asynchronous
// Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in a asynchronous web servers in an asynchronous way. With AJAX calls, we request data from web servers dynamically.

// AJAX IS USED TO SEND AND REQUEST DATA USING API

// OLD way of requesting data
// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/name/nigeria");

// request.send("");
// console.log(request.responstText);

// console.log(request);

// request.addEventListener("load", function (resonsedata) {
//   console.log(resonsedata);
//   console.log(resonsedata.responstText);
// });

// const request = fetch("https://restcountries.com/v3.1/name/nigeria")
//   .then(function (data) {
//     return data;
//   })
//   .then((data) => {

//   });

// A promise is an object used a  placeholder for the future result of an asynchronous operation

// const request = fetch("https://restcountries.com/v2/name/nigeria")
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//   });

const countryContainer = document.querySelector(".countries");

const countryName = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      const [response] = data;
      console.log(response);

      const html = `
      <article class="country">
          <img class="country__img" src="${response.flag}" />
          <div class="country__data">
            <h3 class="country__name">${response.name}</h3>
            <h4 class="country__region">${response.region}</h4>
            <p class="country__row"><span>👫</span>${(
              response.population / 1000000
            ).toFixed(1)} mil people</p>
            <p class="country__row"><span>🗣️</span>${
              response.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              response.currencies[0].code
            }</p>
          </div>
        </article>
    `;

      countryContainer.insertAdjacentHTML("beforeend", html);
    });
};

countryName("nigeria");
countryName("ghana");
countryName("tanzania");
countryName("usa");
countryName("france");

// ASSIGNMENT
// Fetch data from an API and display it on a webpage
