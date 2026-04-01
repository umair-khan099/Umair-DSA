// Strong number using methods.

let num = 145;

let factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

const isStrongNumber = (num) => {
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

if (isStrongNumber(number)) {
  console.log("Strong Number");
} else {
  console.log("Not a Strong Number");
}
