// Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)

const sumOfFactor = (num) => {
  let factors = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      factors += i;
      if (i !== num / i) {
        factors += num / i;
      }
    }
  }
  return factors;
};

console.log(sumOfFactor(36));
