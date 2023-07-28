const somar = require('./calculate.js');

 it('Deve somar', () => {
    expect(somar(2, 3)).toBe(5);
 })

 it('Deve somar numeros negativos', () => {
    expect(somar(-2,-3)).toBe(-5);
 })

 it('Deve retornar erro', () => {
    expect(somar(-1, 8)).toBe(7);
 })

 it('Deve subtrair', () => {
    expect(subtrair(4, 3)).toBe(1);
 })

 it('Deve subtrair numeros negativos', () => {
    expect(subtrair(-4, -2)).toBe(-6);
 })

 it('Deve subtrair numeros negativos com positivos', () => {
    expect(subtrair(-2, 2)).toBe(0);
 })

 it('Devera realizar o calculo normalmente', () => {
    expect(somar(9, 10), subtrair(somar - 10)).toBe(somar < 10 && somar > 8);
 })

 it('deverá multiplicar normalmente', () => {
    expect(multiplicar(10, 2)).toBe(20);
 })



