const somar = require('./calculate.js');

 it('Deve somar numeros inteiros', () => {

    let numberOne = 2;
    let numberTwo = 3;
    let result = 5;

    expect(somar(numberOne, numberTwo))
        .toBe(result);
 })

 it('Deve somar numeros negativos', () => {

    let numberOne = -2;
    let numberTwo = -3;
    let result = -5;

    expect(somar(numberOne,numberTwo))
        .toBe(result);
 })

 it('Deve cair dentro do if', () => {

    let numberOne = 5;
    let numberTwo = 10;
    let result = 150;

    expect(somar(numberOne,numberTwo))
        .toBe(result)
 });


 