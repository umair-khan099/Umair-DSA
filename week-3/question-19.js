// Count Asterisks

function countAsterisks(s) {
  let count = 0;
  let inside = false;

  for (let ch of s) {
    if (ch === "|") {
      inside = !inside; // toggle
    } else if (ch === "*" && !inside) {
      count++;
    }
  }

  return count;
}


let str = "l|*e*et|c**o|*de|";
console.log(countAsterisks(str));
