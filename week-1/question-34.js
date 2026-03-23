// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

const seprateNum = (num) => {
  let result = [];
  while (num > 0) {
    result.push(num % 10);
    num = Math.floor(num / 10);
  }
  return result;
};

console.log(seprateNum(123));
