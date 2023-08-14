function multiply(a, b) {
  const result = a * b;

  if (result > 100) {
    return result / 2;
  }
  if (result < 50 && result > 40) {
    return result + 10;
  }
  if (result < 5) {
    return result;
  }
}

module.exports = multiply;
