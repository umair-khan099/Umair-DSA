// Extend the previous question and capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)

const str = "Hello bhai Kaise ho a"; // input

let words = str.split(" ");
let result = [];

for (let word of words) {
    if (word.length === 1) {
        result.push(word.toUpperCase());
    } else {
        let first = word.charAt(0).toUpperCase();
        let middle = word.slice(1, word.length - 1);
        let last = word.charAt(word.length - 1).toUpperCase();

        result.push(first + middle + last);
    }
}

console.log(result.join(" "));