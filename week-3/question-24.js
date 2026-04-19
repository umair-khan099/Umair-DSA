// Greatest English Letter in Upper and Lower Case

function greatestLetter(s) {
    let set = new Set(s);

    for (let i = 25; i >= 0; i--) {
        let upper = String.fromCharCode(65 + i); // 'A'
        let lower = String.fromCharCode(97 + i); // 'a'

        if (set.has(upper) && set.has(lower)) {
            return upper;
        }
    }

    return "";
}


console.log(greatestLetter("lEeTcOdE"));
console.log(greatestLetter("abc"));