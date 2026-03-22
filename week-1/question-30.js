// Print all the factors of a number.

const factors = (num) => {
  let Factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      Factors.push(i);
      if (i !== num / i) {
        Factors.push(num / i);
      }
    }
  }
  return Factors.sort((a, b) => a - b);
};

console.log(factors(36));
// factors(36);
