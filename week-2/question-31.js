// Count Hills and Valleys in an Array

function countHillValley(nums) {
  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && nums[left] === nums[i]) {
      left--;
    }

    while (right < nums.length && nums[right] === nums[i]) {
      right++;
    }

    if (left >= 0 && right < nums.length) {
      if (nums[i] > nums[left] && nums[i] > nums[right]) {
        count++; 
      } else if (nums[i] < nums[left] && nums[i] < nums[right]) {
        count++; 
      }
    }
  }

  return count;
}

console.log(countHillValley([2, 4, 1, 1, 6, 5]));
