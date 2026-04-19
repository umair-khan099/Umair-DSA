// Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)

const str = "Hello bhai kaise ho"; // input maan lo sir jii

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let capitalized =
        word.charAt(0).toUpperCase() + word.slice(1);

    console.log(capitalized);
}