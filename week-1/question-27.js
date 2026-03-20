// Sum up to n terms.
let result = 0;
const Sum = (num) => {
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  console.log(result);
};

Sum(10);
