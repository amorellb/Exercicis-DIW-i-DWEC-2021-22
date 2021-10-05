import { isEmptyString, toReverseString, countA } from "./functions.js";
import { allInOne, addResultStyle } from "./helper.js";

// const formElement = document.querySelector(".form");
const inputString = document.querySelector("#inputString");
const resultOutput = document.querySelector(".result");

// Exercise 1
const btnIsEmptyString = document.querySelector(".btnIsEmptyStringCheck");
// Exercise 2
const btnToReverseString = document.querySelector(".btnReverseString");
// Exercise 3
const btnCountA = document.querySelector(".btnCountA");

// Exercise 1
btnIsEmptyString.addEventListener("click", (e) => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(resultOutput, isEmptyString(inputString.value, resultOutput));
});

// Exercise 2
btnToReverseString.addEventListener("click", (e) => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(resultOutput, toReverseString(inputString.value, resultOutput));
});

// Exercise 3
btnCountA.addEventListener("click", (e) => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(resultOutput, countA(inputString.value, resultOutput));
});

// Exercise 4
