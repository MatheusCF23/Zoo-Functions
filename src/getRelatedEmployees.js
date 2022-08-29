const data = require('../data/zoo_data');
const { employees: funcionario } = data;

function isManager(id) {
    const retornoVerdadeiro = funcionario.some((gerente) => gerente.managers.find ((a) => a === id));
    return retornoVerdadeiro;
}

function getRelatedEmployees(managerId) {
  if (!(isManager(managerId))) {
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return funcionario.reduce((um, dois) => {
    if (dois.managers.includes(managerId)) {
      um.push(`${dois.firstName} ${dois.lastName}`);
    }
    return um;
  }, []);
}


module.exports = { isManager, getRelatedEmployees };
