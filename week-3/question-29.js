// Find Resultant Array After Removing Anagrams

function isAnagram(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("");
}

function removeAnagrams(words) {
    let result = [];

    for (let word of words) {
        if (result.length === 0) {
            result.push(word);
        } else {
            let last = result[result.length - 1];

            if (!isAnagram(word, last)) {
                result.push(word);
            }
        }
    }

    return result;
}


let words = ["abba","baba","bbaa","cd","cd"];
console.log(removeAnagrams(words));