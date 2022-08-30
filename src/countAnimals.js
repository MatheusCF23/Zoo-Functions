const data = require('../data/zoo_data');

const { species } = data;

const objeto = () => {
  const objetoVazio = {};
  species.forEach((a) => {
    objetoVazio[a.name] = a.residents.length;
  });
  return objetoVazio;
};

function countAnimals(animal) {
  if (animal === undefined) {
    return objeto();
  }

  if (Object.keys(animal).length > 1) {
    return species.find((element) => element.name === animal.specie).residents
      .filter((sexo) => sexo.sex === animal.sex).length;
  }

  return species.find((element) => element.name === animal.specie).residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'female' }));
module.exports = countAnimals;
