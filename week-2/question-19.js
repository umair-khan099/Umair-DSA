// Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})

let arr = [2, 3, 4, 5, 6];

let prev = arr[0];

arr[0] = arr[0] * arr[1];

for (let i = 1; i < arr.length - 1; i++) {
  let curr = arr[i];
  arr[i] = prev * arr[i + 1];

  prev = curr;
}

arr[arr.length - 1] = prev * arr[arr.length - 1];

console.log(arr);
