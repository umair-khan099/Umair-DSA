// Count Equal and Divisible Pairs in an Array

function countPairs(nums, k) {
  const map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }

    for (let j of map.get(nums[i])) {
      if ((i * j) % k === 0) {
        count++;
      }
    }

    map.get(nums[i]).push(i);
  }

  return count;
}

console.log((nums = [3, 1, 2, 2, 2, 1, 3]), (k = 2));
