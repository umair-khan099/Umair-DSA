// Build Array from Permutation

let array = [1, 2, 3, 4, 5];
let ans = [];

for (let i = 0; i < array.length - 1; i++) {
  ans[i] = array[array[i]];
}

console.log(ans);
