function ToBe(valorAtual, valorEsperado) {
  expect(valorAtual).toBe(valorEsperado);
}

function ToBeGreaterThanOrEqual(valorAtual, valorEsperado) {
  expect(valorAtual).toBeGreaterThan(valorEsperado);
}

function ToBeGreaterThanOrEqual(valorAtual, valorEsperado) {
  expect(valorAtual).toBeGreaterThanOrEqual(valorEsperado);
}

function expectNotToBe(valorAtual, valorEsperado) {
  expect(valorAtual).not.toBe(valorEsperado);
}

function expectToBeNull(valorAtual) {
  expect(valorAtual).toBeNull();
}

function expectToBeDefined(valorAtual) {
  expect(valorAtual).toBeDefined();
}

function expectToBeUndefined(valorAtual) {
  expect(valorAtual).toBeUndefined();
}

function expectToBeCloseTo(valorAtual, valorEsperado, valorPrecisao) {
  expect(valorAtual).toBeCloseTo(valorEsperado, valorPrecisao);
}

function expectToEqual(valorAtual, valorEsperado) {
  expect(valorAtual).toEqual(valorEsperado);
}

function expectToMatch(valorAtual, valorPadrao) {
  expect(valorAtual).toMatch(valorPadrao);
}

function expectToBeTruthy(valorAtual) {
  expect(valorAtual).toBeTruthy();
}

function expectToContain(valorAtual, valorEsperado) {
  expect(valorAtual).toContain(valorEsperado);
}

function expectToBeFalsy(valorAtual) {
  expect(valorAtual).toBeFalsy();
}

function expectToThrow(func, msgError) {
  expect(func).toThrow(msgError);
}
