// Accept two numbers and print the greatest between them

const findGreatest = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is greater `;
  } else {
    return `${num2} is greater`;
  }
};

console.log(findGreatest(10, 20));
