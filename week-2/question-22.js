// Sort First half in Ascending and Second half in descending order in an array

function customSort(arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const mid = Math.ceil(n / 2);

  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid).reverse();

  return [...firstHalf, ...secondHalf];
}

console.log(customSort([5, 2, 8, 1, 9, 3]));
