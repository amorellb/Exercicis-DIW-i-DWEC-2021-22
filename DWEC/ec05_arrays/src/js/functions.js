// Exercise 1
export const separats_$ = function (arr) {
  return arr.join('$');
};

// Exercise 2
export const concatArr = function (arr) {
  const arr2 = ['zen', 19, 'choice'];
  return arr2.concat(arr);
};

// Exercise 3
export const spliceArr = function (arr) {
  arr.splice(1, 1);
  return arr;
};

// Exercise 4
export const splice2 = function (arr) {
  arr.splice(1, 1, 'Doe', 3.1415);
  return arr;
};

// Exercise 5
export const strOrdenaMajor = function (arr) {
  return arr.sort();
};

// Exercise 6
export const numOrdenaMajor = function (arr) {
  return arr.sort();
};

// Exercise 7
export const numOrdenaMenor = function (arr) {
  return arr.sort((a, b) => b - a);
};

// Exercise 8
export const strOrdenaPerLong = function (arr) {
  return arr.sort((a, b) => b.length - a.length);
};

// Exercise 9
export const strArrayLongituds = function (arr) {
  return arr.map(item => {
    item.length;
  });
};

// Exercise 10
export const strCreaFraseGuions = function (arr) {
  return arr.join('-');
};

// Exercise 11
export const strCreaAcronim = function (arr) {
  return arr.map(word => word.slice(0, 1).toUpperCase()).join('');
};

// Exercise 12
export const strFiltreLongitud = function (arr) {
  return arr.filter(word => word.length < 5);
};

// Exercise 13
export const numSumaForeach = function (arr) {
  let sum = 0;
  arr.forEach(num => {
    sum = Number(num) + sum;
  });
  return sum;
};

// Exercise 14
export const strOcurrencies = function (arr) {
  let count = 0;
  arr.forEach(word => {
    if (word === 'la') {
      count++;
    }
  });
  return count;
};

// Exercise 15
export const numSumaReduce = function (arr) {
  return arr.reduce((acc, num) => {
    return Number(acc) + Number(num);
  });
};

// Exercise 16
export const numMaxForeach = function (arr) {
  let max = 0;
  arr.forEach(num => {
    let number = Number(num);
    if (number > max) max = number;
  });
  return max;
};

// Exercise 17
export const restructuraArray = function (arr) {
  const firstOcc = arr.splice(0, 1);
  const lastOcc = arr.splice(-1);
  const firstHalf = arr.splice(0, arr.length / 2);
  const lastHalf = arr;
  console.log(firstOcc, lastOcc, firstHalf, lastHalf);
  return firstHalf.concat(firstOcc.concat(lastOcc.concat(lastHalf)));
};

// Exercise 18
export const capCuaArray = function (arr) {
  const newArr = arr.filter(num => {
    if (arr.indexOf(num) <= 2) return num;
  });
  return arr.concat(newArr.reverse());
};
