const data = require('../data/zoo_data');

const { employees: funcionario } = data;

function getEmployeeByName(employeeName) {
  if (!(employeeName)) {
    return {};
  }
  const retorna = funcionario.reduce((um, dois) => {
    if (dois.firstName === employeeName || dois.lastName === employeeName) return dois;
    return um;
  }, {});
  return retorna;
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
