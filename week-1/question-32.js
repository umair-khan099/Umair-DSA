// Check if the number is Prime or not.

const checkIsPrime = (num) => {
  if (num <= 1) return `${num} isnot a prime number`;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
};

console.log(checkIsPrime(11));
