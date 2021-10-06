import { clearResult } from './helper.js';

// Exercise 1
export const isEmptyString = function (str, resElem) {
  clearResult(resElem);
  if (!str || str === '' || str === null) return 'Empty string';
  return str;
};

// Exercise 2 (split; reverse; join)
export const toReverseString = function (str, resElem) {
  clearResult(resElem);
  if (!str || str === '' || str === null) return 'Empty string';
  return str.split('').reverse().join('');
};

// Exercise 3 (split; forEach)
export const countA = function (str, resElem) {
  let count = 0;
  clearResult(resElem);
  if (!str || str === '' || str === null) return 'Empty string';
  str.split('').forEach(letter => {
    if (letter.toLowerCase() === 'a') count++;
  });
  return count;
};

// Exercise 4 (slice; indexOf)
export const whatsBeforeA = function (str, resElem) {
  clearResult(resElem);
  return str.slice(0, str.toLowerCase().indexOf('a'));
};

// Exercise 5 (indexOf, lastIndexOf)
export const getFirstAndLastAOcc = function (str, resElem) {
  clearResult(resElem);
  const firstOcc = str.indexOf('a');
  const lastOcc = str.lastIndexOf('a');
  return `First occ: ${firstOcc} <br> Last occ: ${lastOcc}`;
};

// Exercise 6 (replaceAll)
export const deleteSubstring = function (str, resElem) {
  clearResult(resElem);
  return str.replaceAll('la', '');
};

// Exercise 7 (replaceAll)
export const replaceByAStar = function (str, resElem) {
  clearResult(resElem);
  return str.replaceAll('la', '⭐️');
};
