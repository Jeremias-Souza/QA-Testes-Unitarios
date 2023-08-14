const subtract = require("./subtract");

describe("Subtrair", () => {
  it("Deverá retornar apenas o resultado", () => {
    let numberOne = 10;
    let numberTwo = 10;
    let result = 0;

    expect(subtract(numberOne, numberTwo)).toBe(result);
  });

  it("Deverá entrar dentro da instrução If", () => {
    let numberOne = 15;
    let numberTwo = 5;
    let result = 20;

    expect(subtract(numberOne, numberTwo)).toBe(result);
  });
});
