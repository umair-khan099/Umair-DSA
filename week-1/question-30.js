// Print all the factors of a number.

const factors = (num) => {
  //   let Factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      //   Factors.push(i);
      console.log(i);
    }
  }
  //   return Factors;
};

// console.log(factors(36));
factors(36);
