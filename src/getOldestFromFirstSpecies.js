const data = require('../data/zoo_data');

const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const ids = employees.find((element) => element.id === id).responsibleFor[0];
  const especie = species.find((element) => element.id === ids).residents;
  const ano = especie.sort((a, b) => b.age - a.age);
  return Object.values(ano[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
