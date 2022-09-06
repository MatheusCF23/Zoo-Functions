const data = require('../data/zoo_data');

const { employees, species } = data;

function generateEmployeesCoverage() {
  return employees.map((element) => {
    const especie = element.responsibleFor
      .map((element) => species.find((elemento) => elemento.id === element).name);
    const regioes = especie
      .map((element) => species.find((elemneto) => elemneto.name === element).location);
    return {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: especie,
      locations: regioes,
    };
  });
}

function getEmployeesCoverage(element) {
  // seu código aqui
  const lugar = generateEmployeesCoverage();
  if (element === undefined) {
    return lugar;
  }
  const { name, id } = element;
  let worker;
  if (name !== undefined) {
    worker = employees.find((element) => element.firstName === name || element.lastName === name);
  } else if (id !== undefined) {
    worker = employees.find((element) => element.id === id);
  }
  if (worker === undefined) {
    throw new Error('Informações inválidas');
  }
  return lugar.find((cover) => cover.id === worker.id);
}


module.exports = getEmployeesCoverage;
