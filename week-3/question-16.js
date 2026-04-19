// Check Two Strings are Anagram or Not (Anagrams words have the same word length & same character count. Examples of anagram words are arc and car, state and taste, night and thing etc.)

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    let freq = {};

    for (let ch of s1) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s2) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }

    return true;
}


console.log(isAnagram("state", "taste"));
console.log(isAnagram("hello", "world")); 