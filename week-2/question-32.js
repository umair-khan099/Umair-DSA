// Find Greatest Common Divisor of Array

function findGCD(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return gcd(min, max);
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(findGCD([2,5,6,9,10]));