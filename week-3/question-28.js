// Check if Number Has Equal Digit Count and Digit Value

function digitCount(num) {
  let freq = {};

  for (let ch of num) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let i = 0; i < num.length; i++) {
    let expected = Number(num[i]);
    let actual = freq[i] || 0;

    if (expected !== actual) {
      return false;
    }
  }

  return true;
}

console.log(digitCount("1210"));
console.log(digitCount("030"));
