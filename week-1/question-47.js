// Right Triangle - Alphabet Pattern
let rows = 5;
let alphabet = "A";
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += alphabet;
  }
  console.log(pattern);
  alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
}
