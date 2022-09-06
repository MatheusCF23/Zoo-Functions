const data = require('../data/zoo_data');

const { employees, species } = data;

function generateEmployeesCoverage() {
  return employees.map((element) => {
    const especie = element.responsibleFor
      .map((elementos) => species.find((elemento) => elemento.id === elementos).name);
    const regioes = especie
      .map((ele) => species.find((elemneto) => elemneto.name === ele).location);
    return {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: especie,
      locations: regioes,
    };
  });
}

function getEmployeesCoverage(elementos) {
  // seu código aqui
  const lugar = generateEmployeesCoverage();
  if (elementos === undefined) {
    return lugar;
  }
  const { name, id } = elementos;
  let worker;
  if (name !== undefined) {
    worker = employees.find((element) => element.firstName === name || element.lastName === name);
  } else if (id !== undefined) {
    worker = employees.find((el) => el.id === id);
  }
  if (worker === undefined) {
    throw new Error('Informações inválidas');
  }
  return lugar.find((cover) => cover.id === worker.id);
}

module.exports = getEmployeesCoverage;
