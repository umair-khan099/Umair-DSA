// Check Whether Two Strings are Almost Equivalent
function checkAlmostEquivalent(word1, word2) {
  let freq = new Array(26).fill(0);


  for (let ch of word1) {
    freq[ch.charCodeAt(0) - 97]++;
  }


  for (let ch of word2) {
    freq[ch.charCodeAt(0) - 97]--;
  }


  for (let val of freq) {
    if (Math.abs(val) > 3) {
      return false;
    }
  }

  return true;
}

console.log(checkAlmostEquivalent("aaaa", "bccb"));
console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
