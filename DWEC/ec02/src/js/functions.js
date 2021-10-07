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
