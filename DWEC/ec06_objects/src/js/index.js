import { equip_ciclista } from './data.js';

// Exercise 1
const names = equip_ciclista.ciclistes.map(ciclista => ciclista.nom);
console.log(names.join(', '));

// Exercise 2
const sortedNames = equip_ciclista.ciclistes.map(ciclista => ciclista.nom);
console.log(sortedNames.sort().join(', '));

// Exercise 3
let newCiclistes = [...equip_ciclista.ciclistes];
const sortedCicl = newCiclistes.sort((a, b) => b.height - a.height);
const sortedNamesByHeight = sortedCicl.map(ciclista => ciclista.nom);
console.log(sortedNamesByHeight.join(', '));

// Exercise 4
const goodOnes = equip_ciclista.ciclistes.sort((a, b) => {
  if (a.tours > b.tours) {
    return a.tours - b.tours;
  } else if (b.tours === a.tours) {
    return a.wins - b.wins;
  }
});
const sortedNamesByTours = goodOnes.map(ciclista => ciclista.nom);
console.log(sortedNamesByTours.join(', '));

// Exercise 5
const addTour = equip_ciclista.ciclistes.map(ciclista => {
  ciclista.tours++;
  return ciclista;
});
console.log(addTour);

// Cambiamos la posición del día y el mes en la fecha
const ciclistes = equip_ciclista.ciclistes.map(ciclista => {
  const bornDates = ciclista.born.split('/');
  const month = bornDates[1];
  bornDates[1] = bornDates[0];
  bornDates[0] = month;
  ciclista.born = bornDates.join('/');
  return ciclista;
});

// Exercise 6
newCiclistes = [...ciclistes];
const filteredC = newCiclistes.filter(ciclista => {
  const nowMill = new Date();
  const bornMill = new Date(new Date(ciclista.born)).getTime();
  ciclista.age = Math.floor((nowMill - bornMill) * 3.1709791983765e-11);
  return ciclista.age < 30;
});
console.log(filteredC);

// Exercise 7
newCiclistes = [...ciclistes];
const findC = newCiclistes.find(ciclista => {
  const nowMill = new Date();
  const bornMill = new Date(new Date(ciclista.born)).getTime();
  ciclista.age = Math.floor((nowMill - bornMill) * 3.1709791983765e-11);
  return ciclista.age > 30;
});
console.log(findC);

// Exercise 8
// Modo cutre
const firstPosC = equip_ciclista.ciclistes.shift();
equip_ciclista.ciclistes.unshift({
  nom: 'Josh Pantano',
  born: '30/11/1995',
  height: 1.88,
  tours: 2,
  wins: 9,
});
equip_ciclista.ciclistes.unshift(firstPosC);
console.log(equip_ciclista);
// Modo cool

// Exercise 9
newCiclistes = [...ciclistes];
const sortAge = newCiclistes
  .map(ciclista => {
    const nowMill = new Date();
    const bornMill = new Date(new Date(ciclista.born)).getTime();
    ciclista.age = Math.floor((nowMill - bornMill) * 3.1709791983765e-11);
    return ciclista;
  })
  .sort((a, b) => a.age - b.age);
console.log(sortAge);
