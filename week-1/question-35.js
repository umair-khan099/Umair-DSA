// Sum of digits of a number (Ex: 936 = 18)

const digitsSum = (num) => {
  let sum = 0;

  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
};

// digitsSum(123);
console.log(digitsSum(923));
