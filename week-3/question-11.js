// Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

const str = "AcgDfD"; 

let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

  if (ch >= "a" && ch <= "z") {
    result += ch.toUpperCase();
  } else if (ch >= "A" && ch <= "Z") {
    result += ch.toLowerCase();
  } else {
    result += ch; 
  }
}

console.log(result);
