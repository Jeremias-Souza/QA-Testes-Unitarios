describe("Testando os Matchers", () => {
  it("Deve fazer se o resultado é igual o calculo", () => {
    const result = 8 + 4;
    expectToBe(result, 8);
  });

  it("Deve testar se o resultado é maior", () => {
    const result = 10;
    expectToBeGreaterThan(result, 5);
  });
});
