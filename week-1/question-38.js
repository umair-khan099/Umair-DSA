// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

const isStrongNumber = (num) => {
  let origional = num;
  let sum = 0;
  //   let result2 = 1;
  while (num > 0) {
    let digit = num % 10;

    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
      factorial *= i;
    }
    sum += factorial;
    num = Math.floor(num / 10);
    // return factorial;
  }
  return `${sum == origional} ${origional} is a strong number`;
};

console.log(isStrongNumber(145));
