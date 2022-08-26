const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const encontraAnimal = species.find((pet) => pet.name === animal).residents;

  const bolleanAge = encontraAnimal.every((idade) => idade.age >= age);
  return bolleanAge;
}

module.exports = getAnimalsOlderThan;
