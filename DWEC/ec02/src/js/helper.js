export const clearResult = function (elem) {
  elem.innerHTML = "";
};

export const allInOne = function (resultElem, funcToApply) {
  resultElem.innerHTML = funcToApply;
};

export const addResultStyle = function (elem) {
  elem.classList.add("result-style");
};

// export const emptyStringMessage = function (str) {
//   if (!str || str === "" || str === null) return false;
// };
