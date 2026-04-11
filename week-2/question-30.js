// Make Array Zero by Subtracting Equal Amounts

function minimumOperations(nums) {
  const set = new Set();

  for (let num of nums) {
    if (num > 0) {
      set.add(num);
    }
  }

  return set.size;
}

console.log(minimumOperations([1,5,0,3,5]));