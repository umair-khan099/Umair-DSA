// Duplicate Zeros

function duplicateZeros(arr) {
  let n = arr.length;
  let zeros = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
  }

  let i = n - 1;
  let j = n + zeros - 1;

  while (i >= 0) {
    if (j < n) {
      arr[j] = arr[i];
    }

    if (arr[i] === 0) {
      j--;
      if (j < n) {
        arr[j] = 0;
      }
    }

    i--;
    j--;
  }
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
