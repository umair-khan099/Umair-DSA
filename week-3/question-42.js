// Move Zeroes

function moveZeroes(nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
}


let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
