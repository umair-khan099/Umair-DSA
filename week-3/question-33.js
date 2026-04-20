// Reverse Prefix of Word

function reversePrefix(word, ch) {
    let idx = word.indexOf(ch);

    if (idx === -1) return word;

    let prefix = word.slice(0, idx + 1)
                     .split("")
                     .reverse()
                     .join("");

    let suffix = word.slice(idx + 1);

    return prefix + suffix;
}


console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("abcd", "z"));