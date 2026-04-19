// Percentage of Letter in String

function percentageLetter(s, letter) {
  let count = 0;

  for (let ch of s) {
    if (ch === letter) {
      count++;
    }
  }

  let percentage = Math.floor((count / s.length) * 100);
  return percentage;
}

console.log(percentageLetter("foobar", "o"));
