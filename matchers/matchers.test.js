const matcher = require("./matcher");

const {
  toBe,
  toBeGreaterThan,
  toBeGreaterThanOrEqual,
  toBeLessThan,
  toBeLessThanOrEqual,
  toBeCloseTo,
  toContain,
  toThrow,
  toBeNull,
  toBeDefined,
  toBeUndefined,
  toCustomToMatch,
  toBeTruthy,
  toBeFalsy,
} = matcher;

test("Testes", () => {
  toBe(5, 5);
  toBeGreaterThan(10, 5);
  toBeGreaterThanOrEqual(10, 10);
  toBeLessThan(2, 4);
  toBeLessThanOrEqual(7, 7);
  toBeCloseTo(0.1 + 0.2, 0.3, 2);
  toContain("Olá Mundo", "Mundo");
  toThrow(() => {
    throw new Error("Erro");
  }, Error);
  toBeNull(null);
  toBeDefined(5);
  toBeUndefined(undefined);
  toCustomToMatch("Jere", /Souza/);
  toBeTruthy(true);
  toBeFalsy(false);
});
