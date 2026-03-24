// Question 22 using Switch (Check Consonant or Vowel using Switch)

let char = "a";

switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(`${char} is a Vowel`);
    break;

  default:
    console.log(`${char} is a consonent`);
}
