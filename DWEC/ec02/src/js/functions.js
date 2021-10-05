import { clearResult } from "./helper.js";

// Exercise 1
export const isEmptyString = function (str, elem) {
  clearResult(elem);
  if (!str || str === "" || str === null) return "Empty string";
  return str;
};

// Exercise 2
export const toReverseString = function (str, elem) {
  clearResult(elem);
  if (!str || str === "" || str === null) return "Empty string";
  return str.split("").reverse().join("");
};

// Exercise 3
export const countA = function (str, elem) {
  let count = 0;
  clearResult(elem);
  if (!str || str === "" || str === null) return "Empty string";
  str.split("").forEach((letter) => {
    if (letter.toLowerCase() === "a") count++;
  });
  return count;
};

// Exercise 4
