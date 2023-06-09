const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o Zoo está aberto na segunda:', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se o Zoo está aberto na terça:', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se o Zoo está aberto na quarta:', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verifica se o Zoo está aberto na quinta:', () => {
    expect(getOpeningHours('Thursday', '1:00-PM')).toBe('The zoo is open');
  });
  it('Verifica se getOpeningHours é uma função:', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica se retorna OBJECT', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });
  it('Verifica os dias e horarios:', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Verifica ERROR - 1', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica ERROR - 2', () => {
    expect(() => { getOpeningHours('Thu', '9:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica ERROR - 3', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica ERROR - 4', () => {
    expect(() => { getOpeningHours('Saturday', 10); }).toThrow('hour.toUpperCase is not a function');
  });
  it('Verificando os minutos', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('Verificando a hora com letra', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });
  it('Verificando os minutos com letra', () => {
    expect(() => { getOpeningHours('Sunday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });
});
