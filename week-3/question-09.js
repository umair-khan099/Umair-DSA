// Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

function isPalindromeTwoPointer(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

let str = "madam";

console.log(isPalindromeTwoPointer(str) ? "Palindrome" : "Not Palindrome");
    