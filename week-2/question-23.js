// Find sum of minimum absolute difference of the given array

function minAbsDiffSum(arr) {
  if (arr.length < 2) return 0;

  arr.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }

  return sum;
}

console.log(minAbsDiffSum([3, 8, 15, 1]));