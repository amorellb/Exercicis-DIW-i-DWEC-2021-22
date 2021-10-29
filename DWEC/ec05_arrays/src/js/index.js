import * as helper from './helper.js';
import * as functions from './functions.js';

const input = document.querySelector('.input');
const buttons = document.querySelector('.button-container');
const output = document.querySelector('.output-container');

const generateButtons = function () {
  helper.renderButton(buttons, 'separats_$');
  helper.renderButton(buttons, 'concat');
  helper.renderButton(buttons, 'splice');
  helper.renderButton(buttons, 'splice2');
  helper.renderButton(buttons, 'strOrdenaMajor');
  helper.renderButton(buttons, 'numOrdenaMajor');
  helper.renderButton(buttons, 'numOrdenaMenor');
  helper.renderButton(buttons, 'strOrdenaPerLong');
  helper.renderButton(buttons, 'strArrayLongituds');
  helper.renderButton(buttons, 'strCreaFraseGuions');
  helper.renderButton(buttons, 'strCreaAcronim');
  helper.renderButton(buttons, 'strFiltreLongitud');
  helper.renderButton(buttons, 'numSumaForeach');
  helper.renderButton(buttons, 'strOcurrencies');
  helper.renderButton(buttons, 'numSumaReduce');
  helper.renderButton(buttons, 'numMaxForeach');
  helper.renderButton(buttons, 'restructuraArray');
  helper.renderButton(buttons, 'capCuaArray');
};

buttons.addEventListener('click', e => {
  const btn = e.target.closest('.btn');

  switch (btn.textContent) {
    case 'separats_$':
      output.innerHTML = functions.separats_$(
        helper.stringToArray(input.value)
      );
      break;
    case 'concat':
      output.innerHTML = functions.concatArr(helper.stringToArray(input.value));
      break;
    case 'splice':
      output.innerHTML = functions.spliceArr(helper.stringToArray(input.value));
      break;
    case 'splice2':
      output.innerHTML = functions.splice2(helper.stringToArray(input.value));
      break;
    case 'strOrdenaMajor':
      output.innerHTML = functions.strOrdenaMajor(
        helper.stringToArray(input.value)
      );
      break;
    case 'numOrdenaMajor':
      output.innerHTML = functions.numOrdenaMajor(
        helper.stringToArray(input.value)
      );
      break;
    case 'numOrdenaMenor':
      output.innerHTML = functions.numOrdenaMenor(
        helper.stringToArray(input.value)
      );
      break;
    case 'strOrdenaPerLong':
      output.innerHTML = functions.strOrdenaPerLong(
        helper.stringToArray(input.value)
      );
      break;
    case 'strArrayLongituds':
      output.innerHTML = functions.strArrayLongituds(
        helper.stringToArray(input.value)
      );
      break;
    case 'strCreaFraseGuions':
      output.innerHTML = functions.strCreaFraseGuions(
        helper.stringToArray(input.value)
      );
      break;
    case 'strCreaAcronim':
      output.innerHTML = functions.strCreaAcronim(
        helper.stringToArray(input.value)
      );
      break;
    case 'strFiltreLongitud':
      output.innerHTML = functions.strFiltreLongitud(
        helper.stringToArray(input.value)
      );
      break;
    case 'numSumaForeach':
      output.innerHTML = functions.numSumaForeach(
        helper.stringToArray(input.value)
      );
      break;
    case 'strOcurrencies':
      output.innerHTML = functions.strOcurrencies(
        helper.stringToArray(input.value)
      );
      break;
    case 'numSumaReduce':
      output.innerHTML = functions.numSumaReduce(
        helper.stringToArray(input.value)
      );
      break;
    case 'numMaxForeach':
      output.innerHTML = functions.numMaxForeach(
        helper.stringToArray(input.value)
      );
      break;
    case 'restructuraArray':
      output.innerHTML = functions.restructuraArray(
        helper.stringToArray(input.value)
      );
      break;
    case 'capCuaArray':
      output.innerHTML = functions.capCuaArray(
        helper.stringToArray(input.value)
      );
      break;
    default:
      return;
  }
});

generateButtons();
