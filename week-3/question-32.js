// Check if Numbers Are Ascending in a Sentence

function areNumbersAscending(s) {
    let words = s.split(" ");
    let prev = -Infinity;

    for (let word of words) {
        if (!isNaN(word)) {
            let num = Number(word);

            if (num <= prev) {
                return false;
            }

            prev = num;
        }
    }

    return true;
}


console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green balls")); 
console.log(areNumbersAscending("1 box has 3 blue 3 red balls"));