const data = require('../data/zoo_data');

const specie = data.species

function getSchedule(scheduleTarget) {
  const dias = (animal) => {
    return animal === data.species.name
  }
  const diasDaSemana = specie.find((element) => {
    return scheduleTarget === data.species.name
  })
}

module.exports = getSchedule;
