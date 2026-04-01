// Special Number Using methods

const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const isSpecialNumber = (num) => {
  let original = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += factorial(digit);
    num = Math.floor(num / 10);
  }

  return sum === original;
};

let number = 145;

if (isSpecialNumber(number)) {
  console.log("Special Number");
} else {
  console.log("Not a Special Number");
}
