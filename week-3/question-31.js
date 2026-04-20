// Check Whether Two Strings are Almost Equivalent
function checkAlmostEquivalent(word1, word2) {
  let freq = new Array(26).fill(0);

  // count word1
  for (let ch of word1) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  // subtract word2
  for (let ch of word2) {
    freq[ch.charCodeAt(0) - 97]--;
  }

  // check difference
  for (let val of freq) {
    if (Math.abs(val) > 3) {
      return false;
    }
  }

  return true;
}

console.log(checkAlmostEquivalent("aaaa", "bccb"));
console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
