// Accept an English alphabet from user and check if it is a consonant or a vowel.

const isVowelorConst = (alphabet) => {
  if (
    alphabet == "a" ||
    alphabet == "e" ||
    alphabet == "i" ||
    alphabet == "o" ||
    alphabet == "u"
  ) {
    return `${alphabet} is an Vowel`;
  } else if (
    alphabet == "A" ||
    alphabet == "E" ||
    alphabet == "I" ||
    alphabet == "O" ||
    alphabet == "U"
  ) {
    return `${alphabet} is an Vowel`;
  } else {
    return `${alphabet} is consonent`;
  }
};

console.log(isVowelorConst("f"))