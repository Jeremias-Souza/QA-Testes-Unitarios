function subtract(a, b) {
  const result = a - b;

  if (result > 0 && result <= 10) {
    return result + 10;
  }
  if (result > 10) {
    return result + 100;
  } else {
    return result;
  }
}

module.exports = subtract;
