// Largest 3-Same-Digit Number in String

function largestGoodInteger(num) {
  let max = "";

  for (let i = 0; i < num.length - 2; i++) {
    let ch = num[i];

    if (ch === num[i + 1] && ch === num[i + 2]) {
      let candidate = ch + ch + ch;

      if (candidate > max) {
        max = candidate;
      }
    }
  }

  return max;
}


console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));
