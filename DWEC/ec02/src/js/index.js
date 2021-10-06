import * as Functions from './functions.js';
import { allInOne, addResultStyle } from './helper.js';

// const formElement = document.querySelector(".form");
const inputString = document.querySelector('#inputString');
const resultOutput = document.querySelector('.result');

// Exercise 1
const btnIsEmptyString = document.querySelector('.btnIsEmptyStringCheck');
// Exercise 2
const btnToReverseString = document.querySelector('.btnReverseString');
// Exercise 3
const btnCountA = document.querySelector('.btnCountA');
// Exercise 4
const btnBeforeA = document.querySelector('.btnBeforeA');

// Exercise 1
btnIsEmptyString.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    resultOutput,
    Functions.isEmptyString(inputString.value, resultOutput)
  );
});

// Exercise 2
btnToReverseString.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    resultOutput,
    Functions.toReverseString(inputString.value, resultOutput)
  );
});

// Exercise 3
btnCountA.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(resultOutput, Functions.countA(inputString.value, resultOutput));
});

// Exercise 4
btnBeforeA.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    resultOutput,
    Functions.whatsBeforeA(inputString.value, resultOutput)
  );
});
