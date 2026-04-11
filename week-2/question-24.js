// Divide Array Into Equal Pairs


function divideArray(nums) {
  const freq = new Map();

  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let count of freq.values()) {
    if (count % 2 !== 0) return false;
  }

  return true;
}

console.log(divideArray([1,2,2,1,3,3])); // true
console.log(divideArray([1,2,3,4]));     // false