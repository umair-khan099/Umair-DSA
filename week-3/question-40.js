// Replace Elements with Greatest Element on Right Side

function replaceElements(arr) {
  let maxRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, current);
  }

  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
