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
    expect(() => { getOpeningHours('Monday', '15:00-PM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica ERROR - 2', () => {
    expect(() => { getOpeningHours('Thu', '10:00-PM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica ERROR - 3', () => {
    expect(() => { getOpeningHours('Saturday', '10:00-FM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
