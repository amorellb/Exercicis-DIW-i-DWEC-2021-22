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
// Exercise 5
const btnFirstAndLastAOcc = document.querySelector('.btnFirstAndLastAOcc');

// Exercise 1
btnIsEmptyString.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnIsEmptyString,
    resultOutput,
    Functions.isEmptyString(inputString.value, resultOutput)
  );
});

// Exercise 2
btnToReverseString.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnToReverseString,
    resultOutput,
    Functions.toReverseString(inputString.value, resultOutput)
  );
});

// Exercise 3
btnCountA.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnCountA,
    resultOutput,
    Functions.countA(inputString.value, resultOutput)
  );
});

// Exercise 4
btnBeforeA.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnBeforeA,
    resultOutput,
    Functions.whatsBeforeA(inputString.value, resultOutput)
  );
});

// Exercise 5
btnFirstAndLastAOcc.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnFirstAndLastAOcc,
    resultOutput,
    Functions.getFirstAndLastAOcc(inputString.value, resultOutput)
  );
});
