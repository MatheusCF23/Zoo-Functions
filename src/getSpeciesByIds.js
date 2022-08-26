const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((elemento) => {
    return ids.find((nomes) => {
      return nomes === elemento.id;
    })
  })
}


console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
