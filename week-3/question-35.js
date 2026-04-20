// Max Consecutive Ones

function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let max = 0;

  for (let num of nums) {
    if (num === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }

  return max;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
