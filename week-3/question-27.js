// Remove Digit From Number to Maximize Result

function removeDigit(number, digit) {
    let max = "";

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let candidate = number.slice(0, i) + number.slice(i + 1);

            if (candidate > max) {
                max = candidate;
            }
        }
    }

    return max;
}

// test
console.log(removeDigit("1231", "1")); 
console.log(removeDigit("551", "5")); 