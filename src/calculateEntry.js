const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const objeto = {
    child: (entrants.filter((person) => person.age < 18)).length,
    adult: (entrants.filter((person) => person.age >= 18 && person.age < 50)).length,
    senior: (entrants.filter((person) => person.age >= 50)).length,
  };
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const pessoas = countEntrants(entrants);
  const valorChild = pessoas.child * prices.child;
  const valorAdult = pessoas.adult * prices.adult;
  const valorSenior = pessoas.senior * prices.senior;
  const result = valorChild + valorAdult + valorSenior
  return result;
}

console.log();

module.exports = { calculateEntry, countEntrants };
