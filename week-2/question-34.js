// Minimum Sum of Four Digit Number After Splitting Digits

function minimumSum(num) {
  const digits = String(num).split('').map(Number);

  digits.sort((a, b) => a - b);

  const num1 = digits[0] * 10 + digits[2];
  const num2 = digits[1] * 10 + digits[3];

  return num1 + num2;
}

console.log(minimumSum(2932));