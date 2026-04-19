// Check if All A's Appears Before All B's

function checkString(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === 'b' && s[i + 1] === 'a') {
            return false;
        }
    }
    return true;
}

// test
console.log(checkString("aaabbb")); 
console.log(checkString("abab"));   