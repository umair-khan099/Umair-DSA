// Count vowels and consonants in a string

const str = "hello world"; // input maan lo

let vowels = 0;
let consonants = 0;

const vowelSet = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  // check letter hai ya nahi
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    if (vowelSet.includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
