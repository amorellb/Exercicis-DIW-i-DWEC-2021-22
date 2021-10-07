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
// Exercise 6
const btnDelSubstring = document.querySelector('.btnDelSubstring');
// Exercise 7
const btnReplaceByAStar = document.querySelector('.btnReplaceByAStar');
// Exercise 8
const btnCapICua = document.querySelector('.btnCapICua');
// Exercise 9
const btnDelSpaces = document.querySelector('.btnDelSpaces');
// Exercise 10

// clearInput(inputString);

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

// Exercise 6
btnDelSubstring.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnDelSubstring,
    resultOutput,
    Functions.deleteSubstring(inputString.value, resultOutput)
  );
});

// Exercise 7
btnReplaceByAStar.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnReplaceByAStar,
    resultOutput,
    Functions.replaceByAStar(inputString.value, resultOutput)
  );
});

// Exercise 8
btnCapICua.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnCapICua,
    resultOutput,
    Functions.getCapICua(inputString.value, resultOutput)
  );
});

// Exercise 9
btnDelSpaces.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnDelSpaces,
    resultOutput,
    Functions.deleteSpaces(inputString.value, resultOutput)
  );
});

// Exercise 10
