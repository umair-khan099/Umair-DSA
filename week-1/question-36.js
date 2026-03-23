// Accept a number and print its reverse

const reverseNumber = (num) => {
  let result = 0;
  while (num > 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }
  return result;
};

console.log(reverseNumber(123));

// let num = 1432;

// console.log(Math.floor(num / 10));
