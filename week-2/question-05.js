// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

const reverse = (...num) => {
  let reverseArr = [];
  for (let i = num.length-1; i >= 0; i--) {
    reverseArr.push(num[i]);
  }
  return reverseArr;
};

console.log(reverse(1, 2, 3, 4, 5));
