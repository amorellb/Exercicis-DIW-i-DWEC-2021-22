import { clearResult, isEmptyInput } from './helper.js';

// Exercise 1
export const isEmptyString = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str) ? 'Empty string' : str;
};

// Exercise 2 (split; reverse; join)
export const toReverseString = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str) ? 'Empty string' : str.split('').reverse().join('');
};

// Exercise 3 (split; forEach)
export const countA = function (str, resElem) {
  let count = 0;
  clearResult(resElem);
  str.split('').forEach(letter => {
    if (letter.toLowerCase() === 'a') count++;
  });
  return isEmptyInput(str) ? 'Empty string' : count;
};

// Exercise 4 (slice; indexOf)
export const whatsBeforeA = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str)
    ? 'Empty string'
    : str.slice(0, str.toLowerCase().indexOf('a'));
};

// Exercise 5 (indexOf, lastIndexOf)
export const getFirstAndLastAOcc = function (str, resElem) {
  clearResult(resElem);
  const firstOcc = str.indexOf('a');
  const lastOcc = str.lastIndexOf('a');
  return isEmptyInput(str)
    ? 'Empty string'
    : `First occ: ${firstOcc} <br> Last occ: ${lastOcc}`;
};

// Exercise 6 (replaceAll)
export const deleteSubstring = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str) ? 'Empty string' : str.replaceAll('la', '');
};

// Exercise 7 (replaceAll)
export const replaceByAStar = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str) ? 'Empty string' : str.replaceAll('la', '⭐️');
};

// Exercise 8 (substr; slice)
export const getCapICua = function (str, resElem) {
  clearResult(resElem);
  const firstLetter = str.substr(0, 1);
  // const firstLetter = str.slice(0, 1);
  const capICuaStr = `${firstLetter}${str}${firstLetter}`;
  return isEmptyInput(str) ? 'Empty string' : capICuaStr;
};

// Exercise 9 (replaceAll)
export const deleteSpaces = function (str, resElem) {
  clearResult(resElem);
  return isEmptyInput(str) ? 'Empty string' : str.replaceAll(' ', '');
};

// Exercise 10 (split; filter; join)
export const addDash = function (str, resElem) {
  clearResult(resElem);
  const separatedWords = str.split(' ').filter(word => word !== '');
  return isEmptyInput(str) ? 'Empty string' : separatedWords.join('-');
};

// Exercise 11 (split; map; slice; join)
export const getAcronym = function (str, resElem) {
  clearResult(resElem);
  const acronym = str.split(' ').map(word => word.slice(0, 1));
  return isEmptyInput(str) ? 'Empty string' : acronym.join('').toUpperCase();
};

// Exercise 12 (slice; filter; indexOf; split; includes)
export const validateEmail = function (str, resElem) {
  clearResult(resElem);

  const serverExts = ['.net', '.org', '.com'];
  const serverExt = str.slice(-4);
  const [indexExt] = serverExts.filter(ext => {
    return str.indexOf(ext) > -1;
  });

  if (str.split('@').length > 2) return 'There are more than one @';
  if (!serverExts.includes(serverExt))
    return 'You are using a non valid server extension';
  if (str.indexOf('@') > str.indexOf(indexExt))
    return 'Not a valid email format';
  return 'Your email is correctly formatted 🥳';
};

// Exercise 13 (slice)
export const checkNumberSign = function (str, resElem) {
  clearResult(resElem);
  if (str === '0') return 'Your number is equal to 0';
  return str.slice(0, 1) === '-'
    ? 'Your number is negative'
    : 'Your number is positive';
};

// Exercise 14 (isNaN)
export const isNumber = function (str, resElem) {
  clearResult(resElem);
  const number = Number(str);
  return isNaN(number) ? 'Not a number' : 'Is a number';
};

// Exercise 15 (split)
export const getNonDecimalPart = function (str, resElem) {
  clearResult(resElem);
  return str.split('.')[0];
};

// Exercise 16 (split)
export const getDecimalPart = function (str, resElem) {
  clearResult(resElem);
  return str.split('.')[1];
};

// Exercise 17 (toString; split; slice)
export const divideAndRound = function (str, resElem) {
  clearResult(resElem);
  const number = Number(str);
  const divNumber = number / 19;
  const decPart = divNumber.toString().split('.')[1];
  const decPartRounded = decPart.slice(0, 3);
  return `${divNumber.toString().split('.')[0]}.${decPartRounded}`;
};
