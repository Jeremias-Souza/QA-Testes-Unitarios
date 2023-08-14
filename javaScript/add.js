function add(a, b) {
  const result = a + b;

  if (result > 10) {
    return result * 10;
  } else {
    return result;
  }
}

module.exports = add;
