// Rearrange Characters to Make Target String
function rearrangeCharacters(s, target) {
  let sFreq = {};
  let tFreq = {};

  for (let ch of s) {
    sFreq[ch] = (sFreq[ch] || 0) + 1;
  }

  for (let ch of target) {
    tFreq[ch] = (tFreq[ch] || 0) + 1;
  }

  let min = Infinity;

  for (let ch in tFreq) {
    let possible = Math.floor((sFreq[ch] || 0) / tFreq[ch]);
    min = Math.min(min, possible);
  }

  return min;
}

// test
console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
