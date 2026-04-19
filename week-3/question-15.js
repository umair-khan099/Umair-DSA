// Accept a string and print the frequency of each character present in the string

const str = "hello"; 

let freq = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}


for (let key in freq) {
  console.log(key + " -> " + freq[key]);
}
