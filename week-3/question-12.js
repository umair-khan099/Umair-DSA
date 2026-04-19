// Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. (Example - Input: words = [\pay\"

const words = ["pay", "attention", "practice", "attend"];
const pref = "at";

let count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
        count++;
    }
}

console.log(count);