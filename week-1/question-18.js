// Accept three numbers and print the greatest among them

const greatestAmoungThree = (num1, num2, num3) => {
  if (num1 == num2 && num1 == num3) {
    return `All Are Equal`;
  } else if (num1 >= num2 && num1 >= num3) {
    return `${num1} num1 is Greatest Among Them `;
  } else if (num2 >= num1 && num2 >= num3) {
    return `${num2} num2 is Greatest Among Them`;
  } else {
    return `${num3} num3 is Greatest Among Them`;
  }
};

console.log(greatestAmoungThree(20, 20, 0));
