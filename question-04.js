// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"

const sorted = (...nums) => {
    let isSorted = true
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i+1]) {
        isSorted = false;
    }
  }
  if (isSorted) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(sorted(1, 2, 3, 4, 4, 5));


// console.log(sorted(1, 2, 3, 4, 5, 4));
