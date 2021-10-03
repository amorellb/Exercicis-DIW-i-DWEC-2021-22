const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const plusSymbol = document.querySelector(".plusSymbol");
const resultEl = document.querySelector(".result");
const equalSymbol = document.querySelector(".equalSymbol");

function sum(first, second) {
  try {
    if (!first && !second) return;
    const result = Number(first?.value) + Number(second?.value);
    return isNaN(result) ? "Write a number" : result;
  } catch (error) {
    console.error(error);
  }
}

function renderResult() {
  resultEl.innerHTML = "";
  resultEl.insertAdjacentHTML("beforeend", `${sum(firstNum, secondNum)}`);
}

plusSymbol.addEventListener("click", renderResult);
equalSymbol.addEventListener("click", renderResult);
