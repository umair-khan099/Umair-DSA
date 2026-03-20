// Print natural number up to n.

const printNaturalNum = (num) => {
  if (num == 0) {
    return "not a natural number";
  }
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

console.log(printNaturalNum(0));
printNaturalNum(10)
