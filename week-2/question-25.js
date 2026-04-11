// Maximum Number of Pairs in Array

function maxPairs(nums) {
  const set = new Set();
  let pairs = 0;

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
      pairs++;
    } else {
      set.add(num);
    }
  }

  return [pairs, set.size];
}

console.log(maxPairs([1, 3, 2, 1, 3, 2, 2]));
