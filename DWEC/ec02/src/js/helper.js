export const clearResult = function (elem) {
  elem.innerHTML = '';
};

export const allInOne = function (btnElem, resultElem, funcToApply) {
  resultElem.insertAdjacentHTML(
    'afterbegin',
    `<h2>Function used: <span>${btnElem.textContent}</span></h2>
    <h2>Result:</h2>`
  );
  resultElem.insertAdjacentHTML('beforeend', funcToApply);
  // resultElem.innerHTML = funcToApply;
};

export const addResultStyle = function (elem) {
  elem.classList.add('result-style');
};

export const isEmptyInput = function (str) {
  if (!str || str === '' || str === null) return false;
};
