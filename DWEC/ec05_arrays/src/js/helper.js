export const stringToArray = function (str) {
  return str.split(',');
};

export const renderButton = function (btnContainer, btnValue) {
  btnContainer.insertAdjacentHTML(
    'beforeend',
    `<button class="btn">${btnValue}</button>`
  );
};
