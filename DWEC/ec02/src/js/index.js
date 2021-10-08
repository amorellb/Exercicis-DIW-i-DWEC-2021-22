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
const btnAddDash = document.querySelector('.btnAddDash');
// Exercise 11
const btnAcronym = document.querySelector('.btnAcronym');
// Exercise 12
const btnValidateEmail = document.querySelector('.btnValidateEmail');
// Exercise 13
const btnCheckNumberSign = document.querySelector('.btnCheckNumberSign');
// Exercise 14
const btnIsNumber = document.querySelector('.btnIsNumber');
// Exercise 15
const btnNonDecimalPart = document.querySelector('.btnNonDecimalPart');
// Exercise 16
const btnDecimalPart = document.querySelector('.btnDecimalPart');
// Exercise 17
const btnDivideAndRound = document.querySelector('.btnDivideAndRound');

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
btnAddDash.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnAddDash,
    resultOutput,
    Functions.addDash(inputString.value, resultOutput)
  );
});

// Exercise 11
btnAcronym.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnAcronym,
    resultOutput,
    Functions.getAcronym(inputString.value, resultOutput)
  );
});

// Exercise 12
btnValidateEmail.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnValidateEmail,
    resultOutput,
    Functions.validateEmail(inputString.value, resultOutput)
  );
});

// Exercise 13
btnCheckNumberSign.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnCheckNumberSign,
    resultOutput,
    Functions.checkNumberSign(inputString.value, resultOutput)
  );
});

// Exercise 14
btnIsNumber.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnIsNumber,
    resultOutput,
    Functions.isNumber(inputString.value, resultOutput)
  );
});

// Exercise 15
btnNonDecimalPart.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnNonDecimalPart,
    resultOutput,
    Functions.getNonDecimalPart(inputString.value, resultOutput)
  );
});

// Exercise 16
btnDivideAndRound.addEventListener('click', e => {
  e.preventDefault();
  addResultStyle(resultOutput);
  allInOne(
    btnDivideAndRound,
    resultOutput,
    Functions.divideAndRound(inputString.value, resultOutput)
  );
});
