// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)

let array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    sum += array[j] - array[i];
  }
}

console.log(sum);
