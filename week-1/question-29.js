// Print the sum of all even & odd numbers in a range separately.

const findEvenOdd = (start, end) => {
  let even = 0;
  let odd = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  return { even, odd };
};

console.log(findEvenOdd(1, 10));
