function division(a, b) {
  const result = a / b;

  if (result >= 100 && result >= 40) {
    return result * 2;
  }
  if (result <= 50 && result >= 0) {
    return result * 10;
  }
  if (result < 0) {
    return result - result;
  }
}

module.exports = division;
