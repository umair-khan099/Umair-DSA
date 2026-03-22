// Factorial of a number

// itreation Approch

const Factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(Factorial(5));
