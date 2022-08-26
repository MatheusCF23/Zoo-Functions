const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((elemento) => ids.find((nomes) => nomes === elemento.id));
};

module.exports = getSpeciesByIds;
